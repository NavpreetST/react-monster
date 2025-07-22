import React from 'react'


const Board = () => {
  
  const game = [
    null, null, null, 
    null, null, null, 
    null, null, null
  ]
  
  const Square = ({value}) =>{
      return <button style={{color: "red", backgroundColor: "lightgrey", width: "100px", height: "100px", fontSize: "50px", alignContent: "center", flex: "auto"}} className='square' onClick={handleClick} >{value} </button>
    }
  const handleClick = () =>{
    console.log("Clicked")
  }

  

  return (

    <div className='main-Board'>


    <div>
        <Square value = ""/>
        <Square value = "2"/>
        <Square value = "3"/>
        
        
    </div>
    <div>
      <Square value = "4"/>
        <Square value = "5"/>
        <Square value = "6"/>
      
    </div>
    <div>
      <Square value = "7"/>
        <Square value = "8"/>
        <Square value = "9"/>
    </div>


    
    </div>
  )
}

export default Board