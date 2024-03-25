import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
        </div>
        <div>
        </div>

        <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p className='mb-10'>Hi. I'm Oluwapamilerin, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p> I am a budding frontend developer with a strong passion for programming, self-driven learning, and an unyielding commitment to personal growth. I am driven by a passion for creating captivating user experiences and translating design concepts into seamless, interactive interfaces. With a foundation in HTML, CSS, and JavaScript, I am skilled at building responsive and visually appealing websites that engage users. I am currently focused on improving my  skills and expertise in front end development through personal projects and active learning.
</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About