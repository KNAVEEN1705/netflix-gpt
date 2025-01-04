import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browes from './Browes'

const Body = () => {
    const appRouter= createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browes/>
        }
    ])
  return (
   <RouterProvider router={appRouter}/>
  )
}

export default Body