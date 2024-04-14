import React from 'react'
import FilledButton from './reusablesComponents/buttons/FilledButton';
import { Link } from 'react-router-dom';
import Logo from '../assets/spice.png'


const NavBar = () => {
  return (
    <div className=' h-10'>
      <div className='flex justify-between'>
          <div className='w-16'><img src={Logo} alt="" /></div>
              <div className='flex justify-center gap-5 px-2  h-9 items-center outline outline-offset-2 outline-1 rounded-lg outline-orange-500'>
                <Link to="/home"><div>Home </div>  </Link>
                <Link to="/feature"><div>Features</div></Link>
                <Link to="/action"><div>About Us</div> </Link>
                <Link to="/contact"><div>Contact</div> </Link>
              </div>
          <div>
            <Link to="/login"><FilledButton text="Login" style={{width: "120px" ,height: "40px"}}/></Link>
          </div>  
      </div>
    </div>
  );
}

export default NavBar;