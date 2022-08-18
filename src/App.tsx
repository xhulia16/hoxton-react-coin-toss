import { useState } from 'react'
import './App.css'

function App() {
  const [coin, setCoin]=useState("")

  return (
    <div className="App">
    <button 
    onClick={()=>{
      if(Math.random()>0.5){
        setCoin("HEAD")
      }
      else{
        setCoin("TAIL")
      }
    }}
    className="button">
      FLIP COIN</button>

{coin===""? <h1>RESULT: </h1> : <h1>RESULT: {coin}</h1>}

    </div>
  )
}

export default App
