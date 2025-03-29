import React from 'react';

const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          
          <div>
            <h3 className='text-green-400 text-2xl font-semibold mb-4'>Let's Talk</h3>
            <p className='mb-6'>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 flex items-center'>
              <span className='text-green-400 mr-2'>📧</span>
              <a href='mailto:youremail@example.com' className='hover:underline'>youremail@example.com</a>
            </div>
            <div className='mb-4 flex items-center'>
              <span className='text-green-400 mr-2'>📞</span>
              <span>+9828839922</span>
            </div>
            <div className='mb-4 flex items-center'>
              <span className='text-green-400 mr-2'>📍</span>
              <span>Street, City, Province, Country</span>
            </div>
          </div>
          
          
          <div>
            <form className='bg-gray-900 p-8 rounded-lg shadow-lg'>
              <div className='mb-4'>
                <label className='block mb-2 text-gray-400'>Your Name</label>
                <input type='text' className='w-full p-3 bg-gray-800 rounded border border-gray-700 text-white' placeholder='Enter Your Name' />
              </div>
              <div className='mb-4'>
                <label className='block mb-2 text-gray-400'>Email</label>
                <input type='email' className='w-full p-3 bg-gray-800 rounded border border-gray-700 text-white' placeholder='Enter Your Email' />
              </div>
              <div className='mb-4'>
                <label className='block mb-2 text-gray-400'>Message</label>
                <textarea className='w-full p-3 bg-gray-800 rounded border border-gray-700 text-white' placeholder='Enter Your Message' rows='5'></textarea>
              </div>
              <button type='submit' className='w-full bg-green-400 text-black py-3 rounded font-bold hover:bg-green-500 transition'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;