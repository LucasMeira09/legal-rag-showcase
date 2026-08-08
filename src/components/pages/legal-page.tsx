"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface LegalSection {
  title: string;
  content: string;
}

interface LegalContent {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export function LegalPage({ content }: { content: LegalContent }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l&apos;accueil
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              {content.title}
            </h1>
            <p className="text-sm text-muted-foreground">
              Dernière mise à jour : {content.lastUpdated}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-10">
          {content.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-3">
                {section.title}
              </h2>
              <div
                className="text-muted-foreground leading-relaxed prose prose-invert max-w-none
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1
                  [&_li]:text-muted-foreground
                  [&_strong]:text-foreground
                  [&_a]:text-primary [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
