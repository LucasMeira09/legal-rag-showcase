import { NextRequest, NextResponse } from 'next/server';

// Données mockées pour la démonstration
const mockLegalDocuments = [
  {
    id: 1,
    title: "Directive (UE) 2018/851 - Déchets",
    source: "eur-lex.europa.eu",
    date: "2018-05-30",
    excerpt: "Modifie la directive 2008/98/CE, obligations de tri, objectifs de recyclage pour 2025 et 2030, responsabilité élargie du producteur, gestion des déchets dangereux...",
    type: "Directive UE",
    jurisdiction: "UE",
    relevance: 95,
    link: "https://eur-lex.europa.eu/eli/dir/2018/851/oj",
    tags: ["déchets", "recyclage", "REP", "objectifs"],
    obligations: [
      "Obligation de tri à la source des déchets",
      "Objectif de recyclage de 55% d'ici 2025",
      "Responsabilité élargie du producteur"
    ],
    sanctions: "Sanctions administratives et financières selon la réglementation nationale"
  },
  {
    id: 2,
    title: "Arrêté régional – Filière REP Emballages",
    source: "Moniteur belge",
    date: "2023-11-14",
    excerpt: "Mise en place des exigences d'information et de traçabilité pour les emballages ménagers, déclarations trimestrielles, contrôles renforcés...",
    type: "Arrêté régional",
    jurisdiction: "Région wallonne",
    relevance: 88,
    link: "#",
    tags: ["emballages", "REP", "traçabilité", "déclarations"],
    obligations: [
      "Déclarations trimestrielles des quantités",
      "Traçabilité complète des flux",
      "Information des consommateurs"
    ],
    sanctions: "Amendes de 250€ à 25.000€"
  },
  {
    id: 3,
    title: "Code de l'environnement - Art. L541-1",
    source: "Legifrance",
    date: "2023-01-01",
    excerpt: "Définition des déchets, hiérarchie de traitement, obligation de tri à la source, sanctions administratives, responsabilité du producteur...",
    type: "Code de loi",
    jurisdiction: "France",
    relevance: 92,
    link: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043783442",
    tags: ["déchets", "tri", "hiérarchie", "responsabilité"],
    obligations: [
      "Définition des déchets",
      "Hiérarchie de traitement",
      "Tri à la source obligatoire"
    ],
    sanctions: "Contravention de 5ème classe (jusqu'à 1.500€)"
  },
  {
    id: 4,
    title: "Jurisprudence - Conseil d'État",
    source: "Conseil d'État",
    date: "2023-09-15",
    excerpt: "Arrêt concernant la responsabilité des producteurs dans la gestion des déchets d'équipements électriques, obligation de reprise, sanctions...",
    type: "Jurisprudence",
    jurisdiction: "France",
    relevance: 85,
    link: "#",
    tags: ["DEEE", "responsabilité", "reprise", "producteur"],
    obligations: [
      "Obligation de reprise des DEEE",
      "Responsabilité du producteur",
      "Mise en place de systèmes de collecte"
    ],
    sanctions: "Sanctions selon la réglementation DEEE"
  },
  {
    id: 5,
    title: "Règlement (UE) 2019/1020 - Emballages",
    source: "eur-lex.europa.eu",
    date: "2019-06-20",
    excerpt: "Nouvelles règles pour les emballages, exigences de recyclabilité, marquage obligatoire, objectifs de réduction...",
    type: "Règlement UE",
    jurisdiction: "UE",
    relevance: 90,
    link: "https://eur-lex.europa.eu/eli/reg/2019/1020/oj",
    tags: ["emballages", "recyclabilité", "marquage", "réduction"],
    obligations: [
      "Marquage des emballages",
      "Exigences de recyclabilité",
      "Objectifs de réduction"
    ],
    sanctions: "Sanctions selon la réglementation nationale"
  },
  {
    id: 6,
    title: "Décret n°2023-1234 - Déchets dangereux",
    source: "Legifrance",
    date: "2023-08-15",
    excerpt: "Modification des règles de gestion des déchets dangereux, nouvelles obligations de traçabilité, déclarations renforcées...",
    type: "Décret",
    jurisdiction: "France",
    relevance: 87,
    link: "#",
    tags: ["déchets dangereux", "traçabilité", "déclarations"],
    obligations: [
      "Traçabilité renforcée",
      "Déclarations périodiques",
      "Formation du personnel"
    ],
    sanctions: "Amendes jusqu'à 75.000€ et 2 ans de prison"
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const type = searchParams.get('type') || '';
    const jurisdiction = searchParams.get('jurisdiction') || '';
    const limit = parseInt(searchParams.get('limit') || '10');

    // Simulation de recherche sémantique
    let results = mockLegalDocuments;

    // Filtrage par type
    if (type) {
      results = results.filter(doc => doc.type.toLowerCase().includes(type.toLowerCase()));
    }

    // Filtrage par juridiction
    if (jurisdiction) {
      results = results.filter(doc => doc.jurisdiction.toLowerCase().includes(jurisdiction.toLowerCase()));
    }

    // Recherche textuelle simple (simulation IA)
    if (query) {
      const queryLower = query.toLowerCase();
      results = results.filter(doc => 
        doc.title.toLowerCase().includes(queryLower) ||
        doc.excerpt.toLowerCase().includes(queryLower) ||
        doc.tags.some(tag => tag.toLowerCase().includes(queryLower))
      );

      // Calcul de pertinence simulée
      results = results.map(doc => {
        let relevance = doc.relevance;
        
        // Boost si le titre contient la requête
        if (doc.title.toLowerCase().includes(queryLower)) {
          relevance += 10;
        }
        
        // Boost si les tags correspondent
        const matchingTags = doc.tags.filter(tag => tag.toLowerCase().includes(queryLower));
        relevance += matchingTags.length * 5;
        
        return { ...doc, relevance: Math.min(relevance, 100) };
      });

      // Tri par pertinence
      results.sort((a, b) => b.relevance - a.relevance);
    }

    // Limitation des résultats
    results = results.slice(0, limit);

    // Simulation de délai de traitement IA
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

    return NextResponse.json({
      success: true,
      query,
      results: results.map(doc => ({
        id: doc.id,
        title: doc.title,
        source: doc.source,
        date: doc.date,
        excerpt: doc.excerpt,
        type: doc.type,
        jurisdiction: doc.jurisdiction,
        relevance: doc.relevance,
        link: doc.link,
        tags: doc.tags,
        obligations: doc.obligations,
        sanctions: doc.sanctions
      })),
      total: results.length,
      processingTime: Math.round(Math.random() * 800 + 200) + "ms",
      suggestions: query ? [
        `${query} obligations`,
        `${query} sanctions`,
        `${query} 2023`,
        `${query} responsabilité`
      ] : []
    });

  } catch (error) {
    console.error('Erreur API search:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Erreur lors de la recherche',
        message: 'Une erreur est survenue lors de la recherche. Veuillez réessayer.'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, filters = {}, options = {} } = body;

    // Simulation de recherche avancée
    let results = mockLegalDocuments;

    // Filtres avancés
    if (filters.type) {
      results = results.filter(doc => doc.type === filters.type);
    }

    if (filters.jurisdiction) {
      results = results.filter(doc => doc.jurisdiction === filters.jurisdiction);
    }

    if (filters.dateFrom) {
      results = results.filter(doc => new Date(doc.date) >= new Date(filters.dateFrom));
    }

    if (filters.tags && filters.tags.length > 0) {
      results = results.filter(doc => 
        filters.tags.some((tag: string) => doc.tags.includes(tag))
      );
    }

    // Recherche sémantique simulée
    if (query) {
      const queryLower = query.toLowerCase();
      results = results.filter(doc => 
        doc.title.toLowerCase().includes(queryLower) ||
        doc.excerpt.toLowerCase().includes(queryLower) ||
        doc.tags.some(tag => tag.toLowerCase().includes(queryLower))
      );

      // Calcul de pertinence avancé
      results = results.map(doc => {
        let relevance = doc.relevance;
        
        // Boost pour correspondance exacte dans le titre
        if (doc.title.toLowerCase().includes(queryLower)) {
          relevance += 15;
        }
        
        // Boost pour tags correspondants
        const matchingTags = doc.tags.filter(tag => tag.toLowerCase().includes(queryLower));
        relevance += matchingTags.length * 8;
        
        // Boost pour correspondance dans l'excerpt
        if (doc.excerpt.toLowerCase().includes(queryLower)) {
          relevance += 5;
        }
        
        return { ...doc, relevance: Math.min(relevance, 100) };
      });

      results.sort((a, b) => b.relevance - a.relevance);
    }

    // Options de tri
    if (options.sortBy === 'date') {
      results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (options.sortBy === 'relevance') {
      results.sort((a, b) => b.relevance - a.relevance);
    }

    // Pagination
    const page = options.page || 1;
    const limit = options.limit || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    const paginatedResults = results.slice(startIndex, endIndex);

    // Simulation de délai de traitement
    await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 700));

    return NextResponse.json({
      success: true,
      query,
      filters,
      results: paginatedResults.map(doc => ({
        id: doc.id,
        title: doc.title,
        source: doc.source,
        date: doc.date,
        excerpt: doc.excerpt,
        type: doc.type,
        jurisdiction: doc.jurisdiction,
        relevance: doc.relevance,
        link: doc.link,
        tags: doc.tags,
        obligations: doc.obligations,
        sanctions: doc.sanctions
      })),
      pagination: {
        page,
        limit,
        total: results.length,
        totalPages: Math.ceil(results.length / limit)
      },
      processingTime: Math.round(Math.random() * 600 + 300) + "ms",
      aiInsights: {
        summary: `Recherche sémantique effectuée avec ${query ? 'requête contextuelle' : 'filtres avancés'}. ${paginatedResults.length} résultats pertinents trouvés.`,
        suggestions: query ? [
          `${query} obligations légales`,
          `${query} sanctions pénales`,
          `${query} conformité réglementaire`,
          `${query} responsabilité du producteur`
        ] : [],
        relatedTopics: [
          "Conformité environnementale",
          "Responsabilité élargie du producteur",
          "Gestion des déchets dangereux",
          "Traçabilité des déchets"
        ]
      }
    });

  } catch (error) {
    console.error('Erreur API search POST:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Erreur lors de la recherche avancée',
        message: 'Une erreur est survenue lors de la recherche avancée. Veuillez réessayer.'
      },
      { status: 500 }
    );
  }
}
