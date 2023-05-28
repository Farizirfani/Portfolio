import React from 'react'

// image
import html from '../assets/html.svg'
import CSS from '../assets/css.svg'
import js from '../assets/js.svg'
import bootstrap from '../assets/bootstrap.svg'
import nodejs from '../assets/node-js.svg'
import ReactImg from '../assets/react.svg'
import VueImg from '../assets/vue.svg'
import Github from '../assets/github.svg'
import php from '../assets/php.svg'
import laravel from '../assets/laravel.svg'
import flutter from '../assets/flutter.svg'

const Skills = () => {
  return (
    <div className='py-7'>
      <h1 className='text-3xl font-bold text-white text-center'>Skills and Experience</h1>
      <h2 className='text-xl font-semibold text-white text-center py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dolore.</h2>
      <div className='flex flex-wrap text-center justify-center gap-4 content-center items-center py-7'>
        <div className='' data-aos="fade-up" data-aos-delay="0">
          <Box image={html}/>
          <h1 className='text-lg text-white'>HTML</h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <Box  data-aos="fade-up" image={CSS}/>
          <h1 className='text-lg text-white'>CSS</h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <Box  data-aos="fade-up" image={js}/>
          <h1 className='text-lg text-white'>JavaScript</h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <Box  data-aos="fade-up" image={bootstrap}/>
          <h1 className='text-lg text-white'>Bootstrap</h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="500">
          <Box image={nodejs}/>
          <h1 className='text-lg text-white'>node.js</h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <Box image={ReactImg}/>
          <h1 className='text-lg text-white'>React</h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="700">
          <Box image={VueImg}/>
          <h1 className='text-lg text-white'>Vue</h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="800">
          <Box className='bg-white rounded-full' image={Github}/>
          <h1 className='text-lg text-white'>Github</h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="900">
          <Box image={flutter}/>
          <h1 className='text-lg text-white'>Flutter</h1>
        </div>
        <div className='p-3' data-aos="fade-up" data-aos-delay="1000">
          <Box data-aos="fade-up" image={php}/>
          <h1 className='text-lg text-white'>PHP</h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="1100">
          <Box image={laravel}/>
          <h1 className='text-lg text-white'>Laravel</h1>
        </div>
      </div>
    </div>
  )
}

const Box = (props) => {
  return (
    <div className=' rounded-xl p-2'>
      <div className='w-[80px] m-1'>
        <img src={props.image} alt="" />
      </div>
      {/* <h1 className='text-lg text-white'>{props.title}</h1> */}
    </div>
  )
}

export default Skills