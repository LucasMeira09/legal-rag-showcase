import { FeaturesDetailPage } from "@/components/pages/features-detail-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fonctionnalités - IA Juridique Déchets",
  description: "Découvrez toutes les fonctionnalités de notre IA juridique : recherche sémantique, veille automatique, analyse de documents, conformité et bien plus.",
  keywords: ["fonctionnalités IA juridique", "recherche sémantique", "veille réglementaire", "conformité déchets", "analyse juridique"],
};

export default function FonctionnalitesPage() {
  return <FeaturesDetailPage />;
}
