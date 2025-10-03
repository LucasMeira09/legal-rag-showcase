# IA Juridique Déchets 🏛️⚖️

Site vitrine moderne et futuriste pour une IA juridique spécialisée dans la gestion des déchets. Interface Next.js avec animations 3D, design futuriste et fonctionnalités complètes.

## 🚀 Fonctionnalités

### Design & UX
- **Interface futuriste** avec palette verte (vert primaire, vert néon, charcoal)
- **Animations 3D** avec Three.js (grille animée, particules flottantes)
- **Effets visuels** : glassmorphism, hover effects, parallax
- **Responsive design** optimisé mobile/desktop
- **Accessibilité** conforme aux standards WCAG

### Pages & Sections
- **Page d'accueil** : Hero 3D, problèmes résolus, fonctionnalités, témoignages
- **Fonctionnalités** : Détails des 8 fonctionnalités principales de l'IA
- **Tarifs** : 3 plans (Essai gratuit, Pro, Entreprise)
- **Démo** : Sandbox interactif + formulaire de demande de démo
- **Ressources** : Blog avec articles et filtres par catégorie
- **Pages légales** : Mentions, RGPD, CGU, conformité

### Fonctionnalités IA (Mock)
- **Recherche sémantique** dans 10k+ documents juridiques
- **Veille automatique** avec alertes personnalisées
- **Analyse de documents** avec extraction d'obligations
- **Comparateur multi-juridictions** (UE, fédéral, régional)
- **Assistant conformité** avec checklist dynamique
- **Générateur de rapports** PDF/Word avec sources
- **Espace équipe** collaboratif
- **API complète** pour intégrations

## 🛠️ Stack Technique

### Frontend
- **Next.js 15** avec App Router
- **TypeScript** strict
- **Tailwind CSS** avec configuration personnalisée
- **shadcn/ui** pour les composants
- **Framer Motion** pour les animations
- **Three.js** + React Three Fiber pour les effets 3D

### Backend & API
- **API Routes** Next.js
- **Endpoints mockés** : `/api/search`, `/api/alerts`, `/api/analyze`, `/api/demo`
- **Validation** avec Zod
- **Formulaires** avec React Hook Form

### SEO & Performance
- **Métadonnées** optimisées (OpenGraph, Twitter Cards)
- **Sitemap** automatique
- **Robots.txt** configuré
- **Schema.org** markup
- **Optimisations** images et lazy loading

## 📦 Installation

### Prérequis
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Installation
```bash
# Cloner le repository
git clone <repository-url>
cd site-dechets

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🎨 Personnalisation

### Palette de couleurs
Les couleurs sont définies dans `src/app/globals.css` :
- **Vert primaire** : `#16A34A` (accents, CTA)
- **Vert foncé** : `#065F46` (header/footer)
- **Vert néon** : `#00FF88` (effets futuristes)
- **Charcoal** : `#0B0F14` (fond)
- **Gris** : `#94A3B8` (texte secondaire)

### Typographie
- **Police principale** : Inter (variable)
- **Police de fallback** : Manrope, system-ui

### Animations
Les animations sont configurées dans `globals.css` :
- `glow-effect` : Effet de lueur
- `neon-text` : Texte néon clignotant
- `float-animation` : Flottement
- `cursor-glow` : Effet de halo au survol

## 📁 Structure du projet

