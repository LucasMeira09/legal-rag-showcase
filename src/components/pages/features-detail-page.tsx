"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BarChart3,
    Bell,
    CheckSquare,
    FileDown,
    FileText,
    Globe,
    History,
    Play,
    Search,
    Shield,
    Target,
    Users,
    Zap
} from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const detailedFeatures = [
  {
    id: "recherche-semantique",
    icon: Search,
    title: "Recherche sémantique juridique",
    description: "Recherchez par concepts plutôt que par mots-clés. Notre IA comprend le contexte et trouve les textes pertinents même avec des formulations différentes.",
    longDescription: "Notre moteur de recherche sémantique révolutionne la façon dont vous accédez à l'information juridique. Plutôt que de chercher des mots-clés exacts, vous pouvez poser des questions en langage naturel. L'IA comprend l'intention derrière votre requête et trouve les documents pertinents, même s'ils utilisent une terminologie différente.",
    capabilities: [
      "Recherche en langage naturel",
      "Compréhension contextuelle",
      "Suggestions intelligentes",
      "Filtres avancés par juridiction",
      "Historique des recherches"
    ],
    benefits: [
      "Gain de temps considérable",
      "Résultats plus pertinents",
      "Découverte de textes connexes",
      "Interface intuitive"
    ],
    demo: {
      placeholder: "Recherche sémantique en action",
      description: "Voyez comment notre IA trouve des textes pertinents avec des requêtes naturelles"
    }
  },
  {
    id: "veille-alertes",
    icon: Bell,
    title: "Veille & alertes automatiques",
    description: "Créez des alertes personnalisées sur vos domaines d'activité. Recevez des notifications en temps réel des évolutions réglementaires.",
    longDescription: "Ne ratez plus jamais une évolution réglementaire importante. Configurez des alertes personnalisées basées sur vos activités, votre secteur géographique et vos domaines d'intérêt. Notre IA surveille en permanence les publications officielles et vous alerte dès qu'un texte pertinent est publié.",
    capabilities: [
      "Alertes personnalisées",
      "Surveillance multi-sources",
      "Notifications en temps réel",
      "Filtrage intelligent",
      "Résumés automatiques"
    ],
    benefits: [
      "Veille proactive",
      "Réactivité accrue",
      "Conformité préventive",
      "Gain de temps"
    ],
    demo: {
      placeholder: "Configuration d'alertes",
      description: "Apprenez à configurer des alertes efficaces pour votre secteur"
    }
  },
  {
    id: "analyse-documents",
    icon: FileText,
    title: "Analyse automatique de documents",
    description: "Extraction automatique des obligations, délais, sanctions et impacts. Résumés intelligents et synthèses exécutives générées instantanément.",
    longDescription: "Transformez n'importe quel document juridique en informations exploitables. Notre IA extrait automatiquement les obligations, identifie les délais, liste les sanctions applicables et résume les impacts pour votre activité. Plus besoin de lire des dizaines de pages pour comprendre l'essentiel.",
    capabilities: [
      "Extraction d'obligations",
      "Identification des délais",
      "Liste des sanctions",
      "Résumés exécutifs",
      "Analyse d'impact"
    ],
    benefits: [
      "Compréhension rapide",
      "Extraction précise",
      "Synthèses claires",
      "Économie de temps"
    ],
    demo: {
      placeholder: "Analyse de document",
      description: "Découvrez comment l'IA extrait les informations clés d'un texte juridique"
    }
  },
  {
    id: "comparateur-juridictions",
    icon: Globe,
    title: "Comparateur multi-juridictions",
    description: "Comparez les réglementations entre UE, fédéral et régional. Visualisez les différences et impacts sur votre activité.",
    longDescription: "Naviguez facilement entre les différentes juridictions qui s'appliquent à votre activité. Notre comparateur vous permet de visualiser les différences entre les réglementations européennes, nationales et régionales, et d'identifier les impacts spécifiques pour votre entreprise.",
    capabilities: [
      "Comparaison UE/Fédéral/Régional",
      "Visualisation des différences",
      "Matrice d'impacts",
      "Cartographie géographique",
      "Alertes de convergence"
    ],
    benefits: [
      "Vue d'ensemble claire",
      "Identification des risques",
      "Optimisation de la conformité",
      "Planification stratégique"
    ],
    demo: {
      placeholder: "Comparaison de réglementations",
      description: "Explorez les différences entre juridictions pour votre secteur"
    }
  },
  {
    id: "assistant-conformite",
    icon: CheckSquare,
    title: "Assistant conformité",
    description: "Checklist dynamique basée sur vos activités. Vérification automatique de conformité ISO 14001 et réglementations locales.",
    longDescription: "Votre assistant personnel pour la conformité. Basé sur votre profil d'activité, l'IA génère une checklist dynamique des obligations applicables et vérifie automatiquement votre niveau de conformité. Intégration complète avec les standards ISO 14001 et autres certifications environnementales.",
    capabilities: [
      "Checklist dynamique",
      "Vérification automatique",
      "Intégration ISO 14001",
      "Plan d'action personnalisé",
      "Suivi des progrès"
    ],
    benefits: [
      "Conformité assurée",
      "Réduction des risques",
      "Optimisation des processus",
      "Certification facilitée"
    ],
    demo: {
      placeholder: "Assistant de conformité",
      description: "Voyez comment l'IA vous guide dans votre conformité"
    }
  },
  {
    id: "generateur-rapports",
    icon: FileDown,
    title: "Générateur de rapports",
    description: "Export automatique en PDF/Word avec sources citées. Rapports d'audit, synthèses réglementaires et documentation prête à l'emploi.",
    longDescription: "Générez des rapports professionnels en quelques clics. L'IA compile automatiquement vos recherches, synthétise les informations et produit des documents prêts à être partagés avec vos équipes, clients ou autorités de contrôle. Toutes les sources sont citées et vérifiées.",
    capabilities: [
      "Export PDF/Word",
      "Citations automatiques",
      "Templates personnalisables",
      "Mise en forme professionnelle",
      "Archivage automatique"
    ],
    benefits: [
      "Documentation professionnelle",
      "Gain de temps considérable",
      "Traçabilité des sources",
      "Partage facilité"
    ],
    demo: {
      placeholder: "Génération de rapport",
      description: "Créez un rapport de conformité en quelques minutes"
    }
  },
  {
    id: "historique-favoris",
    icon: History,
    title: "Historique & favoris",
    description: "Conservez vos recherches importantes et créez des collections thématiques. Accès rapide à vos documents de référence.",
    longDescription: "Organisez vos connaissances juridiques de façon intelligente. Sauvegardez vos recherches importantes, créez des collections thématiques et accédez rapidement à vos documents de référence. L'historique intelligent vous aide à retrouver facilement les informations passées.",
    capabilities: [
      "Sauvegarde de recherches",
      "Collections thématiques",
      "Favoris intelligents",
      "Historique détaillé",
      "Partage d'équipe"
    ],
    benefits: [
      "Organisation optimale",
      "Accès rapide",
      "Collaboration facilitée",
      "Capitalisation des connaissances"
    ],
    demo: {
      placeholder: "Gestion des favoris",
      description: "Organisez vos recherches et créez votre bibliothèque juridique"
    }
  },
  {
    id: "espace-equipe",
    icon: Users,
    title: "Espace équipe collaboratif",
    description: "Dossiers partagés, commentaires et annotations. Gestion des rôles et permissions pour une collaboration efficace.",
    longDescription: "Collaborez efficacement avec votre équipe sur les questions juridiques. Partagez des dossiers, ajoutez des commentaires et annotations, et gérez les permissions pour que chacun ait accès aux bonnes informations selon son rôle dans l'organisation.",
    capabilities: [
      "Dossiers partagés",
      "Commentaires collaboratifs",
      "Gestion des rôles",
      "Workflows d'approbation",
      "Notifications d'équipe"
    ],
    benefits: [
      "Collaboration efficace",
      "Sécurité des données",
      "Traçabilité des actions",
      "Productivité d'équipe"
    ],
    demo: {
      placeholder: "Collaboration d'équipe",
      description: "Découvrez les outils de collaboration juridique"
    }
  }
];

