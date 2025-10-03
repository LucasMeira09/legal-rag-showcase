"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, FileText, Search } from "lucide-react";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Posez votre question",
    description: "Formulez votre question en langage naturel. Notre IA comprend le contexte de votre activité et vos besoins spécifiques.",
    details: [
      "Question en français naturel",
      "Contexte d'activité automatiquement détecté",
      "Suggestions de requêtes optimisées"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    step: "02",
    icon: FileText,
    title: "Analyse intelligente",
    description: "L'IA explore instantanément notre base de données juridique, identifie les textes pertinents et extrait les informations clés.",
    details: [
      "Recherche dans 10k+ documents juridiques",
      "Extraction automatique des obligations",
      "Analyse de la jurisprudence récente"
    ],
    color: "from-purple-500 to-violet-500"
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Réponse personnalisée",
    description: "Recevez une réponse structurée avec les textes de référence, les obligations applicables et les actions à entreprendre.",
    details: [
      "Synthèse exécutive claire",
      "Textes de loi cités avec liens",
      "Plan d'action personnalisé"
    ],
    color: "from-green-500 to-emerald-500"
  }
];

export function HowItWorksSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comment ça{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              fonctionne
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            En 3 étapes simples, obtenez les réponses juridiques précises dont vous avez besoin 
            pour assurer la conformité de votre gestion des déchets.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="h-full glass hover-glow cursor-glow group transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-background">
                        <span className="text-sm font-bold text-primary-foreground">
                          {step.step}
                        </span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-8">
                    <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl px-8 py-6">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Prêt à essayer ?
              </h4>
              <p className="text-sm text-muted-foreground">
                Testez notre IA avec une question réelle en moins de 30 secondes
              </p>
            </div>
            <div className="flex items-center space-x-2 text-primary font-medium">
              <span>Voir la démo</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <div className="text-3xl font-bold text-primary mb-2">
              &lt; 30s
            </div>
            <div className="text-sm text-muted-foreground">
              Temps de réponse moyen
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <div className="text-3xl font-bold text-primary mb-2">
              95%
            </div>
            <div className="text-sm text-muted-foreground">
              Précision des réponses
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <div className="text-3xl font-bold text-primary mb-2">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">
              Disponibilité continue
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
