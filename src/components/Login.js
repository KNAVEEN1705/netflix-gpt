import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const[isSignInForm,setIsSignInForm]=useState(true)
  const toggleSignInFrom=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute '>
      <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg"
        alt="Netflix promotional banner"
      />
      </div>
     
      <form className='absolute w-3/12 p-12 my-32 mx-auto right-0 left-0 bg-black text-white bg-opacity-70 '>
      <h1 className='font-bold text-3xl py-2 px-1'>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm &&
          <input
          className='p-4 my-2 w-full bg-gray-700 rounded-lg'
          type='text'
          placeholder='Full Name'
          />
        }
        <input
        className='p-4 my-2 w-full bg-gray-700 rounded-lg'
        type='text'
        placeholder='Email Address'
        />
       
        <input 
        className='p-4 my-2 w-full bg-gray-700 rounded-lg'
        type='password'
        placeholder='Password'
        />
        <button className='bg-red-600 rounded-xl w-full p-4 my-6'>Sign In</button>
        <p className='cursor-pointer p-1 my-1 font-bold' onClick={toggleSignInFrom}>
         {isSignInForm ? "New to Netfilx Sign Up Now": "Already Registered Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
