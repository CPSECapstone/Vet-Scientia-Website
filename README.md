[Vet Scientia Website](https://main.d2q1vfnocl72y0.amplifyapp.com/)

**To start dev:**\
npm start\
open http://localhost:8080 


**To deploy:**\
git checkout gh-pages\
git merge main\
npm run build\
git add dist -f && git commit -m "Deployment commit"\
git subtree push --prefix dist origin gh-pages\
git checkout main
