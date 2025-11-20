# 📋 Instructions pour finaliser votre portfolio

## ✅ 1. Photo de profil - FAIT

La photo s'affiche maintenant **entièrement** avec une animation fluide. Elle est visible sur mobile et desktop.

**Changements apportés :**
- Photo affichée en entier (object-contain au lieu de object-cover)
- Animation d'apparition au chargement
- Animation de rotation subtile
- Effet hover pour zoom léger

---

## 📄 2. Où mettre le PDF du CV

### 📁 Emplacement :
Placez votre fichier CV PDF dans le dossier : **`public/cv.pdf`**

### 📝 Étapes :
1. Renommez votre fichier CV en **`cv.pdf`**
2. Placez-le dans le dossier `public/` à la racine du projet
3. Le chemin final sera : `public/cv.pdf`

### ✅ Résultat :
- Les boutons "Download CV" dans le portfolio téléchargeront automatiquement votre CV
- Le fichier sera accessible à l'URL : `https://votre-site.com/cv.pdf`

**Fichiers modifiés :**
- ✅ `components/sections/Hero.tsx` - Bouton "Download CV"
- ✅ `components/sections/Navbar.tsx` - Bouton "Download CV" (desktop et mobile)

---

## 🔗 3. Comment ajouter les liens GitHub (View Code)

### 📍 Où modifier :
**Fichier :** `data/projects.ts`

### 🎯 Structure d'un projet :

```typescript
{
  title: "Nom du Projet",
  subtitle: "Sous-titre",
  description: "Description...",
  tech: ["Tech1", "Tech2"],
  githubUrl: "https://github.com/Nedim7050/nom-du-repo",  // ← BOUTON "View Code"
  demoUrl: "https://votre-demo.com"  // ← BOUTON "Live Demo" (déjà configuré ✅)
}
```

### 📝 Comment trouver les liens GitHub :

1. **Allez sur votre profil GitHub :** `https://github.com/Nedim7050`
2. **Cherchez le repository** correspondant à chaque projet
3. **Copiez l'URL complète** du repository
4. **Remplacez** la valeur de `githubUrl` dans `data/projects.ts`

### 🔍 Exemples de noms de repositories possibles :

- **AIESEC Tanit 2K25** → `tanit-congress`, `tanit-2k25`, `aiesec-tanit`, etc.
- **AIESEC Carthage Recruitment** → `carthage-recruitment`, `aiesec-recruitment`, etc.
- **CNN 2K25** → `cnn2k25-website`, `cnn-2k25`, etc.
- **Deep Learning Image Classification** → `image-classification-transfer-learning`, `image-classification`, etc.
- **Credit Card Fraud Detection** → `credit-card-fraud-detection`, `fraud-detection`, etc.
- **Real-Time Finance Data Pipeline** → `data-pipeline-streaming`, `finance-pipeline`, etc.
- **Intelligent Pharma/MedTech Chatbot** → `ai-chat-webapp`, `pharma-chatbot`, etc.

### 📋 Liste des projets à mettre à jour :

Ouvrez `data/projects.ts` et remplacez les `githubUrl` pour chaque projet :

```typescript
// Exemple pour AIESEC Tanit 2K25
{
  title: "AIESEC Tanit 2K25",
  // ...
  githubUrl: "https://github.com/Nedim7050/tanit-congress",  // ← Remplacez par votre vrai lien
  demoUrl: "https://tanit-congress.vercel.app",  // ← Déjà configuré ✅
}
```

### ⚠️ Si un projet n'a pas de repository GitHub :

Si un projet est privé ou n'a pas de repository public :
- Mettez `githubUrl: "#"` (le bouton ne fonctionnera pas)
- Ou mettez votre profil GitHub général : `"https://github.com/Nedim7050"`

---

## 📚 Fichiers de référence :

- **Guide détaillé :** `data/PROJECTS_GUIDE.md`
- **Fichier à modifier :** `data/projects.ts`
- **Dossier CV :** `public/README.md`

---

## 🚀 Après avoir fait les modifications :

1. **Placez votre CV** dans `public/cv.pdf`
2. **Ajoutez les liens GitHub** dans `data/projects.ts`
3. **Testez** avec `npm run dev`
4. **Vérifiez** que tous les boutons fonctionnent correctement

---

**Besoin d'aide ?** Consultez les fichiers :
- `data/PROJECTS_GUIDE.md` pour plus de détails sur les liens GitHub
- `public/README.md` pour plus d'infos sur le CV

