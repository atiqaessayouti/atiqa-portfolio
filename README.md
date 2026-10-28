# Portfolio — Atiqa Essayouti

React + Vite + Tailwind CSS + Lucide React.

## Lancer en local
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère dist/
npm run preview  # prévisualise le build
```

## Ajouter ton vrai CV
Place ton PDF ici, avec exactement ce nom : `public/cv-atiqa-essayouti.pdf`.
Tant que ce fichier n’existe pas, le bouton « Télécharger mon CV » n’ouvrira pas de PDF.

## Ajouter des captures d’écran / démos / liens GitHub exacts
1. Dépose les images dans `public/screenshots/` (ex. `ocp.png`).
2. Dans `src/data/content.js`, pour chaque projet : `screenshot: '/screenshots/ocp.png'`.
3. Une vraie démo : `demo: 'https://...'` (le bouton Démo n’apparaît que si renseigné).
4. SmileFlow et ECG5000 pointent vers ton profil GitHub (`profileLink: true`) :
   remplace `github` par l’URL du dépôt, puis mets `profileLink: false`.

## Publier sur GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/atiqaessayouti/portfolio.git   # crée d’abord le dépôt vide sur GitHub
git push -u origin main
```

## Déployer sur Vercel
1. Va sur vercel.com, connecte-toi avec GitHub, puis « Add New… → Project ».
2. Importe le dépôt `portfolio` : Vercel détecte Vite (build `npm run build`, sortie `dist`).
3. Clique sur « Deploy ». Le site est publié sur une URL `*.vercel.app`.
