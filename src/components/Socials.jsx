import React from 'react'

const Socials = ({Logo, href, name, color}) => {
  return (
    <div>
      <ul>
        <li className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 text- ${color}`}>
          <a className='flex justify-between items-center w-full text-gray-300' 
          href= {href} target='_blank'>{name}  <Logo size={30}/></a>
        </li>
     </ul>
    </div>
  )
}

export default Socials