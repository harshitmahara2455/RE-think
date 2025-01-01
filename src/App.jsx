import React from 'react'

import {  Route, Routes  } from 'react-router-dom'
import Landing from './page/Landing'
import AuthenticationPage from './page/AuthenticationPage'
import Profile from './page/Profile'
import Home_Page from './page/Home_Page'

const App = () => {

  return (
 
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path ="/profile" element={<Profile/>}></Route>
        <Route path='/Home_Page' element ={<Home_Page/>}></Route>
      </Routes>
  


  )
}

export default App

