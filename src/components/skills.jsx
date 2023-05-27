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

const Skills = () => {
  return (
    <div className='py-7'>
      <h1 className='text-3xl font-bold text-white text-center'>Skills and Experience</h1>
      <h2 className='text-xl font-semibold text-white text-center py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dolore.</h2>
      <div className='flex flex-wrap text-center justify-center gap-4 content-center items-center'>
        <div data-aos="fade-up" data-aos-delay="0">
          <Box image={html} title='HTML'/>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <Box  data-aos="fade-up" image={CSS} title='CSS'/>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <Box  data-aos="fade-up" image={js} title='JavaScript'/>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <Box  data-aos="fade-up" image={bootstrap} title='Bootstrap'/>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <Box image={nodejs} title='node.js'/>
        </div>
        <div data-aos="fade-up" data-aos-delay="800">
          <Box image={ReactImg} title='React'/>
        </div>
        <div data-aos="fade-up" data-aos-delay="1000">
          <Box image={VueImg} title='Vue'/>
        </div>
        <div data-aos="fade-up" data-aos-delay="1200">
          <Box image={Github} title='Github'/>
        </div>
      </div>
    </div>
  )
}

const Box = (props) => {
  return (
    <div className=' rounded-xl p-2'>
      <div className='w-[80px] m-1'>
        <img className='' src={props.image} alt="" />
      </div>
      <h1 className='text-lg text-white'>{props.title}</h1>
    </div>
  )
}

export default Skills