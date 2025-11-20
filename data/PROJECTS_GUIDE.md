# 📚 Guide : Comment ajouter les liens GitHub pour vos projets

## 🎯 Où modifier les liens ?

Tous les liens des projets sont dans le fichier : **`data/projects.ts`**

## 🔗 Comment distinguer les liens ?

### Structure d'un projet dans `projects.ts` :

```typescript
{
  title: "Nom du Projet",
  subtitle: "Sous-titre",
  description: "Description...",
  tech: ["Tech1", "Tech2"],
  githubUrl: "https://github.com/VotreUsername/nom-du-repo",  // ← LIEN GITHUB (bouton "View Code")
  demoUrl: "https://votre-demo.com"  // ← LIEN DEMO (bouton "Live Demo")
}
```

## 📝 Exemple concret :

### Projet : AIESEC Tanit 2K25

**Dans votre GitHub**, vous avez probablement un repository comme :
- `https://github.com/Nedim7050/tanit-congress`
- ou `https://github.com/Nedim7050/tanit-2k25`
- ou `https://github.com/Nedim7050/aiesec-tanit`

**Pour trouver le bon lien :**
1. Allez sur votre profil GitHub : `https://github.com/Nedim7050`
2. Cherchez le repository correspondant au projet
3. Copiez l'URL complète du repository

**Exemple de modification :**

```typescript
{
  title: "AIESEC Tanit 2K25",
  subtitle: "International Congress Website",
  description: "Official website for TANIT 2K25...",
  tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "GSAP"],
  githubUrl: "https://github.com/Nedim7050/tanit-congress",  // ← Remplacez par votre vrai lien GitHub
  demoUrl: "https://tanit-congress.vercel.app",  // ← Déjà configuré ✅
}
```

## 🗂️ Liste des projets à mettre à jour :

1. **FTTX-PROJECT** - Cherchez le repo GitHub correspondant
2. **AIESEC Tanit 2K25** - Cherchez le repo GitHub correspondant
3. **AIESEC Carthage Recruitment** - Cherchez le repo GitHub correspondant
4. **CNN 2K25** - Cherchez le repo GitHub correspondant
5. **Deep Learning Image Classification** - Cherchez le repo GitHub correspondant
6. **Credit Card Fraud Detection** - Cherchez le repo GitHub correspondant
7. **Real-Time Finance Data Pipeline** - Cherchez le repo GitHub correspondant
8. **Intelligent Pharma/MedTech Chatbot** - Cherchez le repo GitHub correspondant

## ⚠️ Si un projet n'a pas de repository GitHub :

Si un projet est privé ou n'a pas de repository public, vous pouvez :
- Mettre `githubUrl: "#"` (le bouton ne fonctionnera pas)
- Ou mettre un lien vers votre profil GitHub général : `"https://github.com/Nedim7050"`

## ✅ Vérification :

Après avoir modifié les liens, vérifiez que :
- Le bouton "View Code" pointe vers le bon repository GitHub
- Le bouton "Live Demo" pointe vers la bonne démo (déjà configuré ✅)

---

**Fichier à modifier :** `data/projects.ts`

