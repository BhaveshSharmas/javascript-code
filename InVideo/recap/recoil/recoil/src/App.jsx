import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Count setCount={setCount} count={count}></Count>
    </>
  )
}

function Count({ setCount,count }) {
  return <div>
    <Counter count={count}></Counter>
    <Buttow setCount={setCount} count={count}></Buttow>
  </div>
  console.log("rendering");
}
function Counter({count}) {
  return <div>
    {count}
  </div>
}

function Buttow({ setCount,count }) {
  return <div>
    <button onClick={() => {
      {setCount(count + 1)}
    }}></button>
  </div>
}

export default App
