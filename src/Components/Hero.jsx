import React from 'react'
import HeroImage from '../assets/gentlmem.jpg'
function Hero() {
  return (
    <div className='bg-black text-white text-center py-16' id='home'> 
        <img src={HeroImage} alt="" className='mx-auto mb-8 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'></img>
        <h1 className='text-4xl font-bold'>I am {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500 '>Indunil Sanjeewa </span>
        ,Full Stack developer

        </h1>
        <p className='mt-4 text-lg text-gray-300'>
          I specialize in building modern and responsive web applications 
        </p>
        <div className='mt-8 space-x-4'>
          <button className='bg-gradient-to-r from-green-400 to to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full '>Contact with me</button>
          <button className=' bg-gradient-to-r from-green-400 to to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>
    </div>
  )
}

export default Hero