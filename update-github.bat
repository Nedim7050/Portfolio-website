@echo off
echo ========================================
echo   Mise a jour GitHub
echo ========================================
echo.

echo [1/3] Ajout des fichiers modifies...
git add .
if errorlevel 1 (
    echo Erreur lors de l'ajout des fichiers
    pause
    exit /b 1
)

echo.
echo [2/3] Creation du commit...
git commit -m "Clean up files and add contact form email functionality"
if errorlevel 1 (
    echo Aucun changement a commiter ou erreur
)

echo.
echo [3/3] Push vers GitHub...
git push
if errorlevel 1 (
    echo.
    echo ========================================
    echo   ERREUR lors du push
    echo ========================================
    echo.
    echo Verifiez votre connexion GitHub
    pause
    exit /b 1
)

echo.
echo ========================================
echo   SUCCES! Mise a jour terminee
echo ========================================
echo.
echo N'oubliez pas de configurer RESEND_API_KEY sur Vercel!
echo Consultez SETUP_EMAIL.md pour les instructions
echo.
pause

