import React from 'react'
import call from '../../assets/premium.png'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className='pt-5'>
        <div className='bg-orange-400 md:mt-0-sm px-4 sm:w-min-screen mx-auto max-w-screen-xl lg:px-6'>
          <div className='flex flex-row justify-between'>           
            <div className='pl-16 text-2xl lg:text-6xl text-center md:text-left pt-16 font-serif justify-start flex flex-col gap-8'>
              Experience the joy of <br /> 
              cooking  with ease. <br /> 
              Sign up now to unlock <br /> 
              a world of culinary <br /> 
              delights at your fingertips
                <Link to="/signup">
                    <button type="button" className="flex justify-center ml-20 text-orange-400 bg-white rounded-lg w-52 lg:w-80 lg:h-14 text-center font-bold text-3xl items-center">
                        <span className="block lg:hidden">Sign Up</span>
                        <span className="hidden lg:block">JOIN US TODAY</span>
                    </button>
                </Link>

                {/*<Link to="/signup"> <button type="button" className="flex justify-center ml-20 text-orange-400 bg-white rounded-lg w-52 lg:w-80 lg:h-14 text-center font-bold text-3xl items-center">JOIN US TODAY </button></Link>*/}
            </div>
            <div className='flex pt-96 '>
              <img className='lg:w-[300px] w-[200px]' src={call} alt="" />
            </div>
          </div>
        </div>
      </div>
    
    )
}

export default CallToAction