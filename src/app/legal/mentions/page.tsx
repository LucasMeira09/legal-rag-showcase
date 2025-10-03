import { LegalPage } from "@/components/pages/legal-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales - IA Juridique Déchets",
  description: "Mentions légales du site IA Juridique Déchets. Informations sur l'éditeur, l'hébergement et les conditions d'utilisation.",
};

export default function MentionsLegalesPage() {
  const content = {
    title: "Mentions légales",
    lastUpdated: "15 janvier 2024",
    sections: [
      {
        title: "Éditeur du site",
        content: `
          <p><strong>IA Juridique Déchets</strong></p>
          <p>Société par actions simplifiée (SAS)</p>
          <p>RCS Paris 123 456 789</p>
          <p>SIRET : 123 456 789 00012</p>
          <p>Capital social : 50 000 €</p>
          <br>
          <p><strong>Siège social :</strong></p>
          <p>123 Avenue des Champs-Élysées</p>
          <p>75008 Paris, France</p>
          <br>
          <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
          <p><strong>Email :</strong> contact@ia-juridique-dechets.com</p>
          <p><strong>Directeur de publication :</strong> Jean Dupont</p>
        `
      },
      {
        title: "Hébergement",
        content: `
          <p>Le site est hébergé par :</p>
          <p><strong>Vercel Inc.</strong></p>
          <p>340 S Lemon Ave #4133</p>
          <p>Walnut, CA 91789, États-Unis</p>
          <br>
          <p><strong>Site web :</strong> https://vercel.com</p>
          <p><strong>Support :</strong> https://vercel.com/support</p>
        `
      },
      {
        title: "Propriété intellectuelle",
        content: `
          <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
          <br>
          <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
          <br>
          <p>La marque "IA Juridique Déchets" et son logo sont des marques déposées. Toute reproduction non autorisée de ces marques, dessins et modèles constitue une contrefaçon passible de sanctions pénales.</p>
        `
      },
      {
        title: "Collecte et traitement des données",
        content: `
          <p>Les données personnelles collectées sur ce site font l'objet d'un traitement informatique destiné à :</p>
          <ul>
            <li>Gérer votre compte utilisateur</li>
            <li>Vous fournir nos services d'IA juridique</li>
            <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
            <li>Améliorer nos services</li>
          </ul>
          <br>
          <p>Conformément à la loi "informatique et libertés" du 6 janvier 1978 modifiée et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.</p>
          <br>
          <p>Pour exercer ce droit, contactez-nous à : dpo@ia-juridique-dechets.com</p>
        `
      },
      {
        title: "Cookies",
        content: `
          <p>Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser l'utilisation du site.</p>
          <br>
          <p><strong>Types de cookies utilisés :</strong></p>
          <ul>
            <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
            <li><strong>Cookies de performance :</strong> Pour analyser l'utilisation du site</li>
            <li><strong>Cookies de fonctionnalité :</strong> Pour mémoriser vos préférences</li>
            <li><strong>Cookies de ciblage :</strong> Pour vous proposer des publicités pertinentes</li>
          </ul>
          <br>
          <p>Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur ou notre bannière de consentement.</p>
        `
      },
      {
        title: "Responsabilité",
        content: `
          <p>Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.</p>
          <br>
          <p>Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse contact@ia-juridique-dechets.com, en décrivant le problème de la manière la plus précise possible.</p>
          <br>
          <p>Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité. En conséquence, ne saurait être tenu responsable d'un quelconque dommage subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives au téléchargement.</p>
        `
      },
      {
        title: "Droit applicable",
        content: `
          <p>Tant le présent site que les modalités et conditions de son utilisation sont régis par le droit français, quel que soit le lieu d'utilisation. En cas de contestation éventuelle, et après l'échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents pour connaître de ce litige.</p>
          <br>
          <p>Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse : contact@ia-juridique-dechets.com</p>
        `
      }
    ]
  };

  return <LegalPage content={content} />;
}
