import React, { Component, useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { SearchBar } from '../components/DeBounce';

function App() {
  const [render, setRender] = useState(true)
  // const online = useIsOnline();
  // useEffect(function () {
  //   setInterval(function () {
  //     // setRender(false);
  //     setRender(r => !r)
  //   }, 5000)
  // }, [])

  return (
    <>
      {/* {render ? <MyCom></MyCom> : <div></div>} */}
      {/* <SS></SS> */}
      {/* <CheckConnection></CheckConnection> */}
      {/* <XX></XX> */}
      {/* <AAp></AAp> */}
      {/* <Inter></Inter> */}
      <SearchBar></SearchBar>
    </>
  )
}

function useInterval(callback, n) {
  useEffect(function () {
    setInterval(callback, n)
  }, [])
}

function Inter() {
  const [count, setCount] = useState(0);

  useInterval(function () {
    setCount(count => count + 1)
  }, 1000)

  return <div>
    {count}
  </div>
}

/////////////////////////////////////////
function Maous() {
  // const [mouse, setMouse] = useState()
  const [mouse, setMouse] = useState({ x: null, y: null })

  useEffect(function () {
    const updateMouseLocation = function (location) {
      // setMouse(location.clientX)
      setMouse({ x: location.clientX, y: location.clientY })
    }


    window.addEventListener('mousemove', updateMouseLocation)

    return function () {
      window.removeEventListener('mousemove', updateMouseLocation)
    }
  }, [])
  return mouse;
}

function XX() {
  const { x, y } = Maous();

  return <div>
    {x}
    {y}
  </div>
}

function useDimension() {
  const [dimenson, setDimension] = useState({ x: null, y: null });

  useEffect(function () {
    const dd = function () {
      setDimension({ x: window.innerWidth, y: innerHeight });//some How 
    }

    window.addEventListener('resize', dd)

    return (function () {
      window.removeEventListener('resize', dd)
    })
  }, [])

  return dimenson
}

function AAp() {
  const dimension = useDimension();

  return <div>
    {dimension.x}
    {dimension.y}
  </div>
}

//////////////////////////////////////

function CheckConnection() {
  const online = useIsOnline();

  if (online) {
    return "Online"
  } else {
    return "offline";
  }
}

function useIsOnline() {
  const [stats, setStats] = useState(window.navigator.onLine);

  window.addEventListener('online', function () {
    setStats(true);

  })

  window.addEventListener('offline', function () { setStats(false) })


  return stats;
}

function MyComp() {
  let tofo = 0;
  useEffect(function () {
    console.error("console.error")
    console.log("running")
    //perform setup
    return function () {
      console.log("loglog under return")
      //clean code
    }

  }, [tofo])
  return <div>
    //Render UI
  </div>


}

class MyCom extends React.Component {
  componentDidMount() {
    console.log("component mount")
  }

  componentWillUnmount() {
    console.log("component unmounted")
  }
  render() {
    return <div>hi there</div>
  }
}

function cComponent() { //this is the latest Methos using useState components
  const [count, setCount] = useState(0)

  const increament = function () {
    setCount(count + 1)
  }

  return <div>
    <p>{count}</p>
    <button onClick={increament}>increament</button>
  </div>
}

class Mycomponent extends React.Component { //This is the old method using class compoments
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increament = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return <div>
      <p>{this.state.count}</p>
      <button onClick={this.increament}>increament</button>
    </div>
  }
}

function useTodos(n) {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(function () {
    const value = setInterval(function () {
      axios.get("http://localhost:3000/todo")
        .then(function (res) {
          console.log(res.data.todos);
          setTodo(res.data.todos)
          setLoading(false);
        })
    }, n * 1000)

    axios.get("http://localhost:3000/todo")
      .then(function (res) {
        console.log(res.data.todos);
        setTodo(res.data.todos)
        setLoading(false);
      })

    return (
      clearInterval(value)
    )

  }, [n])

  return { todo, loading };
}

function SS() {
  const { todo, loading } = useTodos(3);
  console.log(loading);

  if (loading) {
    return <div>loading...</div>
  }

  return <>
    {todo.map(function (todo) {
      return <TodosComp todo={todo}></TodosComp>
    })}
  </>
}

function TodosComp({ todo }) {

  return <div>
    {todo.title}
  </div>
}




export default App
