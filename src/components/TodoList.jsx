import React, { useEffect, useState } from 'react'

const TodoList = () => {
    const [todo, setTodo] = useState([])
    const [task, setTask] = useState("")

    // const createNewTask = () =>{
    //     setTodo(...todo, task)
    // }

    const handleSubmit = e =>{
        e.preventDefault() //stops the broswer from reloading the page. BEcause on submit the browser always tries to reload or pass the form to the browser.
        if(task.trim()){
            setTodo([...todo, task])
            setTask("");
        }
    }

    const handleChange = (event)=>{
        setTask(event.target.value)
    }
    useEffect(()=>{
        
        
    },[todo])
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={task} type="text" placeholder='Enter a todoTask' />
            <input type='submit'/>
        </form>
        <h1>Hello this is a list.</h1>
        <ul>
            {todo.map((task, index)=> (
                <li key={index}>{task}</li>
            ))}
        </ul>
        {/* <button onClick={createNewTask}>CreateNewTask</button> */}
    </div>
  )
}

export default TodoList