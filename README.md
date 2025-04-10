[Vet Scientia Website](https://cpsecapstone.github.io/Vet-Scientia-Website/)

**[To start dev:**\
npm start\
open http://localhost:8080 


**To deploy:**\
git checkout gh-pages\
npm run build\
git add dist -f && git commit -m "Deployment commit"\
git subtree push --prefix dist origin gh-pages\
git checkout main
