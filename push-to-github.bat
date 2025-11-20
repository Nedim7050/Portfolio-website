@echo off
echo ========================================
echo   Push Portfolio vers GitHub
echo ========================================
echo.

echo [1/5] Initialisation de Git...
git init
if errorlevel 1 (
    echo Erreur lors de l'initialisation de Git
    pause
    exit /b 1
)

echo.
echo [2/5] Ajout des fichiers...
git add .
if errorlevel 1 (
    echo Erreur lors de l'ajout des fichiers
    pause
    exit /b 1
)

echo.
echo [3/5] Creation du commit...
git commit -m "Initial commit: Portfolio website"
if errorlevel 1 (
    echo Erreur lors de la creation du commit
    pause
    exit /b 1
)

echo.
echo [4/5] Ajout du remote GitHub...
git remote add origin https://github.com/Nedim7050/Portfolio-website.git
if errorlevel 1 (
    echo Le remote existe deja ou erreur lors de l'ajout
)

echo.
echo [5/5] Configuration de la branche et push...
git branch -M main
git push -u origin main
if errorlevel 1 (
    echo.
    echo ========================================
    echo   ERREUR lors du push
    echo ========================================
    echo.
    echo Verifiez que:
    echo - Vous etes connecte a GitHub
    echo - Le repository existe bien
    echo - Vous avez les droits d'ecriture
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   SUCCES! Portfolio pousse vers GitHub
echo ========================================
echo.
echo Prochaines etapes:
echo 1. Allez sur https://github.com/Nedim7050/Portfolio-website
echo 2. Verifiez que tous les fichiers sont bien la
echo 3. Allez sur vercel.com pour deployer
echo.
pause

