import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([
    {
    name:"car",
    work:"New Exhaust Install"
    },
    {
    name:"bike",
    work:"new Purchase"
    },
    {
    name:"secs",
    work:"Krna hai"
    },
    {
    name:"car",
    work:"New Exhaust Install"
    },
    {
    name:"bike",
    work:"new Purchase"
    },
    {
    name:"secs",
    work:"Krna hai"
    },
    {
    name:"car",
    work:"New Exhaust Install"
    },
    {
    name:"bike",
    work:"new Purchase"
    },
    {
    name:"secs",
    work:"Krna hai"
    }
  ]
)

  return (
    <>
      <div>
        {count.map(function(paras){
          return <Todo name={paras.name} work={paras.work}></Todo>
        })}
      </div>
    </>
  )
}

interface Frame {
  name: string,
  work: string
}

function Todo(todo: any ){
  return <div>
    <h1>{todo.name}</h1>
    <p>{todo.work}</p>
  </div>
}

export default App
