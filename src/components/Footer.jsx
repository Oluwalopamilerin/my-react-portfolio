import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from "react-icons/bs";



const Footer = () => {
  return (
    <div className="bg-[#0a192f] text-gray-100 h-fit w-full">
        <div >
          <ul className='flex justify-center items-center gap-2 pb-4'>
            <li className='bg-blue-600 py-3 rounded-[5px]'>
              <a href="https://www.linkedin.com/in/deborah--oyewole/" target='_blank'><FaLinkedin size={30}/></a>
            </li>

            <li className='bg-[#333333] py-3 rounded-[5px]'>
              <a href="https://www.linkedin.com/in/deborah--oyewole/" target='_blank'><FaGithub size={30}/></a>
            </li>

            <li className='bg-[#6fc2b0] py-3 rounded-[5px]'>
              <a href="https://www.linkedin.com/in/deborah--oyewole/" target='_blank'><HiOutlineMail size={30}/></a>
            </li>

            <li className='bg-[#565f69] py-3 rounded-[5px]'>
              <a href="https://www.linkedin.com/in/deborah--oyewole/" target='_blank'><BsFillPersonLinesFill size={30}/></a>
            </li>
          </ul>
   
          
          
          
          
        </div>
    </div>
  )
}

export default Footer