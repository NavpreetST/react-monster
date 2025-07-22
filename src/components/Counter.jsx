import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount((prevcount) => prevcount +1)
    }
  return (
    <div>
        
    <button onClick={increment}>+1</button>
    <h1>{count}</h1>
    </div>
  )
}

export default Counter