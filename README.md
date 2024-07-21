# My Development Journey
Welcome to my development journey repository! This README documents my daily progress of Retro Board project, what I've learned, and the challenges I've faced  while working.
## Daily Logs
Steps to make this project 
### July 20, 2024
started with new project retro-board

# npm create vite@latest
projectname:retro-board
framework: react with variant :javascript

then npm install
# npm run dev

# created github public repository
git remote add orgin "link"
git branch -M main
git push -u main

** /////i made some changes to project and create new .due to which i has to merge previous code to new one **
- Step 1: Fetch remote changes
git fetch origin

- Step 2: Merge with the --allow-unrelated-histories flag
git merge origin/main --allow-unrelated-histories

- Step 3: Resolve any merge conflicts if necessary
git add .
git commit -m "Resolved merge conflicts"

- Step 4: Push the local main branch to the remote repository
git push -u origin main
By following these steps, i was able to merge the histories and push local main branch to the remote repository successfully.

## installed tailwind Css
steps followed from tailwind documentation
# started with App.jsx
  created basic card using function and used different variables title ,delete ,like,vote which futher i will change into state later on.

**Accomplishments:**

- Successfully integrated task filtering in the `App` component.
- Enhanced the `TaskCard` component to accept and render a list of tasks.

**Challenges:**

- Faced issues with component reusability and ensuring proper data flow between `App` and `TaskCard`.

**Learnings:**

- Gained insights into component composition and prop management in React.
- Improved skills in managing and displaying stati data in a React application.

**Code Changes:**

- Added task data and filtering logic in `App`.


### July 21, 2024

**Accomplishments:**

- Implemented and refined the `TaskCard` component in React.
- add props commnet,actionToperform and add icons to each from lucid icons
  - Added PropTypes for validation.
  - Integrated icons (ThumbsUp, MessageSquare, Trash2, SquareGanttChart) from `lucide-react`.
- Fixed issues with prop validation.
- Updated `PerformTaskList` to handle dynamic task data
-Add status for task for filter them each other and create separate columns

**Challenges:**

- Encountered errors related to missing exports and prop validation.
- Debugged and adjusted components to ensure proper functionality.

**Learnings:**

- Improved understanding of PropTypes for validating React component props.
- Gained experience in filtering data and passing props between components.

**Code Changes:**

- Updated `TaskCard` component to include PropTypes validation.
- Refined `PerformTaskList` to dynamically render tasks based on status.




## Future Goals

- Continue improving component design and prop validation.
- Explore additional React features and best practices.
- Enhance the UI/UX of the application based on feedback and testing.

## Repository Structure

- `src/Components/TaskCard.jsx`: Component for displaying individual task details.
- `src/Components/PerformTaskList.jsx`: Component for listing tasks with dynamic data.
- `src/App.jsx`: Main application component with task filtering logic.
- `index.css` and `App.css`: Stylesheets for application styling.



