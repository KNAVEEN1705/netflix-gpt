import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../utils/constant';
const GptSearch = () => {
  return (
    <>
        <div className="fixed  inset-0 -z-10">
        <img className=" w-full h-full   object-cover"
          src={BG_URL}
          alt="Netflix promotional banner"
        />
      </div>
      <div className=''>
         <GptSearchBar/>
         <GptMovieSuggestion/>
    </div>
    </>
  

  )
}

export default GptSearch;