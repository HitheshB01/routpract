import React from 'react'
import Navbar from './components/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import RouterPractise from './components/RouterPractise'
import Footer from './components/Footer'
import Forms from './components/Forms'
import router from './components/routes'
import Contacts from './components/Contacts'
const App = () => {

  return (
    <div>
      {/* <Contacts/> */}
      {/* <Navbar/> */}
            {/* <RouterProvider router={router}/> */}

      {/* <Forms/> */}
      <RouterPractise />
      {/* <Footer/> */}
    </div>
  )
}

export default App
