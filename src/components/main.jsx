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
            fontSize: '1.8em',
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
          <p className='py-4 lg:text-xl text-md'>Fresh Graduate at SMKN 2 Jakarta majoring in software engineering<br />let's change the world with small actions</p>
          <a href="mailto:farizirfani29@gmail.com?subject=Tanya%Jasa&body=Saya%20Tertarik%20dengan%20Anda" className='bg-[#9213cd] text-lg px-4 py-2 rounded-full'>Hire me?</a>
        </div>
        <div className='floating'>
          <img className='' src={MainBanner2} alt={<a href="https://storyset.com/web">Web illustrations by Storyset</a>} />
        </div>
      </div>
    </div>
  )
}

export default Main