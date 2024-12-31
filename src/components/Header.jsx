import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const nevigate =useNavigate()

  const handleGetStarted =()=>{
    nevigate('/auth')
  }
  return (
    <div className='flex items-center justify-between mt-3'>
      <div className='font-extrabold px-2'>RE-think</div>
      <div className='flex gap-8'>
        <button onClick={handleGetStarted} className='bg-black text-white px-2 rounded-lg'>Get Started</button>
        <GiHamburgerMenu size={30} color='black'/>

      </div>
    </div>
  )
}

export default Header
