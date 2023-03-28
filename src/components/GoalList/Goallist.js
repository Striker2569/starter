
import React from 'react';

const GoalList = props => {
    console.log(props.goal)
    return (
    <ul>
        {props.goal.map((goal) => {
            // console.log(goal);
            return <li key={goal.id}>{goal.text}</li>;
        })}
    </ul>
    );
};
export default GoalList;