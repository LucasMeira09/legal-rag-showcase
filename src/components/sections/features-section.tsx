"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
    BarChart3,
    Bell,
    CheckSquare,
    FileDown,
    FileText,
    Globe,
    History,
    Search,
    Shield,
    Target,
    Users,
    Zap
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: Search,
    title: "Recherche sémantique juridique",
    description: "Recherchez par concepts plutôt que par mots-clés. Notre IA comprend le contexte et trouve les textes pertinents même avec des formulations différentes.",
    badges: ["IA avancée", "Contexte"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Bell,
    title: "Veille & alertes automatiques",
    description: "Créez des alertes personnalisées sur vos domaines d'activité. Recevez des notifications en temps réel des évolutions réglementaires.",
    badges: ["Temps réel", "Personnalisé"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: FileText,
    title: "Analyse automatique de documents",
    description: "Extraction automatique des obligations, délais, sanctions et impacts. Résumés intelligents et synthèses exécutives générées instantanément.",
    badges: ["Extraction", "Synthèse"],
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Globe,
    title: "Comparateur multi-juridictions",
    description: "Comparez les réglementations entre UE, fédéral et régional. Visualisez les différences et impacts sur votre activité.",
    badges: ["Comparaison", "Visualisation"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: CheckSquare,
    title: "Assistant conformité",
    description: "Checklist dynamique basée sur vos activités. Vérification automatique de conformité ISO 14001 et réglementations locales.",
    badges: ["ISO 14001", "Checklist"],
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: FileDown,
    title: "Générateur de rapports",
    description: "Export automatique en PDF/Word avec sources citées. Rapports d'audit, synthèses réglementaires et documentation prête à l'emploi.",
    badges: ["Export", "Sources"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: History,
    title: "Historique & favoris",
    description: "Conservez vos recherches importantes et créez des collections thématiques. Accès rapide à vos documents de référence.",
    badges: ["Sauvegarde", "Collections"],
    color: "from-teal-500 to-green-500"
  },
  {
    icon: Users,
    title: "Espace équipe collaboratif",
    description: "Dossiers partagés, commentaires et annotations. Gestion des rôles et permissions pour une collaboration efficace.",
    badges: ["Collaboration", "Rôles"],
    color: "from-amber-500 to-yellow-500"
  }
];

const additionalFeatures = [
  {
    icon: Zap,
    title: "API complète",
    description: "Intégrez nos fonctionnalités dans vos outils existants"
  },
  {
    icon: Shield,
    title: "Sécurité enterprise",
    description: "Chiffrement end-to-end et conformité RGPD"
  },
  {
    icon: Target,
    title: "Précision optimisée",
    description: "95% de précision grâce à l'apprentissage continu"
  },
  {
    icon: BarChart3,
    title: "Analytics avancées",
    description: "Tableaux de bord et métriques de conformité"
  }
];

export function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fonctionnalités{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              révolutionnaires
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre IA juridique transforme la façon dont vous gérez la conformité environnementale. 
            Des outils puissants conçus pour les professionnels du secteur des déchets.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full glass hover-glow cursor-glow group transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex space-x-1">
                      {feature.badges.map((badge) => (
                        <Badge key={badge} variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t border-border/50 pt-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
            Et bien plus encore
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/10 hover-glow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-4">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-foreground font-medium">
              Prêt à découvrir toutes ces fonctionnalités ? Testez notre IA dès maintenant.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
