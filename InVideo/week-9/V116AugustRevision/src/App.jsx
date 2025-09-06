import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [dd, setDd] = useState();
  const value = useDebounced(dd);

  return <div>
    <div>
      {value}
      <input type="text" onChange={function (e) {
        setDd(e.target.value)
      }} />
    </div>
  </div>
}
function useDebounced(dd) {
  const [value, setValue] = useState(dd);

  useEffect(function () {
    let tt = setTimeout(() => {
      setValue(dd);
      console.log(dd);
    }, 500);
    return function () {
      clearTimeout(tt)
    }
  }, [dd])

  return value

}
function useOnline() {
  const [online, setOnline] = useState(true);

  useEffect(function () {
    const interval = setInterval(() => {
      setOnline(window.navigator.onLine)
      console.log(window.navigator.onLine)
    }, 500);

    return () => clearInterval(interval);

  }, [])

  return { online }
}



function UsePrint(n) {
  const [resp, setResp] = useState(n)

  useEffect(function () {

    setInterval(function () {
      setResp(Math.random())
    }, n * 1000)


    console.log(resp)

  }, [n])


  return { resp }
}

function MyComp() {
  useEffect(function () {
    console.error("component mounted")

    return (function () {
      console.log("component unmounted")
    })

  }, [])

  return <div>
    from inside myComponent
  </div>
}

export default App
