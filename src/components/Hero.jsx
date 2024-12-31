import React from 'react'
import WorkSpace from '../assets/WorkSpace.jpg'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const nevigate =useNavigate()
  
    const handleGetStarted =()=>{
      nevigate('/auth')
    }


  return (
    <div className='mt-9 px-2 md:flex items-center justify-between'>
      <div className='md:w-[550px] '><p className='font-black text-5xl'>
      Effortless organization for a productive day....
      </p>
      <p className='mt-5 mb-5'>Take control of your day by managing tasks with
         precision. Our tool empowers you to stay on top 
         of your goals and achieve success, one task at 
         a time</p>
         <button onClick={handleGetStarted} className='bg-black text-white px-2 rounded-lg'>Get Started</button>
     </div>
      
      <div><img src={WorkSpace} className='mt-5 rounded-md md:h-80 w-[500px]'></img></div>
       
    </div>
  )
}

export default Hero
