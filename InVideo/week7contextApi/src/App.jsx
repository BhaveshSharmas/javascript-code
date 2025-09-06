import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value={count}>
      <ButtonContainer setCount={setCount}></ButtonContainer> 
      </CountContext.Provider>
    </div>
  )
}

function ButtonContainer({setCount}){
  return <div>
    <ShowCount></ShowCount>
    <Buttons setCount={setCount}></Buttons>
  </div>
}

function ShowCount(){
  const count = useContext(CountContext)
  return <dir>
    {count}
  </dir>
}



function Buttons({setCount}){
  const counter = useContext(CountContext)
  return <div>
    <button onClick={()=>{
      setCount(counter+1)
    }}>
      In
    </button>
    <button onClick={()=>{
      setCount(counter-1)
    }}>
      De
    </button>
  </div>
}

export default App
