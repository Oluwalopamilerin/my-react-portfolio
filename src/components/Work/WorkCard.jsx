import React from 'react'

const WorkCard = (props) => {
  return (
    <div style={{ backgroundImage: `url(${props.backgroundImage})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

      {/* Hover Effects*/}
      <div className='opacity-0 group-hover:opacity-100'>
        <span className='text-2xl font-bold text-white tracking-wider'>
          ReactJS Application
        </span>

        <div className='pt-8 text-center'>
          <a href={props.demo} target='_blank'>
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 fonr-bold text-lg'>Demo</button>
          </a>

          <a href={props.code}>
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 fonr-bold text-lg'>Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
