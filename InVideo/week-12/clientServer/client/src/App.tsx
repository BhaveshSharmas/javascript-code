import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
    const [data,setData] = useState<any>("sdfdsfdsfds")
  
  return (
    <>
      <div>
        <Comp setData={setData}></Comp>
        {JSON.stringify(data)}
      </div>
    </>
  )
}

function Comp({setData}:any){
  return <div>
    <button onClick={function(){
      axios.get('http://localhost:4000/')
      .then(function(response){
        setData(response.data)
      })

    }}>Log</button>
  </div>
}

export default App
