import React, { useRef } from 'react'
import {lang} from '../utils/languageConstants'
import {  useSelector } from 'react-redux'
import useGptMovieSearch from '../hooks/useGptMovieSearch';

const GptSearchBar = () => {

  const langkey= useSelector((store)=>store.config.lang);
  const searchText = useRef(null);
  const { handleGptSearchClick } = useGptMovieSearch(); 

  const handleSearchClickGpt = () => {
    const query = searchText.current.value;
    handleGptSearchClick(query);
  };
  return (
    <div className='pt-[45%] md:pt-[10%] flex justify-center'>
      <form className=' w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg' onSubmit={(e)=>e.preventDefault()}>
      <input
      ref={searchText}
        type='text' 
        className='m-4 p-4  hover:border-red-800  col-span-9' 
        placeholder={lang[langkey].gptSearchPlaceholder} 
      />
      <button className='py-2 px-4 m-4 rounded-lg bg-red-600 text-white col-span-3'
      onClick={handleSearchClickGpt}>{lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar