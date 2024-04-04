import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-[#0a192f] w-full min-h-screen flex justify-center items-center p-4'>
      <form method='post' action="https://getform.io/f/paqgolla" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4 '>Submit the form or shoot me an email - mygmail.com</p>
        </div>

        <input type="text" placeholder='Name' name="name" className='bg-[#ccd6f6] p-2'  />
        <input type="email" placeholder='Email' name="email" className='my-4 p-2 bg-[#ccd6f6]'  />
        <textarea name="message" rows="10" className='bg-[#ccd6f6] p-2' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
      </form>

    </div>
  )
}

export default Contact