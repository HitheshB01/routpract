import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from '../components/About'
import Dashboard from './Dashboard'
import Settings from './Settings'
import Profile from './Profile'


const RoutingPage = () => {
    const router= createBrowserRouter([
        {
            path:'/',
            element:<Layout/>,
            children:[
                {   path:'/',
                    element:<Home/>},
                    {
                        path:'/about',
                        element:<About/>  
                    },
                    {
                        path:'/dashboard',
                    element:<Dashboard/>,
                    children:[
                        {
                            path:'/dashboard/settings',
                            element:<Settings/>  
                        },
                        {
                            path:'/dashboard/profile',
                            element:<Profile/>
                        }
                    ]
                    }
              
            ]
        }
    ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default RoutingPage
