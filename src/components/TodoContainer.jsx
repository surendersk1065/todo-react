import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


const TodoContainer = () => {
    const [activity,setActivity] = useState([
            {
                id:1,
                task:"Go for a walk"
            }
    ])
  return (
    <div className='flex gap-5 flex-wrap '>
        <TodoForm 
        activity = {activity}
        setActivity = {setActivity}
        />
        <TodoList 
        activity = {activity}
        setActivity = {setActivity}
        />
    </div>
  )
}

export default TodoContainer