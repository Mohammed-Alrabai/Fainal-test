import { useState } from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './componant/Home'
import Login from './componant/auth/Login'
import Signup from './componant/auth/Signup'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/video/:id' element={<Home />} />
        
      </Routes>
    </>
  )
}

export default App