const additionalFeatures = [
  {
    icon: Zap,
    title: "API complète",
    description: "Intégrez nos fonctionnalités dans vos outils existants avec notre API RESTful complète.",
    capabilities: ["REST API", "Documentation complète", "SDK disponibles", "Support technique"]
  },
  {
    icon: Shield,
    title: "Sécurité enterprise",
    description: "Chiffrement end-to-end, conformité RGPD et certifications de sécurité pour protéger vos données.",
    capabilities: ["Chiffrement AES-256", "RGPD compliant", "ISO 27001", "Audits de sécurité"]
  },
  {
    icon: Target,
    title: "Précision optimisée",
    description: "95% de précision grâce à l'apprentissage continu et aux retours utilisateurs.",
    capabilities: ["Machine Learning", "Feedback loop", "Amélioration continue", "Validation experte"]
  },
  {
    icon: BarChart3,
    title: "Analytics avancées",
    description: "Tableaux de bord et métriques de conformité pour suivre vos performances réglementaires.",
    capabilities: ["Dashboard personnalisé", "Métriques KPIs", "Rapports d'usage", "Alertes de performance"]
  }
];

export function FeaturesDetailPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-radial">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Fonctionnalités{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                avancées
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Découvrez en détail toutes les fonctionnalités de notre IA juridique. 
              Des outils puissants conçus pour transformer votre approche de la conformité réglementaire.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
              >
                <Link href="/demo" className="flex items-center space-x-2">
                  <span>Essayer toutes les fonctionnalités</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Features */}
      <section ref={ref} className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {detailedFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {feature.longDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Zap className="h-4 w-4 text-primary mr-2" />
                        Capacités
                      </h4>
                      <ul className="space-y-2">
                        {feature.capabilities.map((capability) => (
                          <li key={capability} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Target className="h-4 w-4 text-primary mr-2" />
                        Bénéfices
                      </h4>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {feature.capabilities.slice(0, 3).map((capability) => (
                      <Badge key={capability} variant="secondary">
                        {capability}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 glass"
                  >
                    <Link href="/demo" className="flex items-center space-x-2">
                      <Play className="h-4 w-4" />
                      <span>Voir la démo</span>
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="glass hover-glow">
                    <CardContent className="p-8 text-center">
                      <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-4">
                        <div className="text-center">
                          <Play className="h-12 w-12 text-primary mx-auto mb-3" />
                          <h4 className="font-semibold text-foreground mb-2">
                            {feature.demo.placeholder}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {feature.demo.description}
                          </p>
                        </div>
                      </div>
                      <Button
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Link href="/demo">
                          Lancer la démo interactive
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Fonctionnalités{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                complémentaires
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Des outils supplémentaires pour optimiser votre expérience et garantir 
              la sécurité et la performance de votre solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full glass hover-glow cursor-glow group transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-1">
                      {feature.capabilities.map((capability) => (
                        <div key={capability} className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          <span>{capability}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Prêt à découvrir toutes ces{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                fonctionnalités
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Commencez votre essai gratuit et explorez toutes les fonctionnalités 
              de notre IA juridique en 14 jours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
              >
                <Link href="/demo" className="flex items-center space-x-2">
                  <span>Essai gratuit 14 jours</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 glass"
              >
                <Link href="/tarifs">
                  Voir les tarifs
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
