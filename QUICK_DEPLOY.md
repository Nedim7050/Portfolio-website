# ⚡ Déploiement Rapide

## 🎯 Commandes rapides pour déployer

### 1. Initialiser Git (première fois seulement)

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### 2. Créer le repository sur GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur **"+"** → **"New repository"**
3. Nommez-le (ex: `portfolio`)
4. **Ne cochez PAS** "Initialize with README"
5. Cliquez **"Create repository"**

### 3. Connecter et pousser

```bash
# Remplacez VOTRE_USERNAME et NOM_DU_REPO
git remote add origin https://github.com/VOTRE_USERNAME/NOM_DU_REPO.git
git branch -M main
git push -u origin main
```

**Exemple :**
```bash
git remote add origin https://github.com/Nedim7050/portfolio.git
git branch -M main
git push -u origin main
```

### 4. Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. **"Add New Project"**
3. **Importez votre repository** GitHub
4. Cliquez **"Deploy"** (tout est auto-configuré !)

### 5. C'est fait ! 🎉

Votre site sera en ligne à : `https://votre-projet.vercel.app`

---

## 🔄 Mises à jour futures

À chaque modification :

```bash
git add .
git commit -m "Description des changements"
git push
```

Vercel redéploiera automatiquement ! ✨

