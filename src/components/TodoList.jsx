import TodoItem from './TodoItem'

const TodoList = (props) => {
    const activity = props.activity
    const setActivity = props.setActivity
  return (
    <div className='bg-[#BDB4EA] border rounded-md p-2 flex-grow text-sm md:text-lg'>
        <h1>Today's Activity</h1>
        {activity.length === 0 ? <p>You Haven't added anything yet</p>:
        ''
        }
        {
            activity.map(function(item,ind){
                return <TodoItem 
                task = {item.task} 
                index = {ind}
                id = {item.id}
                activity = {activity}
                setActivity = {setActivity}
                />
            })
        }
    </div>
  )
}

export default TodoList