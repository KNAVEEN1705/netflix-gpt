import React, { useRef, useState } from 'react';
import Header from './Header';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { checkvalidateData } from '../utils/validate';
import { BG_URL } from '../utils/constant';

const Login = () => {

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const dispatch=useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const handleButtonClick = () => {
    const message = checkvalidateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: firstName.current.value,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
const toggleSignInForm = () => {
  setIsSignInForm(!isSignInForm);
};

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img className=""
          src={BG_URL}
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
          onClick={handleButtonClick}
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
