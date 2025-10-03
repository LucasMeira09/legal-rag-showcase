import { ResourcesPage } from "@/components/pages/resources-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ressources - IA Juridique Déchets",
  description: "Articles, guides et ressources sur la réglementation des déchets et la conformité environnementale. Veille juridique et actualités.",
  keywords: ["ressources juridiques", "réglementation déchets", "conformité environnementale", "veille juridique", "guides conformité"],
};

export default function RessourcesPage() {
  return <ResourcesPage />;
}
