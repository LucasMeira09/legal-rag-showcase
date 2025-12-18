# IA Juridique Déchets 

Site vitrine moderne et futuriste pour une IA juridique spécialisée dans la gestion des déchets. Interface Next.js avec animations 3D, design futuriste et fonctionnalités complètes.

##  Fonctionnalités

### Design & UX
- **Interface futuriste** avec palette verte (vert primaire, vert néon, charcoal)
- **Animations 3D** avec Three.js (grille animée, particules flottantes)
- **Responsive design** optimisé mobile/desktop

### Pages & Sections
- **Page d'accueil** 
- **Fonctionnalités** 
- **Démo** 

##  Stack Technique

### Frontend
- **Next.js 15** avec App Router
- **TypeScript** strict
- **Tailwind CSS** avec configuration personnalisée
- **shadcn/ui** pour les composants
- **Framer Motion** pour les animations
- **Three.js** + React Three Fiber pour les effets 3D

### Backend & API
- **API Routes** Next.js
- **Validation** avec Zod
- **Formulaires** avec React Hook Form

##  Installation

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

##  Personnalisation

### Typographie
- **Police principale** : Inter (variable)
- **Police de fallback** : Manrope, system-ui

### Animations
Les animations sont configurées dans `globals.css` :
- `glow-effect` : Effet de lueur
- `neon-text` : Texte néon clignotant
- `float-animation` : Flottement
- `cursor-glow` : Effet de halo au survol

##  Structure du projet

```
src/
├── app/                    # Pages Next.js App Router
│   ├── api/               # API Routes
│   │   ├── search/        # Endpoint de recherche
│   │   ├── alerts/        # Gestion des alertes
│   │   ├── analyze/       # Analyse de documents
│   │   └── demo/          # Demandes de démo
│   ├── fonctionnalites/   # Page fonctionnalités         
│   ├── demo/              # Page démo
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

##  Déploiement

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

##  Scripts disponibles

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


### Documentation
- **Next.js** : https://nextjs.org/docs
- **Tailwind CSS** : https://tailwindcss.com/docs
- **shadcn/ui** : https://ui.shadcn.com/docs
- **Three.js** : https://threejs.org/docs

##  Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## API 
-https://github.com/LucasMeira09/rag-juridique-api

## Our team
-https://github.com/LucasMeira09
-https://github.com/16050

# Special mention
-Tekno-Familie --> https://teknofamily.be/
