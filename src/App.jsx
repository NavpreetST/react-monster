import { useState } from "react"

function App() {

  
  const ValidPassword= ()=><h1>Valid Password</h1>
  const InvalidPassword= ()=><h1>InValid Password</h1>
  const [isValid, setIsValid] = useState(false)
  const Password = () =>{
    return isValid ? ValidPassword() : InvalidPassword()
  }
  const style = { color: "blue", backgroundColor: "lightgrey", borderRadius: "20px", padding: "40px"}
  return (
    
  
    <div style={style}>
      <button style = {{ color: "blue" }} onClick={()=> setIsValid(!isValid)}>On/Off</button>
      <Password/>

      <h1 > This is my heading  </h1>
      <p >To generate "lorem ipsum" placeholder text within JSX, you can use the Emmet abbreviation lorem followed by a number to specify the number of words, and then expand it with tab. For example, lorem5 will generate "lorem ipsum dolor sit amet". You can also use the react-lorem-ipsum npm package to generate multiple paragraphs or sentences, and customize the output. </p>          
    </div>
    
  )
}

export default App
