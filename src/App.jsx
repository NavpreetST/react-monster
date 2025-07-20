import { useState } from "react"

function App() {

  
  const ValidPassword= ()=><h1>Valid Password</h1>
  const InvalidPassword= ()=><h1>InValid Password</h1>
  const [isValid, setIsValid] = useState(false)
  const Password = () =>{
    return isValid ? ValidPassword() : InvalidPassword()
  }
  return (
    
  
    <div>
      <button style = {{ color: "blue" }} onClick={()=> setIsValid(!isValid)}>On/Off</button>
      <Password/>

      <h1 style = {{ color: "blue", backgroundColor: "red", borderRadius: "200px"}}>Nothing to see here.</h1>
    </div>
    
  )
}

export default App
