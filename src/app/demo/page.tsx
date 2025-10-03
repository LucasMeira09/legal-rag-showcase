import { DemoPage } from "@/components/pages/demo-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Démo - IA Juridique Déchets",
  description: "Testez notre IA juridique spécialisée dans la gestion des déchets. Interface de démonstration avec recherche sémantique et analyse de documents.",
  keywords: ["démo IA juridique", "test conformité déchets", "interface démonstration", "sandbox juridique"],
};

export default function DemoPageRoute() {
  return <DemoPage />;
}
