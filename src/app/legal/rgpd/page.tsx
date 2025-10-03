import { LegalPage } from "@/components/pages/legal-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RGPD - IA Juridique Déchets",
  description: "Information sur la conformité RGPD et les droits des utilisateurs concernant leurs données personnelles.",
};

export default function RGPDPage() {
  const content = {
    title: "Conformité RGPD",
    lastUpdated: "15 janvier 2024",
    sections: [
      {
        title: "Notre engagement RGPD",
        content: `
          <p>IA Juridique Déchets s'engage à respecter et protéger vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) entré en vigueur le 25 mai 2018.</p>
          <br>
          <p>Cette page vous informe de vos droits et de la manière dont nous traitons vos données personnelles.</p>
        `
      },
      {
        title: "Vos droits fondamentaux",
        content: `
          <p><strong>Droit d'accès (Article 15 RGPD) :</strong></p>
          <p>Vous avez le droit de savoir quelles données personnelles nous détenons sur vous et comment nous les utilisons.</p>
          <br>
          <p><strong>Droit de rectification (Article 16 RGPD) :</strong></p>
          <p>Vous pouvez demander la correction de données inexactes ou incomplètes.</p>
          <br>
          <p><strong>Droit à l'effacement (Article 17 RGPD) :</strong></p>
          <p>Vous pouvez demander la suppression de vos données personnelles dans certaines circonstances.</p>
          <br>
          <p><strong>Droit à la limitation du traitement (Article 18 RGPD) :</strong></p>
          <p>Vous pouvez demander de limiter l'utilisation de vos données dans certains cas.</p>
          <br>
          <p><strong>Droit à la portabilité (Article 20 RGPD) :</strong></p>
          <p>Vous pouvez récupérer vos données dans un format structuré et lisible par machine.</p>
          <br>
          <p><strong>Droit d'opposition (Article 21 RGPD) :</strong></p>
          <p>Vous pouvez vous opposer au traitement de vos données pour des raisons légitimes.</p>
        `
      },
      {
        title: "Comment exercer vos droits",
        content: `
          <p>Pour exercer vos droits, contactez notre Délégué à la Protection des Données :</p>
          <br>
          <p><strong>Email :</strong> dpo@ia-juridique-dechets.com</p>
          <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
          <p><strong>Courrier :</strong> IA Juridique Déchets, DPO, 123 Avenue des Champs-Élysées, 75008 Paris</p>
          <br>
          <p><strong>Informations à fournir :</strong></p>
          <ul>
            <li>Votre identité (nom, prénom, email)</li>
            <li>Le droit que vous souhaitez exercer</li>
            <li>Une copie de votre pièce d'identité</li>
            <li>Précisions sur votre demande si nécessaire</li>
          </ul>
          <br>
          <p>Nous vous répondrons dans un délai maximum d'un mois à compter de la réception de votre demande.</p>
        `
      },
      {
        title: "Réclamation auprès de la CNIL",
        content: `
          <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :</p>
          <br>
          <p><strong>CNIL</strong></p>
          <p>3 Place de Fontenoy</p>
          <p>TSA 80715</p>
          <p>75334 PARIS CEDEX 07</p>
          <br>
          <p><strong>Site web :</strong> www.cnil.fr</p>
          <p><strong>Formulaire en ligne :</strong> https://www.cnil.fr/fr/plaintes</p>
        `
      },
      {
        title: "Collecte et utilisation des données",
        content: `
          <p><strong>Données collectées :</strong></p>
          <ul>
            <li>Données d'identification (nom, email, téléphone)</li>
            <li>Données de connexion (adresse IP, logs)</li>
            <li>Données d'utilisation (pages visitées, fonctionnalités utilisées)</li>
            <li>Données de facturation (si applicable)</li>
          </ul>
          <br>
          <p><strong>Finalités du traitement :</strong></p>
          <ul>
            <li>Fourniture de nos services d'IA juridique</li>
            <li>Gestion de votre compte utilisateur</li>
            <li>Support client et assistance</li>
            <li>Amélioration de nos services</li>
            <li>Respect des obligations légales</li>
          </ul>
        `
      },
      {
        title: "Base légale du traitement",
        content: `
          <p>Nous traitons vos données personnelles sur la base de :</p>
          <br>
          <p><strong>L'exécution du contrat (Article 6.1.b RGPD) :</strong></p>
          <p>Pour fournir les services que vous avez demandés.</p>
          <br>
          <p><strong>L'intérêt légitime (Article 6.1.f RGPD) :</strong></p>
          <p>Pour améliorer nos services, assurer la sécurité et analyser l'utilisation.</p>
          <br>
          <p><strong>Le consentement (Article 6.1.a RGPD) :</strong></p>
          <p>Pour les communications marketing et l'utilisation de cookies non essentiels.</p>
          <br>
          <p><strong>L'obligation légale (Article 6.1.c RGPD) :</strong></p>
          <p>Pour respecter nos obligations comptables, fiscales et réglementaires.</p>
        `
      },
      {
        title: "Durée de conservation",
        content: `
          <p>Nous conservons vos données personnelles pendant les durées suivantes :</p>
          <br>
          <ul>
            <li><strong>Données de compte actif :</strong> Pendant toute la durée de votre abonnement</li>
            <li><strong>Données de compte fermé :</strong> 3 ans après la fermeture du compte</li>
            <li><strong>Données de facturation :</strong> 10 ans (obligation légale française)</li>
            <li><strong>Logs de connexion :</strong> 12 mois maximum</li>
            <li><strong>Cookies :</strong> 13 mois maximum</li>
            <li><strong>Demandes de contact :</strong> 3 ans</li>
          </ul>
          <br>
          <p>Passé ces délais, vos données sont supprimées de manière sécurisée ou anonymisées.</p>
        `
      },
      {
        title: "Sécurité et protection",
        content: `
          <p>Nous mettons en place des mesures techniques et organisationnelles pour protéger vos données :</p>
          <br>
          <ul>
            <li><strong>Chiffrement :</strong> HTTPS/TLS pour les transmissions, AES-256 pour le stockage</li>
            <li><strong>Authentification :</strong> Authentification forte et 2FA disponible</li>
            <li><strong>Contrôle d'accès :</strong> Accès restreint aux données personnelles</li>
            <li><strong>Audit :</strong> Surveillance et logging des accès</li>
            <li><strong>Sauvegarde :</strong> Sauvegardes chiffrées et sécurisées</li>
            <li><strong>Formation :</strong> Sensibilisation du personnel à la protection des données</li>
          </ul>
        `
      },
      {
        title: "Transferts internationaux",
        content: `
          <p>Certains de nos prestataires peuvent être situés en dehors de l'Union Européenne. Dans ce cas :</p>
          <br>
          <ul>
            <li>Nous nous assurons que des garanties appropriées sont en place</li>
            <li>Nous utilisons des clauses contractuelles types approuvées par la Commission européenne</li>
            <li>Nous vérifions l'adéquation du niveau de protection du pays de destination</li>
          </ul>
          <br>
          <p>Prestataires concernés :</p>
          <ul>
            <li><strong>Vercel (hébergement) :</strong> États-Unis - Clauses contractuelles types</li>
            <li><strong>SendGrid (emails) :</strong> États-Unis - Privacy Shield</li>
            <li><strong>Google Analytics :</strong> Union Européenne</li>
          </ul>
        `
      },
      {
        title: "Cookies et traceurs",
        content: `
          <p>Notre site utilise des cookies pour améliorer votre expérience :</p>
          <br>
          <p><strong>Cookies essentiels :</strong></p>
          <ul>
            <li>Authentification et sécurité</li>
            <li>Préférences de langue</li>
            <li>Fonctionnalités de base</li>
          </ul>
          <br>
          <p><strong>Cookies de performance :</strong></p>
          <ul>
            <li>Mesure d'audience (Google Analytics)</li>
            <li>Analyse de l'utilisation du site</li>
          </ul>
          <br>
          <p><strong>Cookies de fonctionnalité :</strong></p>
          <ul>
            <li>Mémorisation des préférences</li>
            <li>Personnalisation de l'interface</li>
          </ul>
          <br>
          <p>Vous pouvez gérer vos préférences via notre bannière de consentement ou les paramètres de votre navigateur.</p>
        `
      },
      {
        title: "Modifications de cette politique",
        content: `
          <p>Nous pouvons modifier cette politique de conformité RGPD pour refléter :</p>
          <ul>
            <li>Les changements dans nos pratiques</li>
            <li>Les évolutions réglementaires</li>
            <li>L'amélioration de nos services</li>
          </ul>
          <br>
          <p>Toute modification substantielle vous sera notifiée par email ou via un avis sur notre site web au moins 30 jours avant sa prise d'effet.</p>
          <br>
          <p>Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques de protection des données.</p>
        `
      },
      {
        title: "Contact DPO",
        content: `
          <p>Notre Délégué à la Protection des Données (DPO) est à votre disposition pour toute question concernant la protection de vos données personnelles :</p>
          <br>
          <p><strong>Délégué à la Protection des Données</strong></p>
          <p>IA Juridique Déchets</p>
          <p>123 Avenue des Champs-Élysées</p>
          <p>75008 Paris, France</p>
          <br>
          <p><strong>Email :</strong> dpo@ia-juridique-dechets.com</p>
          <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
          <p><strong>Horaires :</strong> Lundi - Vendredi, 9h - 18h</p>
        `
      }
    ]
  };

  return <LegalPage content={content} />;
}
