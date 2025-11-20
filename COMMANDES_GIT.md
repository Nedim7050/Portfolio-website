# 🚀 Commandes Git pour pousser vers GitHub

Si le script batch ne fonctionne pas, exécutez ces commandes **une par une** dans votre terminal (PowerShell ou CMD) :

## 📋 Commandes à exécuter

Ouvrez votre terminal dans le dossier du projet et exécutez :

```bash
# 1. Initialiser Git
git init

# 2. Ajouter tous les fichiers
git add .

# 3. Créer le commit
git commit -m "Initial commit: Portfolio website"

# 4. Ajouter le remote GitHub
git remote add origin https://github.com/Nedim7050/Portfolio-website.git

# 5. Configurer la branche principale
git branch -M main

# 6. Pousser vers GitHub
git push -u origin main
```

## ⚠️ Si vous avez une erreur

### Erreur : "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/Nedim7050/Portfolio-website.git
```

### Erreur : "Authentication failed"
- Vérifiez que vous êtes connecté à GitHub
- Vous devrez peut-être vous authentifier avec un token ou SSH

### Erreur : "Repository not found"
- Vérifiez que le repository existe bien sur GitHub
- Vérifiez l'URL : `https://github.com/Nedim7050/Portfolio-website.git`

## ✅ Après le push réussi

1. Allez sur : https://github.com/Nedim7050/Portfolio-website
2. Vérifiez que tous vos fichiers sont bien là
3. Passez à l'étape Vercel !

