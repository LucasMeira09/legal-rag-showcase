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
    icon: FileText,
    title: "Analyse automatique de documents",
    description: "Extraction automatique des obligations, délais, sanctions et impacts. Résumés intelligents et synthèses exécutives générées instantanément.",
    badges: ["Extraction", "Synthèse"],
    color: "from-purple-500 to-violet-500"
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
            Des outils puissants conçus pour les professionnels de votre secteur.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 max-w-4xl mx-auto">
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
