[Vet Scientia Website](https://cpsecapstone.github.io/Vet-Scientia-Website/)

To deploy:
git checkout gh-pages
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
