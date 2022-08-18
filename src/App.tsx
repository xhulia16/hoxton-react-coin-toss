import { useState } from 'react'
import './App.css'

function App() {
  const [tail, setTail]=useState(false)

  return (
    <div className="App">
    <button 
    onClick={()=>{
      if(Math.random()>0.5){
        setTail(true)
      }
      else{
        setTail(false)
      }
    }}
    className="button">
      FLIP COIN</button>

{tail ? <h1>RESULT: TAIL</h1> : <h1>RESULT: HEAD</h1>}

    </div>
  )
}

export default App
