import React, { useRef, useState } from 'react';
import Header from './Header';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const dispatch=useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButton= ()=>{
    if (!isSignInForm) {
       createUserWithEmailAndPassword(auth, email.current.value, password.current.value,firstName.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          // Update the user's profile with display name and photo URL
          updateProfile(user, {
            displayName: firstName.current.value, // Use the firstName input value
          })
          .then(() => {
            const {uid,email,displayName} = auth.currentUser;
            dispatch({uid:uid,email:email,displayName:displayName})
            // Profile updated successfully
            navigate("/browse");
          })
          .catch((error) => {
            // Handle profile update errors
            setErrorMessage(`Profile update error: ${error.message}`);
          });
        })
        .catch((error) => {
          // Handle sign-up errors
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
    
  
  else{
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });
  }
}

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg"
          alt="Netflix promotional banner"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-2 px-1">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        
        {!isSignInForm && (
          <input
            ref={firstName}
            className="p-4 my-2 w-full bg-gray-700 rounded-lg hover:border-2 border-cyan-200"
            type="text"
            placeholder="Full Name"
          />
        )}
        
        <input
          ref={email}
          className="p-4 my-2 w-full bg-gray-700 rounded-lg hover:border-2 border-cyan-200"
          type="email"
          placeholder="Email Address"
        />
        
        <input
          ref={password}
          className="p-4 my-2 w-full bg-gray-700 rounded-lg hover:border-2 border-cyan-200"
          type="password"
          placeholder="Password"
        />
        
        {errorMessage && <p className="text-red-600 font-semibold p-2">{errorMessage}</p>}
        
        <button
          type="button"
          className="bg-red-600 rounded-xl w-full p-4 my-6"
          onClick={handleButton}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        
        <p
          className="cursor-pointer p-1 my-1 font-bold hover:text-red-600"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
