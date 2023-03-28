import React, { useState } from "react";

const NewGoal = props =>{
    const [newText, changeNewText] = useState('');
    const prev = event =>{
        event.preventDefault();
        const newGoal = {
            id: Math.random().toString(),
            text: newText   //making a new goal by simply adding the newtext state to this array and then concatinating it with the existing goals
        };

        changeNewText('');
        props.onAddGoal(newGoal);
    }
    const textChange = event  =>{
        changeNewText(event.target.value);
    }

    return (
        <form className="new-goal" onSubmit={prev}>  //event handling
            <input type='text'value={newText} onChange={textChange}/>
            <button>Add goal</button>
        </form>
    )
}
export default NewGoal; 