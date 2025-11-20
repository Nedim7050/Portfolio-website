# 🚀 Guide de Déploiement sur GitHub et Vercel

## 📋 Étapes pour déployer votre portfolio

### 1️⃣ Préparer le projet pour Git

Assurez-vous que tous vos fichiers sont prêts :
- ✅ Votre CV est dans `public/cv.pdf`
- ✅ Tous les liens GitHub sont à jour dans `data/projects.ts`
- ✅ Tous les textes sont modifiés

### 2️⃣ Initialiser Git et créer le repository

Ouvrez votre terminal dans le dossier du projet et exécutez :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit: Portfolio website"
```

### 3️⃣ Créer le repository sur GitHub

1. **Allez sur GitHub.com** et connectez-vous
2. **Cliquez sur le "+"** en haut à droite → **"New repository"**
3. **Nommez votre repository** (ex: `portfolio`, `nadim-portfolio`, `my-portfolio`)
4. **Ne cochez PAS** "Initialize with README" (vous avez déjà des fichiers)
5. **Cliquez sur "Create repository"**

### 4️⃣ Connecter votre projet local à GitHub

GitHub vous donnera des commandes. Utilisez celles-ci (remplacez `VOTRE_USERNAME` et `NOM_DU_REPO`) :

```bash
# Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE_USERNAME/NOM_DU_REPO.git

# Renommer la branche principale en 'main' (si nécessaire)
git branch -M main

# Pousser votre code sur GitHub
git push -u origin main
```

**Exemple concret :**
```bash
git remote add origin https://github.com/Nedim7050/portfolio.git
git branch -M main
git push -u origin main
```

### 5️⃣ Déployer sur Vercel

#### Option A : Via l'interface Vercel (Recommandé)

1. **Allez sur [vercel.com](https://vercel.com)** et connectez-vous avec GitHub
2. **Cliquez sur "Add New Project"**
3. **Importez votre repository** GitHub (il apparaîtra automatiquement)
4. **Configurez le projet :**
   - Framework Preset : **Next.js** (détecté automatiquement)
   - Root Directory : `./` (par défaut)
   - Build Command : `npm run build` (par défaut)
   - Output Directory : `.next` (par défaut)
5. **Cliquez sur "Deploy"**

Vercel va :
- ✅ Installer les dépendances
- ✅ Builder le projet
- ✅ Déployer automatiquement
- ✅ Vous donner une URL (ex: `votre-portfolio.vercel.app`)

#### Option B : Via Vercel CLI

```bash
# Installer Vercel CLI globalement
npm i -g vercel

# Dans le dossier du projet
vercel

# Suivez les instructions
```

### 6️⃣ Configuration automatique (Recommandé)

Une fois déployé, Vercel se connectera automatiquement à votre repository GitHub. 

**À chaque push sur GitHub, Vercel redéploiera automatiquement votre site !**

Pour activer cela :
1. Allez sur votre projet dans Vercel
2. Settings → Git
3. Assurez-vous que "Automatic deployments" est activé

### 7️⃣ Configuration personnalisée (Optionnel)

#### Domaine personnalisé

1. Dans Vercel → Settings → Domains
2. Ajoutez votre domaine personnalisé
3. Suivez les instructions DNS

#### Variables d'environnement

Si vous avez besoin de variables d'environnement :
1. Vercel → Settings → Environment Variables
2. Ajoutez vos variables

### 8️⃣ Vérification

Après le déploiement, vérifiez :
- ✅ Le site charge correctement
- ✅ Tous les liens fonctionnent
- ✅ Le CV se télécharge
- ✅ Les projets s'affichent correctement
- ✅ Le site est responsive sur mobile

---

## 🔄 Mettre à jour le site

À chaque fois que vous modifiez votre code :

```bash
# Ajouter les changements
git add .

# Créer un commit
git commit -m "Description de vos changements"

# Pousser sur GitHub
git push

# Vercel redéploiera automatiquement ! 🎉
```

---

## 📝 Checklist avant le déploiement

- [ ] CV dans `public/cv.pdf`
- [ ] Tous les liens GitHub dans `data/projects.ts`
- [ ] Tous les textes modifiés
- [ ] Test local avec `npm run dev`
- [ ] Build fonctionne avec `npm run build`

---

## 🆘 Problèmes courants

### Erreur de build sur Vercel

- Vérifiez que `package.json` contient toutes les dépendances
- Vérifiez les erreurs dans les logs Vercel
- Testez le build localement : `npm run build`

### Le CV ne se télécharge pas

- Vérifiez que `public/cv.pdf` existe
- Vérifiez que le fichier est bien commité dans Git

### Les images ne s'affichent pas

- Vérifiez que les URLs Cloudinary sont correctes
- Vérifiez que les images sont accessibles publiquement

---

## 🎉 C'est fait !

Votre portfolio est maintenant en ligne et se mettra à jour automatiquement à chaque push sur GitHub !

**URL de votre site :** `https://votre-projet.vercel.app`

