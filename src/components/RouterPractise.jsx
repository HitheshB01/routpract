import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Navbar from './Navbar'

const RouterPractise = () => {
const router = createBrowserRouter([
    {
        path:'/',
        element:<><Navbar/><Home/></>
    },
    {
        path:'/about',
        element:<><Navbar/><About/></>
    },
    {
        path:'/service',
        element:<><Navbar/><Service/></>
    }
])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default RouterPractise
