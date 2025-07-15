import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { notificationAtom, notificationSelector } from './atoms'
import axios from 'axios';


function App() {
  return <RecoilRoot>
    <MainApp></MainApp>
  </RecoilRoot>
}

function MainApp(){
  const [networkCount,setNetworkCount] = useRecoilState(notificationAtom)
  const totalNotification = useRecoilValue(notificationSelector);

  useEffect(function(){
    axios.get("http://localhost:3000/")
    .then(function(res){
      setNetworkCount(res.data)
    })
  },[])

  return <div>
    <button>Network {networkCount.network}</button>
    <button>Jobs {networkCount.jobs}</button>
    <button>Message {networkCount.message}</button>
    <button>Notificatons {networkCount.notification}</button>

    <button>Me ({totalNotification})</button>
  </div>
}
export default App
