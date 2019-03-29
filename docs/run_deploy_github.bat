call vuepress build
cd .vuepress\dist
::# if you are deploying to a custom domain
::# echo 'www.example.com' > CNAME

call git init
call git add -A
call git commit -m 'deploy'
call git push -f https://github.com/minikie/minikie.github.io master
deploy complete -----------------------
start "" https://minikie.github.io
cd ..
cd ..
