

import React, { useState } from 'react'

const CopyInput = () => {
    const [inputValue, setInputValue] = useState("")
    const [ copied, setCopied] = useState(false)

    const handleChange = () =>{
        navigator.clipboard.writeText(inputValue).then(()=>{
            setCopied(true);
            setTimeout(()=> setCopied(false), 2000);
        })
    } 
  return (
    <div>
        

        <input onChange={()=> setInputValue(event.target.value)}></input>
        <button onClick={handleChange}>Copy</button>
    </div>
  )
}

export default CopyInput