import React from 'react';

import WorkCard from './WorkCard';
import WorkData from "./WorkData";

const Work = () => {
  return (
    <div name="work" className='bg-[#0a192f] w-full h-screen text-gray-300'>

    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
        <p className='py-6'>Check out some of my recent works</p>
      </div>

      {/* Container */}
      <div
       className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {WorkData.map((val, index)=>{
          return(
            <WorkCard
            key={index}
            backgroundImage = {val.backgroundImage}
            demo ={val.demo}
            code= {val.code}/>
          )
        })}
      </div>
    </div>

  </div>
  )
}

export default Work