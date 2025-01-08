import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browes from './Browes'
import { useDispatch } from 'react-redux'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
const Body = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));             
            } else {
              // User is signed out
             dispatch((removeUser()))
            }
          })
    },[])
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