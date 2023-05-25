import React from 'react'

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
        <div className='bg-slate-700 md:w-[500px] md:h-[500px] w-auto h-56'>
          <h1>wei cok</h1>
        </div>
      </div>
    </div>
  )
}

export default Main