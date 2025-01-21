import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from black'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='w-1/2 py-4 text-wrap'>{overview}</p>
      <div>
        <button className='bg-white text-black p-2 px-12 text-xl  rounded-lg hover:bg-opacity-50'> ▶ Play</button>
        <button className='bg-white text-black p-2 px-12 mx-2 text-xl  rounded-lg hover:bg-opacity-50'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle;