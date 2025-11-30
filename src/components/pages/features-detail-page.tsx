"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Play,
  Search,
  Target,
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
      "Pré-filtrage avancé par juridiction"
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
                className=""
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Info Column */}
                  <div className={index === 1 ? "lg:order-2" : ""}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mb-6 ${index === 1 ? "float-right" : ""}`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className={`text-3xl font-bold text-foreground mb-4 ${index === 1 ? "text-right clear-right" : ""}`}>
                      {feature.title}
                    </h2>
                    <p className={`text-lg text-muted-foreground mb-6 leading-relaxed ${index === 1 ? "text-right" : ""}`}>
                      {feature.longDescription}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${index === 1 ? "justify-end" : ""}`}>
                      {feature.capabilities.slice(0, 3).map((capability) => (
                        <Badge key={capability} variant="secondary">
                          {capability}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities & Benefits Column */}
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 ${index === 1 ? "lg:order-1" : ""}`}>
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
                </div>

                {/* Button below - full width */}
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-primary/50 text-primary hover:bg-primary/10 glass"
                >
                  <Link href="/demo" className="flex items-center justify-center space-x-2">
                    <Play className="h-5 w-5" />
                    <span>Voir la démo</span>
                  </Link>
                </Button>
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
              Testez notre demo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
              >
                <Link href="/demo" className="flex items-center space-x-2">
                  <span>DEMO</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
