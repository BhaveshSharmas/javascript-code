//only rerender the changed things not the same before things
import React, { useEffect } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { TestTing } from './createbtn'

function App() {
  const [todo, setTodo] = useState(0)

  useEffect(function(){
    const timer = setTimeout(() => {
      setTodo(todo+1)
    }, 1000);
  },[todo])

  return <div>

    <div style={{fontSize:"100px", display:'inline'}}>{todo}</div>
    <br />
    <div style={{fontSize:"100px", display:'inline'}}>{todo}</div>
   {/* <button onClick={function(){
    setTodo(todo+1)
   }}>Increase</button> */}
   
  </div>
  
}


// function TextComponent(){
//   return <div>
//     hi there
//   </div>
// }

// function CardWrapper({children}){
//   return <div style={{border: '2px solid lightgreen',padding:'10px', margin:'10px'}}>
//     {children}
//   </div>
// }


export default App
