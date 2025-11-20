@echo off
echo ========================================
echo   Push Logo Changes to GitHub
echo ========================================
echo.

git add -A
git commit -m "Add logo to navbar and favicon"
git push

echo.
echo Done! Logo changes pushed to GitHub.
echo Vercel will automatically redeploy.
pause

