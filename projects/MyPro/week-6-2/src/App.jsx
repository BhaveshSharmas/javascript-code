import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  
  const [count, setCount] = useState(0) //1
  const [num, setNum] = useState(0)

  // useEffect(function(){ //1
  //   axios.get("http://localhost:3000/")
  //       .then(function(res){
  //         setCount(res.data.todos)
          
  //       })
  // },[])

// console.log(count)



        // let cc = useEffect(function(){ //3
        //   const n = Math.floor(Number(num))
        //   const sum = (n * (n + 1)/ 2);
        //   // console.log(sum)
        //   return(sum)
        // },[num])

        // console.log(cc)

        // const handleChange = function(e) {
        //   console.log(e.target.value) // 👈 print the value
        //   const bal = e.target.value;
        //   const cal = cals(bal)
        //   setNum(cal)
        // };

        const hko = function hlo(){
          console.log("hi there")
        }


  return (
    
      <div>

        <Bc interlude={hko}></Bc>

        <button onClick={function(){
          setCount(count+1)
        }}>Counter {count}</button>


         
        {/* <input onChange={function(e){
          setNum(e.target.value)
        }} type="text" placeholder="Enter Numbers" />
        <div>Sum is {cc}</div> */}


       
        {/* <button onClick={function(){ // 2
          setCici(1)
        }}>1</button>
        <button onClick={function(){
          setCici(2)
        }}>2</button>
        <button onClick={function(){
          setCici(3)
        }}>3</button> //2
        <Todo id={cici}></Todo> */} 


        {/* {count.map(function(todo){//1
          return <Toto title={todo.title} description={todo.description}></Toto>
        })} */}


      </div>

  )
}

const Bc = memo(({interlude}) => {
  console.log("Child render")
  return <div>
    <button onClick={interlude}>bc</button>
  </div>
})

// function Toto(){
//   const [count, setCount] = useState([]) //1
//   const handleChange = (e) => {
//     console.log(e.target.value); // 👈 print the value
//     const bal = e.target.value;
//     const cal = cals(bal)
//     setCount(cal)
//   };

//   return  <div>
//       <input onChange={handleChange} type="text" placeholder="Enter Numbers" />
//       <div>Sum is {count}</div>
//     </div>
// }

// function cals(e){`
//   const val = e.target.value;
//   console.log(val)
//   return val*val/2
// }

//   function cals(numss) {
//   const n = Math.floor(Number(numss)); 
//   return (n * (n + 1)/ 2);
// }
// function Todo({id}){ //2
//   console.log(id)
//   const [todo,setTodo] = useState({})

//   useEffect(function(){
//     axios.get(`http://localhost:3000/${id}`)
//       .then(function(todo){
//         setTodo(todo.data.todos)
//       })
    
//   },[id])

//   return <div>
//     <h1>{todo.title}</h1>
//     <h1>{todo.description}</h1>
//   </div> //2
// }

// function Toto({title,description}){ //1
//   return <div>
//     <h1>{title}</h1>
//     <h1>{description}</h1>
//   </div>
// }

export default App
