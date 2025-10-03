"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Check, Shield, Star, Users, Zap } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const plans = [
  {
    name: "Essai",
    price: 0,
    period: "14 jours",
    description: "Découvrez toutes les fonctionnalités sans engagement",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    popular: false,
    features: [
      "Accès complet à toutes les fonctionnalités",
      "10 recherches par jour",
      "5 documents analysés",
      "Support par email",
      "Base de données juridique complète",
      "Interface utilisateur complète"
    ],
    limitations: [
      "Limité à 14 jours",
      "Pas d'export de rapports",
      "Pas d'alertes personnalisées"
    ],
    cta: "Commencer l'essai",
    ctaVariant: "outline" as const
  },
  {
    name: "Pro",
    price: 79,
    period: "par mois",
    description: "Pour les professionnels et petites entreprises",
    icon: Users,
    color: "from-primary to-accent",
    popular: true,
    features: [
      "Toutes les fonctionnalités de l'essai",
      "Recherches illimitées",
      "Analyse de documents illimitée",
      "Alertes personnalisées (10)",
      "Export de rapports PDF/Word",
      "Support prioritaire",
      "Historique et favoris",
      "1 utilisateur",
      "API de base incluse",
      "Conformité RGPD incluse"
    ],
    limitations: [
      "1 utilisateur uniquement",
      "Pas de collaboration d'équipe",
      "API limitée à 1000 appels/mois"
    ],
    cta: "Commencer Pro",
    ctaVariant: "default" as const
  },
  {
    name: "Entreprise",
    price: "Sur devis",
    period: "personnalisé",
    description: "Pour les grandes entreprises et organisations",
    icon: Building2,
    color: "from-purple-500 to-violet-500",
    popular: false,
    features: [
      "Toutes les fonctionnalités Pro",
      "Utilisateurs illimités",
      "Collaboration d'équipe avancée",
      "Alertes illimitées",
      "API complète sans limite",
      "Support dédié 24/7",
      "Formation personnalisée",
      "Intégrations sur mesure",
      "SLA entreprise (99.9%)",
      "Audit de sécurité inclus",
      "Certification ISO 27001",
      "Conformité incluse"
    ],
    limitations: [
      "Engagement annuel requis",
      "Configuration personnalisée nécessaire"
    ],
    cta: "Demander un devis",
    ctaVariant: "outline" as const
  }
];

const additionalFeatures = [
  {
    title: "Conformité incluse",
    description: "Tous nos plans incluent la conformité RGPD et les certifications de sécurité",
    icon: Shield
  },
  {
    title: "Support technique",
    description: "Support technique inclus avec réponse garantie selon votre plan",
    icon: Users
  },
  {
    title: "Mise à jour continue",
    description: "Base de données juridique mise à jour en continu sans frais supplémentaires",
    icon: Zap
  }
];

export function PricingPage() {
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
              Tarifs{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                transparents
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Choisissez le plan qui correspond à vos besoins. 
              Commencez gratuitement et évoluez selon vos exigences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Conformité RGPD incluse
              </Badge>
              <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                Essai gratuit 14 jours
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section ref={ref} className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 px-6 py-2">
                      <Star className="h-4 w-4 mr-2" />
                      Plus populaire
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full glass hover-glow cursor-glow group transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-primary/50 shadow-lg shadow-primary/20' : ''
                }`}>
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl mb-4`}>
                        <plan.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {plan.description}
                      </p>
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-foreground">
                          {typeof plan.price === 'number' ? `€${plan.price}` : plan.price}
                        </span>
                        <span className="text-muted-foreground ml-2">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      <h4 className="font-semibold text-foreground mb-3">Inclus :</h4>
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Limitations */}
                    {plan.limitations.length > 0 && (
                      <div className="space-y-2 mb-8">
                        <h4 className="font-semibold text-foreground mb-3">Limitations :</h4>
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <div key={limitationIndex} className="flex items-start space-x-3">
                            <div className="w-5 h-5 rounded-full border border-muted-foreground mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {limitation}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    <Button
                      asChild
                      className={`w-full ${
                        plan.ctaVariant === 'default' 
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                          : 'border-primary/50 text-primary hover:bg-primary/10 glass'
                      } hover-glow`}
                      variant={plan.ctaVariant}
                      size="lg"
                    >
                      <Link href="/demo" className="flex items-center justify-center space-x-2">
                        <span>{plan.cta}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
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
              Inclus dans{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                tous les plans
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Des fonctionnalités essentielles et des garanties incluses dans tous nos plans 
              pour vous offrir la meilleure expérience possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Questions{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                fréquentes
              </span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Puis-je changer de plan à tout moment ?",
                answer: "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement et les factures sont ajustées au prorata."
              },
              {
                question: "Y a-t-il des frais cachés ?",
                answer: "Non, nos tarifs sont transparents. Le prix affiché est le prix que vous payez, sans frais cachés. La conformité RGPD et les certifications de sécurité sont incluses."
              },
              {
                question: "Que se passe-t-il à la fin de l'essai gratuit ?",
                answer: "À la fin de votre essai gratuit de 14 jours, votre compte passe automatiquement en mode limité. Vous pouvez choisir un plan payant à tout moment pour continuer à utiliser toutes les fonctionnalités."
              },
              {
                question: "Offrez-vous des tarifs préférentiels pour les ONG ?",
                answer: "Oui, nous proposons des tarifs préférentiels pour les organisations à but non lucratif et les ONG. Contactez-nous pour discuter de vos besoins spécifiques."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass hover-glow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
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
              Prêt à commencer votre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                essai gratuit
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Découvrez toutes les fonctionnalités de notre IA juridique pendant 14 jours. 
              Aucune carte de crédit requise, annulation possible à tout moment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
              >
                <Link href="/demo" className="flex items-center space-x-2">
                  <span>Commencer l'essai gratuit</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 glass"
              >
                <Link href="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
