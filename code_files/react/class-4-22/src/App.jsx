import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const state = {
//     count: 0
//   }

function App() {

  const [count,setCount] = useState(0);
  const [numbers,upnums] = useState(0);

  const [todos,setTodos] = useState(
[
    {
    title: "car Wash",
    description: "I have to wash my all cars",
  },
  {
    title: "Bike Wash",
    description: "I have to wash my all Bikes",
  },
  {
    title: "car Wash",
    description: "I have to wash my all cars",
  }
]
)

{/* <CustomButton count={count} setCount={setCount} ></CustomButton>
      <CustomButton count={count} setCount={setCount} ></CustomButton> */}
{/* <Button testpropone={numbers} testproptwo={upnums}></Button> */}
function addTodo(){
  setTodos([...todos,{
    title: "Ommited new work",
    description: "go for shopping sir"
  }])
}
  return (
    <div>
      <button onClick={addTodo}>ADd SoMe mF</button>
      {/* <Todo todos={todos[0].title} description={todos[0].description}></Todo>
      <Todo todos={todos[1].title} description={todos[1].description}></Todo> */}
      {todos.map(function(saath){
        return <Todo todos={saath.title} description={saath.description}> </Todo>
      }) }
    </div>
  )
}

function Todo(props){

  return <div>
    <h1>{props.todos}</h1>
    <h2>{props.description}</h2>
  </div>
}

function Button(props){

  function testtttt(){
    props.testproptwo(props.tset+1);
  }

  console.log(props.testpropone)
  console.log(props.testproptwo)
  return <button onClick={testtttt}>test {props.testpropone} {props.testproptwo}</button>
}

function CustomButton(props){

  // const props = {
  //   count: 0,                  <-- //props is something like this from inside :)
  //   setCount: function(){}
  // }

  function onClickh() {
    props.setCount(props.count+1)
  }

  return <button onClick={onClickh}>
    counter {props.count}
  </button>
}

export default App
