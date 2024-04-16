import React, { useState } from 'react';
import FilledButton from './reusablesComponents/buttons/FilledButton';
import { Link } from 'react-router-dom';
import Logo from '../assets/spice.png';

const NavBar = () => {
  // State to track the active header
  const [activeHeader, setActiveHeader] = useState(null);

  // Function to handle header click
  const handleHeaderClick = (header) => {
    setActiveHeader(header);
  };

  return (
    <div className=' h-10'>
      <div className='flex justify-between'>
        <div className='w-16'><img src={Logo} alt="" /></div>
        <div className='flex justify-center gap-5 px-2  h-9 items-center outline outline-offset-2 outline-1 rounded-lg outline-orange-500'>
          <Link to="/home"><div style={{ color: activeHeader === "Home" ? "orange" : "inherit" }} onClick={() => handleHeaderClick("Home")}>Home</div>
          </Link>
          <Link to="/feature">
            <div style={{ color: activeHeader === "Features" ? "orange" : "inherit" }} onClick={() => handleHeaderClick("Features")}>Features</div>
          </Link>
          <Link to="/action">
            <div style={{ color: activeHeader === "About Us" ? "orange" : "inherit" }} onClick={() => handleHeaderClick("About Us")}>About Us</div>
          </Link>
          <Link to="/contact">
            <div style={{ color: activeHeader === "Contact" ? "orange" : "inherit" }} onClick={() => handleHeaderClick("Contact")}>Contact</div>
          </Link>
        </div>
        <div>
          <Link to="/login"><FilledButton text="Login" style={{ width: "120px", height: "40px" }} /></Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
