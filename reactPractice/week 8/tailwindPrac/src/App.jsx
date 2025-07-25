import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './RevenueCard'
import { Card } from './Card'
import { SideBar } from './Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       {/* <Revenue></Revenue>
       <div className='ml-10 mb-6 text-xl font-bold text-gray-800'>
        Transaction | This Months
       </div>
       <div className='ml-8'>
        <Card></Card>
       </div> */}

       <SideBar></SideBar>
       
    </div>
    
  )
}

function Revenue(){
  return <div className='grid grid-cols-1 md:grid-cols-3'>
          <RevenueCard title={"Amount Pending"} amount={90000} orderCount={13}> </RevenueCard>
          <RevenueCard title={"Amount Pending"} amount={90000} orderCount={13}> </RevenueCard>
          <RevenueCard title={"Amount Pending"} amount={90000} orderCount={13}> </RevenueCard>
    </div>
}

export default App
