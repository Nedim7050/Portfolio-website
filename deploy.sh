#!/bin/bash

# Script de déploiement pour GitHub et Vercel
# Usage: ./deploy.sh "Message du commit"

echo "🚀 Déploiement du portfolio..."

# Vérifier si Git est initialisé
if [ ! -d ".git" ]; then
    echo "📦 Initialisation de Git..."
    git init
fi

# Ajouter tous les fichiers
echo "📝 Ajout des fichiers..."
git add .

# Créer un commit
COMMIT_MSG=${1:-"Update portfolio"}
echo "💾 Création du commit: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

# Vérifier si le remote existe
if ! git remote | grep -q "^origin$"; then
    echo "⚠️  Remote 'origin' non configuré."
    echo "📌 Configurez-le avec: git remote add origin https://github.com/VOTRE_USERNAME/NOM_DU_REPO.git"
    exit 1
fi

# Pousser sur GitHub
echo "⬆️  Push sur GitHub..."
git branch -M main
git push -u origin main

echo "✅ Code poussé sur GitHub!"
echo "🌐 Vercel redéploiera automatiquement votre site."
echo ""
echo "📋 Prochaines étapes:"
echo "   1. Vérifiez votre repository GitHub"
echo "   2. Vérifiez le déploiement sur Vercel"
echo "   3. Votre site sera mis à jour automatiquement!"

