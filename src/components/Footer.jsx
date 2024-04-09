import React from 'react';
import Foooter from './Foooter';

import {FaGithub, FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from "react-icons/bs";




const Footer = () => {

  const data = [
    {
      logo: FaLinkedin,
      href: "https://www.linkedin.com/in/deborah--oyewole/",
      color: "bg-blue-600"
    },
    {
      logo: FaGithub,
      href: "https://github.com/Oluwalopamilerin",
      color: "bg-[#333333]"
    },
    {
      logo: HiOutlineMail,
      href: "mailto:pamilerinoyewole06@gmail.com",
      color: "bg-[#6fc2b0]"
    },
    {
      logo: BsFillPersonLinesFill,
      href: "tel: +2348130107130",
      color: "bg-[#565f69]"
    }
  ]
  
  return (
    <div className="bg-[#0a192f] text-gray-100 h-fit w-full lg:hidden ">
      <ul className='flex justify-center items-center gap-2 pb-4'>
      {data?.map((val, index) => {
        return(
          <Foooter
          key={index}
          Logo={val.logo}
          href={val.href}
          color={val.color}
          />
        )
      })}
      </ul>
    </div>
  )
}

export default Footer