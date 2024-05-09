import React,{useState} from 'react';
import './App.css';
import NewGoal from './components/NewGoal/NewGoal'
import GoalList from './components/GoalList/GoalList';

const App = () => {
  // // return <h1 title='This works'>A <span>React</span> App!</h1>;
  // return React.createElement('h1',{title:'This works'},'A React App!')
  
  // courseGoals 是当前状态的值
  // setCourseGoals 是一个函数，用于更新 courseGoals 状态的值
  const [courseGoals,setCouseGoals] = useState([
    { id: 'cg1', text: 'Finish the Course' },
    { id: 'cg2', text: 'Learn all about the Course Main Topic' },
    { id: 'cg3', text: 'Help other students in the Course Q&A' },
  ])

  const addNewGoalHandler = newGoal=>{
    //使用concat而不是push的理由，不对原始数组进行修改，返回一个新的数组，其中包含了原始 courseGoals 数组中的所有元素以及 newGoal 元素
    // setCouseGoals(courseGoals.concat(newGoal));
    setCouseGoals((preCourseGoals)=>{
      return preCourseGoals.concat(newGoal);
    })
  };

  return (
    <div>
      <h2 className='course-goal'>Course goals</h2>
      {/* onAddGoal是参数名 */}
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals} />
    </div>
  )
};

export default App;
