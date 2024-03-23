import React, {useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa"
import logo from "../assets/logo1.png"

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleHamburgerClick = () => {
    setMobileMenu(!mobileMenu)
  }
  return (

      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
          <img src={logo} alt="logo" style={{width:"50px"}}/>
        </div>
        {/* Menu */}
       
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        

        {/* Hamburger */}
        <div onClick={handleHamburgerClick} className='md:hidden z-10'>
          {!mobileMenu?<FaBars />:<FaTimes/>}
        </div>

        {/* Mobile menu */}
        <ul className={!mobileMenu?"hidden": ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social icons */}
        <div className='flex flex-col fixed top-[35%] left-0'> 
        <ul>
          <li>
            <a href='/'>LinkedIn</a>
          </li>
        </ul>
        </div>
    </div>
    
   
  )
}

export default Navbar