import { LegalPage } from "@/components/pages/legal-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité - IA Juridique Déchets",
  description: "Politique de confidentialité et protection des données personnelles. Conformité RGPD et gestion de vos données.",
};

export default function PolitiqueConfidentialitePage() {
  const content = {
    title: "Politique de confidentialité",
    lastUpdated: "15 janvier 2024",
    sections: [
      {
        title: "Introduction",
        content: `
          <p>IA Juridique Déchets s'engage à protéger votre vie privée et vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi française.</p>
          <br>
          <p>En utilisant nos services, vous acceptez les pratiques décrites dans cette politique de confidentialité.</p>
        `
      },
      {
        title: "Responsable du traitement",
        content: `
          <p><strong>IA Juridique Déchets</strong></p>
          <p>SAS au capital de 50 000 €</p>
          <p>RCS Paris 123 456 789</p>
          <p>Siège social : 123 Avenue des Champs-Élysées, 75008 Paris</p>
          <br>
          <p><strong>Délégué à la Protection des Données (DPO) :</strong></p>
          <p>Email : dpo@ia-juridique-dechets.com</p>
          <p>Téléphone : +33 1 23 45 67 89</p>
        `
      },
      {
        title: "Données collectées",
        content: `
          <p><strong>Données d'identification :</strong></p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone (optionnel)</li>
            <li>Nom de l'entreprise</li>
            <li>Fonction/rôle</li>
          </ul>
          <br>
          <p><strong>Données d'utilisation :</strong></p>
          <ul>
            <li>Pages visitées</li>
            <li>Durée de visite</li>
            <li>Recherches effectuées</li>
            <li>Documents consultés</li>
            <li>Préférences et paramètres</li>
          </ul>
          <br>
          <p><strong>Données techniques :</strong></p>
          <ul>
            <li>Adresse IP</li>
            <li>Type de navigateur</li>
            <li>Système d'exploitation</li>
            <li>Cookies et technologies similaires</li>
          </ul>
        `
      },
      {
        title: "Finalités du traitement",
        content: `
          <p>Nous utilisons vos données personnelles pour les finalités suivantes :</p>
          <br>
          <p><strong>Exécution du contrat :</strong></p>
          <ul>
            <li>Fournir nos services d'IA juridique</li>
            <li>Gérer votre compte utilisateur</li>
            <li>Traiter vos demandes de démonstration</li>
            <li>Assurer la facturation et le paiement</li>
          </ul>
          <br>
          <p><strong>Intérêt légitime :</strong></p>
          <ul>
            <li>Améliorer nos services et algorithmes</li>
            <li>Analyser l'utilisation de notre plateforme</li>
            <li>Détecter et prévenir les fraudes</li>
            <li>Assurer la sécurité de nos systèmes</li>
          </ul>
          <br>
          <p><strong>Avec votre consentement :</strong></p>
          <ul>
            <li>Vous envoyer des communications marketing</li>
            <li>Utiliser des cookies non essentiels</li>
            <li>Partager des données avec des partenaires tiers</li>
          </ul>
        `
      },
      {
        title: "Base légale du traitement",
        content: `
          <p>Conformément au RGPD, nous nous appuyons sur les bases légales suivantes :</p>
          <br>
          <ul>
            <li><strong>Exécution du contrat (art. 6.1.b) :</strong> Pour fournir nos services</li>
            <li><strong>Intérêt légitime (art. 6.1.f) :</strong> Pour améliorer nos services et assurer la sécurité</li>
            <li><strong>Consentement (art. 6.1.a) :</strong> Pour les communications marketing</li>
            <li><strong>Obligation légale (art. 6.1.c) :</strong> Pour respecter nos obligations comptables et fiscales</li>
          </ul>
        `
      },
      {
        title: "Durée de conservation",
        content: `
          <p>Nous conservons vos données personnelles pendant les durées suivantes :</p>
          <br>
          <ul>
            <li><strong>Données de compte actif :</strong> Pendant toute la durée de votre abonnement</li>
            <li><strong>Données de compte fermé :</strong> 3 ans après la fermeture</li>
            <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
            <li><strong>Données de cookies :</strong> 13 mois maximum</li>
            <li><strong>Logs de connexion :</strong> 12 mois</li>
          </ul>
          <br>
          <p>Passé ces délais, vos données sont supprimées ou anonymisées de manière sécurisée.</p>
        `
      },
      {
        title: "Partage des données",
        content: `
          <p>Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos données avec :</p>
          <br>
          <p><strong>Prestataires de services :</strong></p>
          <ul>
            <li>Hébergeur (Vercel) - États-Unis (clauses contractuelles types)</li>
            <li>Service de paiement (Stripe) - UE</li>
            <li>Service d'email (SendGrid) - États-Unis (Privacy Shield)</li>
            <li>Analytics (Google Analytics) - UE</li>
          </ul>
          <br>
          <p><strong>Autorités compétentes :</strong></p>
          <ul>
            <li>Sur demande des autorités judiciaires</li>
            <li>Pour respecter une obligation légale</li>
            <li>Pour protéger nos droits et ceux de nos utilisateurs</li>
          </ul>
        `
      },
      {
        title: "Sécurité des données",
        content: `
          <p>Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données :</p>
          <br>
          <ul>
            <li><strong>Chiffrement :</strong> HTTPS/TLS pour les transmissions, AES-256 pour le stockage</li>
            <li><strong>Authentification :</strong> Authentification à deux facteurs disponible</li>
            <li><strong>Contrôle d'accès :</strong> Accès restreint aux données personnelles</li>
            <li><strong>Audit :</strong> Surveillance et logging des accès</li>
            <li><strong>Sauvegarde :</strong> Sauvegardes chiffrées et sécurisées</li>
            <li><strong>Formation :</strong> Sensibilisation du personnel à la protection des données</li>
          </ul>
        `
      },
      {
        title: "Vos droits",
        content: `
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <br>
          <ul>
            <li><strong>Droit d'accès (art. 15) :</strong> Connaître les données que nous détenons sur vous</li>
            <li><strong>Droit de rectification (art. 16) :</strong> Corriger des données inexactes</li>
            <li><strong>Droit à l'effacement (art. 17) :</strong> Supprimer vos données</li>
            <li><strong>Droit à la limitation (art. 18) :</strong> Limiter le traitement de vos données</li>
            <li><strong>Droit à la portabilité (art. 20) :</strong> Récupérer vos données dans un format structuré</li>
            <li><strong>Droit d'opposition (art. 21) :</strong> Vous opposer au traitement</li>
            <li><strong>Droit de retrait du consentement :</strong> À tout moment pour les traitements basés sur le consentement</li>
          </ul>
          <br>
          <p>Pour exercer ces droits, contactez-nous à : dpo@ia-juridique-dechets.com</p>
          <p>Nous vous répondrons dans un délai d'un mois.</p>
        `
      },
      {
        title: "Cookies et technologies similaires",
        content: `
          <p>Notre site utilise des cookies pour améliorer votre expérience :</p>
          <br>
          <p><strong>Cookies essentiels :</strong></p>
          <ul>
            <li>Authentification et sécurité</li>
            <li>Préférences de langue</li>
            <li>Panier d'achat</li>
          </ul>
          <br>
          <p><strong>Cookies de performance :</strong></p>
          <ul>
            <li>Google Analytics</li>
            <li>Mesure d'audience</li>
          </ul>
          <br>
          <p><strong>Cookies de fonctionnalité :</strong></p>
          <ul>
            <li>Mémorisation des préférences</li>
            <li>Personnalisation de l'interface</li>
          </ul>
          <br>
          <p>Vous pouvez gérer vos préférences via les paramètres de votre navigateur ou notre bannière de consentement.</p>
        `
      },
      {
        title: "Transferts internationaux",
        content: `
          <p>Certains de nos prestataires peuvent être situés en dehors de l'UE. Dans ce cas, nous nous assurons que des garanties appropriées sont en place :</p>
          <br>
          <ul>
            <li><strong>Décision d'adéquation :</strong> Pour les pays reconnus par la Commission européenne</li>
            <li><strong>Clauses contractuelles types :</strong> Pour les autres pays</li>
            <li><strong>Certification :</strong> Privacy Shield pour les États-Unis (si applicable)</li>
          </ul>
        `
      },
      {
        title: "Modifications",
        content: `
          <p>Nous pouvons modifier cette politique de confidentialité pour refléter les changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.</p>
          <br>
          <p>Toute modification substantielle vous sera notifiée par email ou via un avis sur notre site web au moins 30 jours avant sa prise d'effet.</p>
          <br>
          <p>Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques de confidentialité.</p>
        `
      },
      {
        title: "Contact et réclamations",
        content: `
          <p>Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits :</p>
          <br>
          <p><strong>Email :</strong> dpo@ia-juridique-dechets.com</p>
          <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
          <p><strong>Courrier :</strong> IA Juridique Déchets, 123 Avenue des Champs-Élysées, 75008 Paris</p>
          <br>
          <p><strong>Autorité de contrôle :</strong></p>
          <p>Vous avez également le droit de déposer une réclamation auprès de la CNIL :</p>
          <p>CNIL - 3 Place de Fontenoy, TSA 80715, 75334 PARIS CEDEX 07</p>
          <p>Site web : www.cnil.fr</p>
        `
      }
    ]
  };

  return <LegalPage content={content} />;
}
