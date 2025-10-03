# Guide de déploiement - IA Juridique Déchets

## 🚀 Déploiement sur Vercel

### Méthode 1 : Via l'interface Vercel (Recommandée)

1. **Connecter le repository GitHub**
   - Aller sur [vercel.com](https://vercel.com)
   - Se connecter avec GitHub
   - Cliquer sur "New Project"
   - Sélectionner le repository `site-dechets`

2. **Configuration automatique**
   - Vercel détectera automatiquement Next.js
   - Framework : Next.js
   - Build Command : `npm run build`
   - Output Directory : `.next`
   - Install Command : `npm install`

3. **Variables d'environnement (optionnel)**
   ```
   NEXT_PUBLIC_SITE_URL=https://votre-domaine.vercel.app
   NEXT_PUBLIC_GOOGLE_ANALYTICS=GA_MEASUREMENT_ID
   ```

4. **Déployer**
   - Cliquer sur "Deploy"
   - Le site sera accessible en quelques minutes

### Méthode 2 : Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer depuis le dossier du projet
cd "/Users/walid/Desktop/site-dechets"
vercel

# Suivre les instructions
```

## 🌐 Configuration du domaine personnalisé

### Sur Vercel
1. Aller dans "Settings" > "Domains"
2. Ajouter votre domaine (ex: `ia-juridique-dechets.com`)
3. Configurer les DNS selon les instructions Vercel

### DNS Configuration
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

## 🔧 Post-déploiement

### 1. Vérifications essentielles
- [ ] Site accessible sur le domaine
- [ ] HTTPS activé automatiquement
- [ ] Sitemap accessible : `/sitemap.xml`
- [ ] Robots.txt accessible : `/robots.txt`
- [ ] Toutes les pages fonctionnent
- [ ] API endpoints répondent

### 2. Analytics et monitoring
```bash
# Ajouter Google Analytics (optionnel)
# Dans .env.local ou variables Vercel
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
```

### 3. SEO et performances
- [ ] Vérifier le score Lighthouse
- [ ] Tester sur mobile
- [ ] Vérifier les métadonnées OpenGraph
- [ ] Soumettre le sitemap à Google Search Console

## 📊 Monitoring

### Vercel Analytics
- Activé automatiquement sur Vercel
- Métriques de performance
- Analytics des visiteurs

### Google Search Console
1. Aller sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajouter votre propriété
3. Vérifier la propriété via fichier HTML ou DNS
4. Soumettre le sitemap

## 🔒 Sécurité

### Headers de sécurité
Configurés dans `vercel.json` :
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

### HTTPS
- Activé automatiquement par Vercel
- Certificats SSL gérés automatiquement

## 🚀 Optimisations avancées

### 1. Images
```bash
# Optimiser les images avant déploiement
npm run build
```

### 2. Cache
- Vercel gère automatiquement le cache
- CDN global activé
- Cache statique pour les pages

### 3. Performance
- Code splitting automatique
- Lazy loading des composants
- Optimisations Next.js

## 🔄 Mises à jour

### Déploiement automatique
- Chaque push sur `main` déclenche un déploiement
- Pull requests créent des preview deployments

### Déploiement manuel
```bash
# Mettre à jour le code
git add .
git commit -m "Update"
git push origin main

# Vercel déploiera automatiquement
```

## 🆘 Dépannage

### Erreurs courantes

**Build failed**
```bash
# Vérifier les logs Vercel
# Vérifier les dépendances
npm install
npm run build
```

**Page 404**
- Vérifier les routes dans `src/app/`
- Vérifier les redirections dans `vercel.json`

**API non accessible**
- Vérifier les routes dans `src/app/api/`
- Vérifier les headers dans `vercel.json`

### Support
- **Vercel Docs** : https://vercel.com/docs
- **Next.js Docs** : https://nextjs.org/docs
- **Support Vercel** : support@vercel.com

## 📈 Prochaines étapes

### Version 1.1
- [ ] Intégrer Google Analytics
- [ ] Ajouter Sentry pour le monitoring
- [ ] Tests e2e avec Playwright
- [ ] Optimisations performance avancées

### Version 1.2
- [ ] Mode sombre/clair
- [ ] PWA avec service worker
- [ ] Internationalisation
- [ ] Dashboard admin

---

**Le site est maintenant prêt pour la production ! 🎉**
