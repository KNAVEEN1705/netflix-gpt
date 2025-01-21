import React, { useEffect } from 'react'
import { signOut } from 'firebase/auth';
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constant';
const Header = () => {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
              navigate("/browse");           
            } else {
        
             dispatch((removeUser()));
             navigate("/")
            }
          });
          return ()=>unsubscribe();
    },[]);
  
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
        <img className="w-44 "
        src={LOGO}
        alt='LOGO'/>
        <div className='flex p-2 '>
        <img className='w-12 h-12  rounded-xl'
        src={USER_AVATAR} alt='User signin & signout'/>
        <button  className='font-bold text-white px-1' onClick={handleSignOut}>sign out</button>
        </div>
    </div>
   
  )
}

export default Header