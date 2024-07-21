

Steps to make this project 
07-20-2024: started with new project retro-board

npm create vite@latest
projectname:retro-board
framework: react with variant :javascript

then npm install
npm run dev

created github public repository
git remote add orgin "link"
git branch -M main
git push -u main

/////i made some changes to project and create new .due to which i has to merge previous code to new one
# Step 1: Fetch remote changes
git fetch origin

# Step 2: Merge with the --allow-unrelated-histories flag
git merge origin/main --allow-unrelated-histories

# Step 3: Resolve any merge conflicts if necessary
git add .
git commit -m "Resolved merge conflicts"

# Step 4: Push the local main branch to the remote repository
git push -u origin main
By following these steps, i was able to merge the histories and push local main branch to the remote repository successfully.

##installed tailwind Css

