import { use, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { jobsAtom, messageAtom, networkAtom, notificatinAtom, totoalNotificationSelector } from './atoms';


function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  const networkNotificatinCount = useRecoilValue(networkAtom);
  const jobsAtomw = useRecoilValue(jobsAtom);
  const messageAtomw = useRecoilValue(messageAtom);
  const notificatinAtomw = useRecoilValue(notificatinAtom);

  // const [test,setTest] = useRecoilState(messageAtom)
  // const setTest = useSetRecoilState(messageAtom);
  
  // const sumOfAll = useMemo(function(){
  //   return networkNotificatinCount+jobsAtomw+messageAtomw+notificatinAtomw
  // },[networkNotificatinCount,jobsAtomw,messageAtomw,notificatinAtomw]) 
  
  // console.log(networkNotificatinCount)

  return (
    <div>
      <button>My Network ({networkNotificatinCount<=100?networkNotificatinCount:"99+"})</button>
      <button>Jobs ({jobsAtomw})</button>
      <button>Message ({messageAtomw})</button>
      <button>Notification ({notificatinAtomw})</button>

      <button>test ({totalNotificationCount})</button>
    </div>
  )
}


export default App
