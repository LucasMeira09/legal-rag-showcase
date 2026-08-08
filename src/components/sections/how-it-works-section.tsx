"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, FileText, Search, Shield, Database } from "lucide-react";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Posez votre question",
    description: "Formulez votre question en langage naturel. Notre IA comprend le contexte de votre activité et vos besoins spécifiques.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    step: "02",
    icon: FileText,
    title: "Analyse intelligente",
    description: "L'IA explore instantanément notre base de données juridique, identifie les textes pertinents et extrait les informations clés.",
    color: "from-purple-500 to-violet-500"
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Réponse personnalisée",
    description: "Recevez une réponse structurée avec les textes de référence, les obligations applicables et les actions à entreprendre.",
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
            pour assurer la conformité de votre entreprise.
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

        {/* Enterprise Adaptation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-b from-card/50 to-background/50 backdrop-blur-md p-8 md:p-10 shadow-2xl">
            {/* Background glow effects */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
              <div className="flex-shrink-0 p-4 bg-primary/10 rounded-2xl border border-primary/20">
                <Database className="h-10 w-10 text-primary" />
              </div>
              <div className="flex-grow space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-xl md:text-2xl font-bold text-foreground">
                    Adaptable pour votre entreprise
                  </h4>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full">
                    <Shield className="h-3.5 w-3.5" /> Sécurisé & Privé
                  </span>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Ce système est conçu pour être entièrement adapté aux besoins de votre entreprise. 
                  Grâce à un pipeline d'ingestion automatisé, importez facilement tous vos documents 
                  (<strong>PDF, DOCX ou fichiers texte</strong>) dans une base de données souveraine et 
                  strictement confidentielle, accessible uniquement par vos équipes.
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Notre moteur de recherche sémantique permet ensuite à vos collaborateurs de retrouver instantanément 
                  les informations clés et de synthétiser des réponses précises parmi des milliers de documents internes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
