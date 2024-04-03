import React from 'react';

import SkillCard from './SkillCard';
import SkillData from './SkillData';


const Skills = () => {
  return (
    <div name="skills" className='bg-[#0a192f] w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  text-gray-300'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4'>These are the technologies i've worked with</p>
        </div>
        {/* Icon container */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
        {SkillData?.map((val, index) => {
          return(
            <SkillCard
            key={index}
            imgsrc={val.imgsrc}
            alt={val.alt}
            name={val.name}
            />
          )
        })}
    </div>
        
      </div>

      

      

    </div>
  )
}

export default Skills