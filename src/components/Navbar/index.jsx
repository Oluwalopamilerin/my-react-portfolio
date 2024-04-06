import React, {useState} from 'react';

import SocialsData from './SocialsData';
import Socials from './Socials';
import { Link } from 'react-scroll';
import {FaBars, FaTimes} from "react-icons/fa";



const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleClick = () => {
    setMobileMenu(!mobileMenu)
  }

  return (

      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
          {/* <img src={logo} alt="logo" style={{width:"50px"}}/> */}
          <p style={{fontFamily: "fantasy"}} className='text-3xl font-bold text-pink-600'>
            <Link
                to="home" 
                smooth={true}  
                duration={500} >
                Oluwapamilerin
            </Link></p>
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
        {SocialsData?.map((val, index) => {
          return(
            <Socials
            key={index}
            Logo= {val.logo}
            href= {val.href}
            name= {val.name}
            color={val.color}
            />
          )
        })}
        </div>
    </div>
    
   
  )
}

export default Navbar