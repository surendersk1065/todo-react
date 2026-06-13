import React, { useState } from 'react'

const TodoForm = (props) => {
    const activity = props.activity
    const setActivity = props.setActivity
    const [newactivity,setNewactivity] = useState()
  return (
    <div className='flex flex-col gap-3'>
        <h1 className='text-2xl font-medium '>Manage Activities</h1>
        <div className=''>
            <input type="text" placeholder='Next Activity?' className='border border-black bg-transparent p-1' 
            value={newactivity}
            onChange={(evt) => setNewactivity(evt.target.value)}
            />
            <button className='bg-black text-white p-1 border border-black cursor-pointer mt-3 md:mt-0'onClick={function(){
                setActivity([...activity,{id:activity.length+1,task:newactivity}])
                setNewactivity("")
            }}>ADD</button>
        </div>
    </div>
  )
}

export default TodoForm