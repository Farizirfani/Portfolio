import React from 'react'

import MainBanner2 from '../assets/banner-laptop.png'

const Main = () => {
  return (
    <div className='container h-screen'>
      <div className='flex md:flex-row flex-col-reverse md:justify-between justify-center items-center content-center py-7'>
        <div className='text-white'>
          <h1 className='text-4xl font-bold'>Hi I'm Fariz Irfani</h1>
          <h1 className='text-3xl font-semibold py-4'>Web & Mobile Developer</h1>
          <p className='py-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi <br /> recusandae! Veritatis quis adipisci quas?</p>
          <button className='bg-[#9213cd] text-lg px-4 py-2 rounded-full'>Hire me?</button>
        </div>
        <div className=''>
          <img className='' src={MainBanner2} alt={<a href="https://storyset.com/web">Web illustrations by Storyset</a>} />
        </div>
      </div>
    </div>
  )
}

export default Main