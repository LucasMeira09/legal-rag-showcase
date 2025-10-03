import { PricingPage } from "@/components/pages/pricing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs - IA Juridique Déchets",
  description: "Découvrez nos tarifs flexibles pour l'IA juridique spécialisée dans la gestion des déchets. Essai gratuit, plans Pro et Entreprise avec conformité incluse.",
  keywords: ["tarifs IA juridique", "prix conformité déchets", "abonnement juridique", "essai gratuit"],
};

export default function TarifsPage() {
  return <PricingPage />;
}
