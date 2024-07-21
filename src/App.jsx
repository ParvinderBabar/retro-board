// import React from 'react';
import './index.css'; // or your CSS file name
import './App.css';
import PerformTaskList from './Components/PerformTaskList.jsx';

// Define your tasks here
const tasks = [
  {
    title: 'What didn\'t go well',
    comment: "No comments yet",
    vote: "5 votes",
    action: "Take action",
    delete: "Delete",
    Status: "NotGoneWell",
  },
  {
    title: 'Improved on project',
    comment: "No comments yet",
    vote: "5 votes",
    action: "Take action",
    delete: "Delete",
    Status: "Improved",
  },
  {
    title: 'Submit files',
    comment: "No comments yet",
    vote: "5 votes",
    action: "Take action",
    delete: "Delete",
    Status: "Kudos",
  },
  // Add more task objects here if needed
];

function App() {
  const NotGoneWell = tasks.filter((task) => task.Status === 'NotGoneWell');
  const improved = tasks.filter((task) => task.Status === 'Improved');
  const Kudos = tasks.filter((task) => task.Status === 'Kudos');

  return (
    <>
      <h1>Tasks by Status</h1>
      <h2>Not Gone Well</h2>
      <PerformTaskList tasks={NotGoneWell} />
      <h2>Improved</h2>
      <PerformTaskList tasks={improved} />
      <h2>Kudos</h2>
      <PerformTaskList tasks={Kudos} />
    </>
  );
}

export default App;
