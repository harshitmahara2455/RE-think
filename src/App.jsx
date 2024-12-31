import React from 'react'

import {  Route, Routes  } from 'react-router-dom'
import Landing from './page/Landing'
import AuthenticationPage from './page/AuthenticationPage'

const App = () => {

  return (
 
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path="/auth" element={<AuthenticationPage />} />
      </Routes>
  


  )
}

export default App

