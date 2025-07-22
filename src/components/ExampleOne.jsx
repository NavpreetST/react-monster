import React from 'react'
import './example.css'
import { useState } from 'react'

const ExampleOne = () => {
    const [count, setCount] = useState(()=>{
        const initialValue = 10
        return initialValue; //only run on the first run
    }) 
    const [randomNumber, setRandomNumber] = useState(()=>
        Math.floor(Math.random()*100)
    )

    const generateNewRandomNumber = () =>{
        setRandomNumber(Math.floor(Math.random()*100))
    }
    const increment = () =>{
        setCount(prevCount=>prevCount+1)
    }
  return (
    <div>
        <h1>COunt: {count}</h1>
        <button onClick={increment}>Increment</button>
        <h1>{randomNumber}</h1>
        <button onClick={generateNewRandomNumber}>Generate a random number!</button>
    </div>
  )
}

export default ExampleOne;