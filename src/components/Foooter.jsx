import React from 'react'

const Foooter = ({color, href, Logo}) => {
  return (
    <div>
      <li className={`${color} py-3 rounded-[5px] hover:scale-110 hover:duration-500`}>
              <a href={href} target='_blank'><Logo size={30}/></a>
      </li>
    </div>
  )
}

export default Foooter