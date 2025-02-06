import React, { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constant';
import { toggleGptSearchView } from '../utils/GptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-8 py-4 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img className="w-44" src={LOGO} alt="LOGO" />

      <div className="flex items-center space-x-4">
        {showGptSearch && (
          <select
            className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold"
          onClick={handleGptSearchClick}
        >
          {showGptSearch ? "Home Page" : "GPT Search"}
        </button>

        <div className="relative">
          <img
            className="w-12 h-12 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-110"
            src={USER_AVATAR}
            alt="User avatar"
          />
          <button
            className="absolute top-0 right-0 text-xs font-bold text-white mt-1 mr-1 bg-black rounded-full px-2 py-1"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
