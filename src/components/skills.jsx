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
        <Box image ={html} title='HTML'/>
        <Box image ={CSS} title='CSS'/>
        <Box image ={js} title='JavaScript'/>
        <Box image ={bootstrap} title='Bootstrap'/>
        <Box image ={nodejs} title='node.js'/>
        <Box image ={ReactImg} title='React'/>
        <Box image ={VueImg} title='Vue'/>
        <Box image ={Github} title='Github'/>
        <Box />
        <Box />
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