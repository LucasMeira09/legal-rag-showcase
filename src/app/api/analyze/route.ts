import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { document, type = 'text' } = body;

    if (!document) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Document manquant',
          message: 'Le document à analyser est requis'
        },
        { status: 400 }
      );
    }

    // Simulation d'analyse IA
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    // Mock analysis results
    const analysis = {
      summary: "Ce document traite des obligations réglementaires en matière de gestion des déchets dangereux. Il définit les responsabilités des producteurs et établit les procédures de traçabilité.",
      obligations: [
        {
          id: 1,
          text: "Obligation de tri à la source des déchets dangereux",
          deadline: "30 jours après la production",
          responsible: "Producteur",
          priority: "haute"
        },
        {
          id: 2,
          text: "Déclaration trimestrielle des quantités traitées",
          deadline: "15 jours après la fin du trimestre",
          responsible: "Installation de traitement",
          priority: "moyenne"
        },
        {
          id: 3,
          text: "Formation du personnel aux risques",
          deadline: "Avant la prise de poste",
          responsible: "Employeur",
          priority: "haute"
        }
      ],
      deadlines: [
        {
          obligation: "Déclaration trimestrielle",
          date: "2024-04-15",
          type: "déclaration",
          status: "à venir"
        },
        {
          obligation: "Renouvellement autorisation",
          date: "2024-06-30",
          type: "autorisation",
          status: "à venir"
        }
      ],
      sanctions: [
        {
          type: "Contravention",
          amount: "1.500€",
          condition: "Non-respect du tri à la source",
          applicable: true
        },
        {
          type: "Amende",
          amount: "75.000€",
          condition: "Déversement illégal",
          applicable: true
        }
      ],
      risks: [
        {
          level: "élevé",
          description: "Risque de sanction pour non-respect des délais de déclaration",
          mitigation: "Mise en place d'alertes automatiques"
        },
        {
          level: "moyen",
          description: "Risque de contamination environnementale",
          mitigation: "Formation renforcée du personnel"
        }
      ],
      complianceScore: 78,
      recommendations: [
        "Mettre en place un système d'alertes pour les déclarations",
        "Former le personnel aux nouvelles obligations",
        "Créer des procédures de traçabilité renforcées"
      ],
      relatedDocuments: [
        {
          title: "Directive (UE) 2018/851 - Déchets",
          relevance: 95,
          link: "#"
        },
        {
          title: "Code de l'environnement - Art. L541-1",
          relevance: 88,
          link: "#"
        }
      ]
    };

    return NextResponse.json({
      success: true,
      analysis,
      processingTime: Math.round(Math.random() * 1500 + 1000) + "ms",
      confidence: Math.round(Math.random() * 20 + 80), // 80-100%
      metadata: {
        documentType: type,
        analyzedAt: new Date().toISOString(),
        aiModel: "juridical-analyzer-v2.1",
        language: "fr"
      }
    });

  } catch (error) {
    console.error('Erreur API analyze:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Erreur lors de l\'analyse du document',
        message: 'Une erreur est survenue lors de l\'analyse. Veuillez réessayer.'
      },
      { status: 500 }
    );
  }
}

// Endpoint pour l'analyse de fichiers
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { fileId, analysisType = 'full' } = body;

    if (!fileId) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'ID de fichier manquant',
          message: 'L\'ID du fichier à analyser est requis'
        },
        { status: 400 }
      );
    }

    // Simulation d'analyse de fichier
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));

    const fileAnalysis = {
      fileInfo: {
        id: fileId,
        name: "document_juridique.pdf",
        size: "2.3 MB",
        type: "application/pdf",
        uploadedAt: new Date().toISOString()
      },
      extractedText: "Document juridique concernant la gestion des déchets...",
      analysis: {
        summary: "Analyse complète du document juridique réalisée avec succès",
        obligations: [
          "Obligation de déclaration mensuelle",
          "Respect des normes de sécurité",
          "Formation du personnel obligatoire"
        ],
        complianceScore: 85,
        recommendations: [
          "Mise à jour des procédures internes",
          "Formation complémentaire recommandée"
        ]
      },
      processingTime: Math.round(Math.random() * 2000 + 2000) + "ms",
      confidence: Math.round(Math.random() * 15 + 85) // 85-100%
    };

    return NextResponse.json({
      success: true,
      fileAnalysis,
      metadata: {
        analyzedAt: new Date().toISOString(),
        aiModel: "document-parser-v1.5",
        analysisType
      }
    });

  } catch (error) {
    console.error('Erreur API analyze PUT:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Erreur lors de l\'analyse du fichier'
      },
      { status: 500 }
    );
  }
}