```
src/
├── app/                    # Pages Next.js App Router
│   ├── api/               # API Routes
│   │   ├── search/        # Endpoint de recherche
│   │   ├── alerts/        # Gestion des alertes
│   │   ├── analyze/       # Analyse de documents
│   │   └── demo/          # Demandes de démo
│   ├── legal/             # Pages légales
│   ├── fonctionnalites/   # Page fonctionnalités
│   ├── tarifs/            # Page tarifs
│   ├── demo/              # Page démo
│   ├── ressources/        # Blog/ressources
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── sitemap.ts         # Sitemap automatique
│   └── robots.ts          # Configuration robots
├── components/            # Composants React
│   ├── ui/               # Composants shadcn/ui
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Sections de la page d'accueil
│   ├── pages/            # Composants de pages
│   └── 3d/               # Composants Three.js
└── lib/                  # Utilitaires
    └── utils.ts          # Fonctions utilitaires
```

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Ou connecter le repository GitHub à Vercel
```

### Variables d'environnement
Créer un fichier `.env.local` :
```env
NEXT_PUBLIC_SITE_URL=https://ia-juridique-dechets.com
NEXT_PUBLIC_GOOGLE_ANALYTICS=GA_MEASUREMENT_ID
```

### Configuration Vercel
- **Framework** : Next.js
- **Build Command** : `npm run build`
- **Output Directory** : `.next`
- **Install Command** : `npm install`

## 🔧 Scripts disponibles

```bash
# Développement
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # ESLint
npm run type-check   # Vérification TypeScript

# shadcn/ui
npx shadcn@latest add [component]  # Ajouter un composant
```

## 📊 Performance

### Optimisations implémentées
- **Lazy loading** des composants 3D
- **Images optimisées** avec Next.js Image
- **Prefetch** des liens
- **Code splitting** automatique
- **Compression** gzip/brotli
- **Cache** statique

### Métriques cibles
- **Lighthouse** : ≥90 (Performance, SEO, Accessibilité)
- **Core Web Vitals** : Optimisés
- **First Contentful Paint** : <1.5s
- **Largest Contentful Paint** : <2.5s

## 🔒 Sécurité & Conformité

### RGPD
- **Politique de confidentialité** complète
- **Gestion des cookies** avec bannière de consentement
- **Droits des utilisateurs** (accès, rectification, suppression)
- **DPO** contact disponible

### Sécurité
- **HTTPS** obligatoire
- **Headers de sécurité** configurés
- **Validation** des entrées utilisateur
- **Protection CSRF**

## 🧪 Tests

```bash
# Tests unitaires (à implémenter)
npm run test

# Tests e2e (à implémenter)
npm run test:e2e

# Coverage
npm run test:coverage
```

## 📈 Analytics & Monitoring

### Intégrations recommandées
- **Google Analytics 4** : Suivi des utilisateurs
- **Vercel Analytics** : Métriques de performance
- **Sentry** : Monitoring des erreurs
- **Hotjar** : Heatmaps et enregistrements

## 🤝 Contribution

### Guidelines
1. **Fork** le repository
2. **Créer** une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. **Commit** les changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. **Push** vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. **Ouvrir** une Pull Request

### Standards de code
- **ESLint** + **Prettier** configurés
- **TypeScript** strict
- **Conventions** de nommage cohérentes
- **Documentation** des composants complexes

## 📞 Support

### Contact
- **Email** : contact@ia-juridique-dechets.com
- **Téléphone** : +33 1 23 45 67 89
- **Site** : https://ia-juridique-dechets.com

### Documentation
- **Next.js** : https://nextjs.org/docs
- **Tailwind CSS** : https://tailwindcss.com/docs
- **shadcn/ui** : https://ui.shadcn.com/docs
- **Three.js** : https://threejs.org/docs

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🎯 Roadmap

### Version 1.1
- [ ] Système de blog complet avec MDX
- [ ] Tests unitaires et e2e
- [ ] Intégration analytics
- [ ] Optimisations performance avancées

### Version 1.2
- [ ] Mode sombre/clair
- [ ] Internationalisation (i18n)
- [ ] PWA avec service worker
- [ ] Dashboard administrateur

### Version 2.0
- [ ] Intégration API réelle
- [ ] Système d'authentification
- [ ] Base de données
- [ ] Fonctionnalités IA réelles

---

**Développé avec ❤️ pour révolutionner la recherche juridique en gestion des déchets**