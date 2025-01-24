import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-44 pr-3'>
      <img
      alt='MoviePoster'
      src={IMG_CDN_URL+posterPath}
      />
    </div>
  )
}

export default MovieCard