
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import {lazy, useContext, useState} from "react";
import { Suspense } from 'react';
import { CountContext } from './context';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';
// import { Landing } from './components/landing'//This syntax is for the constant import
// import { Dashboard } from './components/Dashboard'//This syntax is for the constant import

const Dashboard = lazy(() => import('./components/Dashboard')) //This is for the Default import  of the files
const Landing = lazy(() => import('./components/landing'))

function App() {

  return (
    <div>
      <RecoilRoot>
      <Counts/>
      </RecoilRoot>
      </div>

      

      // <Buttons></Buttons>
      
      
      // {/* <BrowserRouter>
      // <Appbar />
      //   <Routes>
      //     <Route path="/dashboard" element={<Suspense fallback={"Loading..."}> <Dashboard /> </Suspense>} />
      //     <Route path="/" element={<Landing />} />
      //   </Routes>
      // </BrowserRouter> */}
    
      
  )
}

function Counts(){
  console.log("re-render")
  return <div>
    <CountRenderer></CountRenderer>
    <Buttons></Buttons>
    <Even></Even>
  </div>
}

function CountRenderer(){
  
  console.log("re-renders"); //only this is re-rendering
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Even(){
    const isEven = useRecoilValue(evenSelector);
    return <div>
    {isEven ? "Even" : null}
  </div>
}

function Buttons(){
  // const count = useContext(CountContext)
  // const [count,setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom);
  console.log("re-renders");
  

  return <div>
    <button onClick={function(){
        setCount(function(c){
          return c+1
        });
        // setCount(count+1)
    }}>increasing</button>
    <button onClick={function(){
      setCount(function(c){
          return c-1
        });
        // setCount(count-1)
    }}>decreasing</button>
  </div>
}

function Appbar() {
  const navigate = useNavigate();
  return <div>
    <div style={{ background: "black", padding: "1rem", color: "white"}}>
        Header
      </div>
      <div>
        <button onClick={()=>{
          navigate("/dashboard")
          // window.location.href = "/dashboard"
        }}>Dashboard</button>

        <button onClick={()=>{
          navigate("/")
          // window.location.href = "/"
        }}>Home</button>
      </div>
  </div>
}

function Boldify({children}){
  return <b>
    {children}
  </b>
}

export default App

