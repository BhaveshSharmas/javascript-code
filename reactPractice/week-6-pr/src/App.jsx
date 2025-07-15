import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function pp(){
const [count, setCount] = useState(0)
return count;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={function(){
        setCount(count+1)
      }}>{count}</button>
    </div>
  )
}

export default App
