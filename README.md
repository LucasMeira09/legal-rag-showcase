# Legal AI for Waste Management 

Modern and futuristic showcase website for a legal AI specialized in waste management. Next.js interface with 3D animations, futuristic design and complete features.

##  Features

### Design & UX
- **Futuristic interface** with green palette (primary green, neon green, charcoal)
- **3D animations** with Three.js (animated grid, floating particles)
- **Responsive design** optimized for mobile/desktop

### Pages & Sections
- **Home page** 
- **Features** 
- **Demo** 

##  Tech Stack

### Frontend
- **Next.js 15** with App Router
- **TypeScript** strict
- **Tailwind CSS** with custom configuration
- **shadcn/ui** for components
- **Framer Motion** for animations
- **Three.js** + React Three Fiber for 3D effects

### Backend & API
- **API Routes** Next.js
- **Validation** with Zod
- **Forms** with React Hook Form

##  Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm or bun

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd site-dechets

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be accessible at [http://localhost:3000](http://localhost:3000)

##  Customization

### Typography
- **Main font**: Inter (variable)
- **Fallback font**: Manrope, system-ui

### Animations
Animations are configured in `globals.css`:
- `glow-effect`: Glow effect
- `neon-text`: Blinking neon text
- `float-animation`: Floating effect
- `cursor-glow`: Hover halo effect

##  Project Structure

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

##  Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect the GitHub repository to Vercel
```

### Environment variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://ia-juridique-dechets.com
NEXT_PUBLIC_GOOGLE_ANALYTICS=GA_MEASUREMENT_ID
```

### Vercel Configuration
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

##  Available Scripts

```bash
# Development
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
npm run type-check   # TypeScript check

# shadcn/ui
npx shadcn@latest add [component]  # Add a component
```


### Documentation
- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com/docs
- **Three.js**: https://threejs.org/docs

##  License

This project is licensed under the MIT license. See the `LICENSE` file for more details.

## API 
-https://github.com/LucasMeira09/rag-juridique-api

## Our team
-https://github.com/LucasMeira09
-https://github.com/16050

# Special mention
-Tekno-Familie --> https://teknofamily.be/
