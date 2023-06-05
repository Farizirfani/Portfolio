import React from 'react'

import IconWeb from '../assets/icon-web.png'

const Wcid = () => {
  return (
    <div className='flex md:justify-around justify-center flex-wrap items-center py-24 lg:h-screen h-auto'>
        <div className='text-white md:py-2 py-10'>
            <h1 className='text-3xl font-semibold'>What can i do?</h1>
            <h2 className='text-xl md:w-[500px] w-auto py-2'>Build and maintain website Frontend Dev  & Mobile Dev, maybe we can work together <br /> to make something?</h2>
            <h2 className='text-xl md:w-[500px] w-auto'>My Motto is Lorem ipsum dolor sit amet. </h2>
        </div>
        <div  data-aos="fade-up" data-aos-delay="300" className='rounded-md w-[250px] p-1 h-[250px] bg-slate-700 my-2 text-center  content-center items-center flex flex-col justify-center'>
          <div className='rounded-full bg-white w-[75px] p-3 img-wcid'>
              <img src={IconWeb} alt="" />
          </div>
          <h1 className='text-white text-xl font-bold py-1'>Web Development</h1>
          <h2 className='text-white text-lg font-light'>develop frontend and backend websites by integrating with database</h2>
        </div>
        <div  data-aos="fade-up" data-aos-delay="400" className='rounded-md w-[250px] p-1 h-[250px] bg-slate-700 my-2 text-center  content-center items-center flex flex-col justify-center'>
          <div className='rounded-full bg-white w-[75px] p-3 img-wcid'>
            <i className="text-4xl text-zinc-800 fa-solid fa-mobile"></i>
          </div>
            <h1 className='text-white text-xl font-bold py-1'>Mobile Development</h1>
            <h2 className='text-white text-lg font-light'>develop ui mobile app by integrating with Rest Api database</h2>
          </div>
    </div>
  )
}

export default Wcid