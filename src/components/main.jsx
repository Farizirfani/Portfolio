import React from 'react'

import TypeWriterEffect from 'react-typewriter-effect'


import MainBanner2 from '../assets/banner-laptop.png'

const Main = () => {
  return (
    <div className='container md:h-screen h-auto'>
      <div className='flex md:flex-row flex-col-reverse md:justify-between justify-center items-center content-center py-7'>
        <div className='text-white'>
          <h1 className='text-4xl font-bold'>Hi I'm Fariz Irfani</h1>
          <div>
          <TypeWriterEffect
          textStyle={{
            fontFamily: 'Poppins',
            color: '#fff',
            fontWeight: 600,
            fontSize: '2em',
          }}
          startDelay={2000}
          cursorColor="#fff"
          multiText={[
            'Web Developer',
            'Mobile Developer',
            'Software Developer',
          ]}
          multiTextDelay={700}
          typeSpeed={110}
          multiTextLoop={true}
          />
          </div>
          <p className='py-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi <br /> recusandae! Veritatis quis adipisci quas?</p>
          <button className='bg-[#9213cd] text-lg px-4 py-2 rounded-full'>Hire me?</button>
        </div>
        <div className='floating'>
          <img className='' src={MainBanner2} alt={<a href="https://storyset.com/web">Web illustrations by Storyset</a>} />
        </div>
      </div>
    </div>
  )
}

export default Main