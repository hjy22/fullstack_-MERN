import React, { useState } from "react";
import './NewGoal.css'

const NewGoal = props => {
    const[enteredText,setEnterText]=useState()

    const addGoalHandle = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        }
        setEnterText('')
        props.onAddGoal(newGoal);
    };

    const textChangeHandler = event=>{
        setEnterText(event.target.value)
    }

    return (
        <form className="new-goal" onSubmit={addGoalHandle}>
            <input type="text" value={enteredText}  onChange={textChangeHandler}/>
            <button type="submit">Add Goal</button>
        </form>
    );
}
export default NewGoal;