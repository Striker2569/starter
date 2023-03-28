// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/Goallist';
import NewGoal from './components/NewGoals/NewGoal';
function App() {
  const [goalList, setgoalList] = useState([  //Use Statest to make the react re-render the page with the changes created by inputs/events done by the user
    {id:'id1',text: 'This is how it works'},
    {id:'id2',text: 'I will complete react course'}
  ]);
  const addGoal = (newGoal) => {
    setgoalList(goalList.concat(newGoal));
  }; 
  
  return (
    <div>
      <NewGoal onAddGoal={addGoal}/>   //divide components and add then to the main app
      <GoalList  goal = {goalList}/>
    </div>
  );
}

export default App;
