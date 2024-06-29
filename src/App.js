import React from 'react'
import Navbar from './components/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import RouterPractise from './components/RouterPractise'
const App = () => {

  return (
    <div>
      <RouterPractise />
    </div>
  )
}

export default App
