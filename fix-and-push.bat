@echo off
echo ========================================
echo   Fix et Push vers GitHub
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
git commit -m "Fix TypeScript build error in Skills component"
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
echo   SUCCES! Corrections poussees
echo ========================================
echo.
echo Vercel va redepoyer automatiquement!
echo.
pause

