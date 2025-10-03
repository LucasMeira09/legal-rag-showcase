import { LegalPage } from "@/components/pages/legal-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation - IA Juridique Déchets",
  description: "Conditions générales d'utilisation de la plateforme IA Juridique Déchets. Modalités d'utilisation et responsabilités.",
};

export default function CGUPage() {
  const content = {
    title: "Conditions Générales d'Utilisation",
    lastUpdated: "15 janvier 2024",
    sections: [
      {
        title: "Préambule",
        content: `
          <p>Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation de la plateforme IA Juridique Déchets accessible à l'adresse https://ia-juridique-dechets.com.</p>
          <br>
          <p>L'utilisation de notre plateforme implique l'acceptation pleine et entière des présentes CGU.</p>
        `
      },
      {
        title: "Définitions",
        content: `
          <ul>
            <li><strong>Plateforme :</strong> Le service d'IA juridique accessible via notre site web</li>
            <li><strong>Utilisateur :</strong> Toute personne physique ou morale utilisant la plateforme</li>
            <li><strong>Compte :</strong> L'espace personnel de l'utilisateur sur la plateforme</li>
            <li><strong>Services :</strong> L'ensemble des fonctionnalités proposées par la plateforme</li>
            <li><strong>Contenu :</strong> Tous les éléments présents sur la plateforme</li>
          </ul>
        `
      },
      {
        title: "Acceptation des conditions",
        content: `
          <p>L'accès et l'utilisation de la plateforme sont conditionnés à l'acceptation et au respect des présentes CGU.</p>
          <br>
          <p>Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser notre service.</p>
          <br>
          <p>Nous nous réservons le droit de modifier ces CGU à tout moment. Les modifications entrent en vigueur dès leur publication sur le site.</p>
        `
      },
      {
        title: "Description du service",
        content: `
          <p>IA Juridique Déchets propose une plateforme d'intelligence artificielle spécialisée dans :</p>
          <ul>
            <li>La recherche sémantique dans les textes juridiques</li>
            <li>L'analyse automatique de documents</li>
            <li>La veille réglementaire automatisée</li>
            <li>L'assistance à la conformité</li>
            <li>La génération de rapports juridiques</li>
          </ul>
          <br>
          <p>Ces services sont destinés aux professionnels du secteur des déchets et de l'environnement.</p>
        `
      },
      {
        title: "Inscription et compte utilisateur",
        content: `
          <p>Pour accéder aux services, vous devez créer un compte en fournissant des informations exactes et à jour.</p>
          <br>
          <p><strong>Obligations de l'utilisateur :</strong></p>
          <ul>
            <li>Fournir des informations véridiques</li>
            <li>Maintenir la confidentialité de ses identifiants</li>
            <li>Notifier tout usage non autorisé de son compte</li>
            <li>Respecter les lois et réglementations applicables</li>
          </ul>
          <br>
          <p>Nous nous réservons le droit de suspendre ou supprimer tout compte en cas de violation de ces conditions.</p>
        `
      },
      {
        title: "Utilisation autorisée",
        content: `
          <p>L'utilisation de la plateforme est autorisée pour :</p>
          <ul>
            <li>La recherche d'informations juridiques</li>
            <li>L'analyse de documents professionnels</li>
            <li>La veille réglementaire</li>
            <li>L'assistance à la conformité</li>
          </ul>
          <br>
          <p><strong>Utilisations interdites :</strong></p>
          <ul>
            <li>Usage commercial non autorisé</li>
            <li>Violation des droits de propriété intellectuelle</li>
            <li>Activités illégales ou frauduleuses</li>
            <li>Tentative de contournement des mesures de sécurité</li>
            <li>Utilisation de robots ou scripts automatisés</li>
          </ul>
        `
      },
      {
        title: "Propriété intellectuelle",
        content: `
          <p>La plateforme et son contenu sont protégés par les droits de propriété intellectuelle.</p>
          <br>
          <p><strong>Nos droits :</strong></p>
          <ul>
            <li>Propriété exclusive de la plateforme</li>
            <li>Droits sur les algorithmes d'IA</li>
            <li>Droits sur l'interface utilisateur</li>
            <li>Marques et logos</li>
          </ul>
          <br>
          <p><strong>Vos droits :</strong></p>
          <ul>
            <li>Utilisation conforme aux présentes CGU</li>
            <li>Propriété de vos données personnelles</li>
            <li>Droit d'utiliser les résultats générés</li>
          </ul>
        `
      },
      {
        title: "Responsabilités et garanties",
        content: `
          <p><strong>Nos responsabilités :</strong></p>
          <ul>
            <li>Fournir un service conforme à sa description</li>
            <li>Maintenir la disponibilité de la plateforme</li>
            <li>Protéger la confidentialité des données</li>
            <li>Assurer la sécurité des systèmes</li>
          </ul>
          <br>
          <p><strong>Limitations de responsabilité :</strong></p>
          <ul>
            <li>Les résultats de l'IA sont indicatifs</li>
            <li>Vérification par un professionnel recommandée</li>
            <li>Pas de garantie d'exactitude absolue</li>
            <li>Responsabilité limitée aux dommages directs</li>
          </ul>
        `
      },
      {
        title: "Tarification et facturation",
        content: `
          <p>Nos tarifs sont disponibles sur la page dédiée et peuvent être modifiés avec un préavis de 30 jours.</p>
          <br>
          <p><strong>Modalités de paiement :</strong></p>
          <ul>
            <li>Paiement par carte bancaire</li>
            <li>Facturation mensuelle ou annuelle</li>
            <li>Politique de remboursement selon les conditions</li>
          </ul>
          <br>
          <p><strong>Résiliation :</strong></p>
          <ul>
            <li>Possibilité de résilier à tout moment</li>
            <li>Effet immédiat pour les comptes en retard de paiement</li>
            <li>Conservation des données selon notre politique de confidentialité</li>
          </ul>
        `
      },
      {
        title: "Modifications et évolutions",
        content: `
          <p>Nous nous réservons le droit de :</p>
          <ul>
            <li>Modifier les fonctionnalités de la plateforme</li>
            <li>Adapter nos algorithmes d'IA</li>
            <li>Mettre à jour les présentes CGU</li>
            <li>Interrompre temporairement le service pour maintenance</li>
          </ul>
          <br>
          <p>Toute modification substantielle sera notifiée aux utilisateurs avec un préavis raisonnable.</p>
        `
      },
      {
        title: "Droit applicable et juridiction",
        content: `
          <p>Les présentes CGU sont régies par le droit français.</p>
          <br>
          <p>En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, les tribunaux français seront seuls compétents.</p>
          <br>
          <p>Pour toute question relative aux présentes CGU, vous pouvez nous contacter à : contact@ia-juridique-dechets.com</p>
        `
      }
    ]
  };

  return <LegalPage content={content} />;
}
