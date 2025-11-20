@echo off
echo ========================================
echo   Deploy to GitHub
echo ========================================
echo.

git add -A
git commit -m "Add professional README and update portfolio link"
git push

echo.
echo Done! Your changes are pushed to GitHub.
echo Vercel will automatically redeploy.
pause

