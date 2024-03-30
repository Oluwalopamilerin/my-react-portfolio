import React, {useState} from 'react';
import { Link } from 'react-scroll';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from "react-icons/bs";
import logo from "../assets/logo1.png"

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleClick = () => {
    setMobileMenu(!mobileMenu)
  }

  return (

      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
          {/* <img src={logo} alt="logo" style={{width:"50px"}}/> */}
          <p style={{fontFamily: "fantasy"}} className='text-3xl font-bold text-pink-600'>Oluwapamilerin</p>
        </div>
        {/* Menu */}
       
          <ul className='hidden md:flex '>
            <li className='hover:scale-125 duration-300'> 
              <Link 
              className="hover:scale-125 hover:border-b-2 hover:border-pink-600 duration-300"
                to="home" 
                smooth={true}  
                duration={500} >
                Home
              </Link>
            </li>
            <li className='hover:scale-125 duration-300'><Link 
                className="hover:border-b-2 hover:border-pink-600 duration-300"
                to="about" 
                smooth={true}  
                duration={500} >
                About
              </Link></li>

            <li className='hover:scale-125 duration-300'>
              <Link 
                className="hover:border-b-2 hover:border-pink-600 duration-300"
                to="skills" 
                smooth={true}  
                duration={500} >
                Skills
              </Link></li>

            <li className='hover:scale-125 duration-300'>
              <Link 
                className="hover:border-b-2 hover:border-pink-600 duration-300"
                to="work" 
                smooth={true}  
                duration={500} >
                Work
              </Link></li>

            <li className='hover:scale-125 duration-300'>
              <Link 
                className="hover:border-b-2 hover:border-pink-600 duration-300"
                to="contact" 
                smooth={true}  
                duration={500} >
                Contact
              </Link></li>
          </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!mobileMenu?<FaBars />:<FaTimes/>}
        </div>

        {/* Mobile menu */}
        <ul className={!mobileMenu?"hidden": ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
            <li className='py-6 text-4xl hover:scale-110 duration-300'>
              <Link 
              onClick={handleClick}
                to="home" 
                smooth={true}  
                duration={500} >
                Home
              </Link></li>
            <li className='py-6 text-4xl hover:scale-110 duration-300'>
              <Link 
               onClick={handleClick}
                to="about" 
                smooth={true}  
                duration={500} >
                About
              </Link></li>
            <li className='py-6 text-4xl hover:scale-110 duration-300'>
              <Link 
               onClick={handleClick}
                to="skills" 
                smooth={true}  
                duration={500} >
                Skills
              </Link></li>
            <li className='py-6 text-4xl hover:scale-110 duration-300'>
              <Link 
               onClick={handleClick}
                to="work" 
                smooth={true}  
                duration={500} >
                Work
              </Link></li>
            <li className='py-6 text-4xl hover:scale-110 duration-300'>
              <Link 
               onClick={handleClick}
                to="contact" 
                smooth={true}  
                duration={500} >
                Contact
              </Link></li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex flex-col fixed top-[35%] left-0 ' > 
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/'>LinkedIn <FaLinkedin size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/'>Github <FaGithub size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/'>Email <HiOutlineMail size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/'>LinkedIn <BsFillPersonLinesFill size={30}/></a>
          </li>
        </ul>
        </div>
    </div>
    
   
  )
}

export default Navbar