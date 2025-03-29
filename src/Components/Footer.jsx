import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8 mt-12'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center'>
        
        <div className='text-center md:text-left mb-6 md:mb-0'>
          <h2 className='text-xl font-bold'>Yousaf</h2>
          <p className='text-gray-400'>Full-Stack Developer based in the USA, specializing in web and software development.</p>
          <p className='text-gray-500 mt-2'>&copy; 2024 Yousaf. All rights reserved.</p>
        </div>

        
        <div className='flex items-center bg-gray-900 p-2 rounded-lg'>
          <input 
            type='email' 
            placeholder='Your email' 
            className='bg-transparent border-none text-white px-4 py-2 focus:outline-none'
          />
          <button className='bg-green-400 text-black px-4 py-2 rounded hover:bg-green-500 transition'>Subscribe</button>
        </div>

    
        <div className='flex space-x-4 mt-4 md:mt-0'>
          <a href='#' className='text-gray-400 hover:text-white'>LinkedIn</a>
          <a href='#' className='text-gray-400 hover:text-white'>facebook</a>
          <a href='#' className='text-gray-400 hover:text-white'>Medium</a>
        </div>
      </div>

      
      <div className='text-center text-gray-500 text-sm mt-6'>
        <a href='#' className='hover:underline'>Privacy</a> | <a href='#' className='hover:underline'>Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
