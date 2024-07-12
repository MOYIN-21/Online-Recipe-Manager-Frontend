import React, { useState } from 'react';
import FilledButton from './reusablesComponents/buttons/FilledButton';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/spice.png';

const NavBar = () => {
  const [activeButton, setActiveButton] = useState(0);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  // const [activeHeader, setActiveHeader] = useState(null);

  // const handleHeaderClick = (header) => {
  //   setActiveHeader(header);
  // };

  return (
      <nav class="bg-orange-400 fixed w-full z-20 top-0 start-0 border-b">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
             <img src={Logo} className="h-8" alt="recipe Logo"/>
             <span className="self-center text-2xl font-semibold whitespace-nowrap">RECIPE</span>
             </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"/>
              <Link to="/signup">
                <button type="button"
                        className="md:hidden block text-orange-400 bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-xl px-4 py-2 text-center">Sign
                  up
                </button>
              </Link>
            {/*<button type="button"*/}
            {/*        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get*/}
            {/*  started*/}
            {/*</button>*/}
            <button
                data-collapse-toggle="navbar-dropdown"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
                aria-controls="navbar-dropdown"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-dropdown">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                  <NavLink to="/home" onClick={closeMenu} className="block py-2 px-3 md:p-0 ">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/feature" onClick={closeMenu} className="block py-2 px-3 md:p-0">Features</NavLink>
                </li>
                <li>
                  <NavLink to="/action" onClick={closeMenu} className="block py-2 px-3 md:p-0 ">About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={closeMenu} className="block py-2 px-3 md:p-0 ">Contact
                  </NavLink>
                </li>
                <div>
                  <Link to="/login"><FilledButton text="Login" style={{
                    width: "120px",
                    height: "40px",
                    backgroundColor: "black"
                  }}/></Link>
                </div>
              </ul>
            </div>
          </div>
      </nav>
);
}

export default NavBar;



// //
//   <nav className="sticky top-0 bg-orange-400 z-50 shadow px-6">
//     // <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//     //
//     // <button
//         data-collapse-toggle="navbar-dropdown"
//         type="button"
//         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2"
  //         aria-controls="navbar-dropdown"
  //         aria-expanded={isMenuOpen}
  //         onClick={toggleMenu}
  //     >
  //       <span className="sr-only">Open main menu</span>
  //       <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
  //         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
  //       </svg>
  //     </button>
  //     <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-dropdown">
  //       <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
  //         <li>
  //           <NavLink to="/home" onClick={closeMenu} className="block py-2 px-3 md:p-0 ">Home</NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/feature" onClick={closeMenu} className="block py-2 px-3 md:p-0">Features</NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/action" onClick={closeMenu} className="block py-2 px-3 md:p-0 ">About Us
  //             </NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/contact" onClick={closeMenu} className="block py-2 px-3 md:p-0 ">Contact
  //             </NavLink>
  //         </li>
  //         <div>
  //         <Link to="/login"><FilledButton text="Login" style={{ width: "120px", height: "40px", backgroundColor: "black"}} /></Link>
  //       </div>
  //         <div className={`block sm:hidden flex justify-center mt-4`}>
  //           <Link to="/signup"> <button type="button" className="flex justify-center text-orange-400 bg-white rounded-lg w-32 h-10 text-center font-bold text-xl items-center">Sign up </button></Link>
  //         </div>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
    // <div className=' h-10 px-48 pt-4 '>
    //   <div className='flex justify-between shadow'>
    //     <div className='w-14'><img src={Logo} alt="" /></div>
    //     <div className='flex justify-center gap-5 px-2  h-9 items-center outline outline-offset-2 outline-1 rounded-lg outline-orange-500'>
    //       <Link to="/home"><div style={{ color: activeHeader === "Home" ? "orange" : "inherit" }} onClick={() => handleHeaderClick("Home")}>Home</div>
    //       </Link>
    //       <Link to="/feature">
    //         <div style={{ color: activeHeader === "Features" ? "orange" : "inherit" }} onClick={() => handleHeaderClick("Features")}>Features</div>
    //       </Link>
    //       <Link to="/action">
    //         <div style={{ color: activeHeader === "About Us" ? "orange" : "inherit" }} onClick={() => handleHeaderClick("About Us")}>About Us</div>
    //       </Link>
    //       <Link to="/contact">
    //         <div style={{ color: activeHeader === "Contact" ? "orange" : "inherit" }} onClick={() => handleHeaderClick("Contact")}>Contact</div>
    //       </Link>
    //     </div>
        // <div>
        //   <Link to="/login"><FilledButton text="Login" style={{ width: "120px", height: "40px" }} /></Link>
        // </div>
    //   </div>
    // </div>

