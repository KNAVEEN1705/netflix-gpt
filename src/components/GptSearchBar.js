import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langkey= useSelector((store)=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
      <input 
        type='text' 
        className='m-4 p-4  hover:border-red-800  col-span-9' 
        placeholder={lang[langkey].gptSearchPlaceholder} 
      />
      <button className='py-2 px-4 m-4 rounded-lg bg-red-600 text-white col-span-3'>{lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar