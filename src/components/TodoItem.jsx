import React from 'react'

const TodoItem = (props) => {
    const activity = props.activity
    const setActivity = props.setActivity
    
    function handleDel (delid){
        let filact = activity.filter(function(item){
            if(item.id == delid){
                return false
            }
            else{
                return true
            }
        })
        setActivity(filact)
    }

  return (
    <div className='flex justify-between' key={props.index}>
        <p>{props.index+1}.{props.task}</p>
        <button className='text-red-600 cursor-pointer' onClick={() => handleDel(props.id)}>Del</button>
    </div>
  )
}

export default TodoItem