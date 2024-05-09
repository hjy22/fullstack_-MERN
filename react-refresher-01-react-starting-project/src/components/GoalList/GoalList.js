import React from "react";
import './GoalList.css'

const GoalList =props=>{
    //在开发者模式中可以看到
    // console.log(props.goals)
    return(
         <ul className='goal-list'>
            {props.goals.map((goal)=>{
                return<li key={goal.id}>{goal.text}</li>
            })}
         </ul>  
    )
}
//将 GoalList 组件导出
export default GoalList;