import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Navbar from './Navbar'
import ErrorPage from './ErrorPage'
import Contacts from './Contacts'
import Forms from './Forms'

const RouterPractise = () => {
const router = createBrowserRouter([
    {
        path:'/',
        element:<Forms/>,
        errorElement:<ErrorPage/>,
        children: [
          {
            path: "contacts/:contactId",
            element: <Contacts />,
          },
        ]

    },
  
])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default RouterPractise
