import React from 'react'
import spice from '../assets/spice.png'
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
  <div className='bg-orange-50 h-screen'>
    <div className='flex justify-center items-center pt-40' >
      <div class="flex flex-col w-full max-w-sm bg-white border border-white rounded-lg shadow">

          <div class="flex flex-col items-center px-4 pt-4 pb-10">
              <img class="w-18 h-24 mb-3 rounded-full shadow-lg bg-orange-100" src={spice}  alt="User"/>
              <h5 class="mb-1 text-xl font-medium dark:text-black">Bonnie Green</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">I love Food</span>
              <div class="flex mt-4 md:mt-6">
                  <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg focus:ring-4 dark:bg-orange-400 dark:hover:bg-orange-400 dark:focus:ring-orange-400">Delete</a>
                    <Link to="/dashboard/setting" class="py-2 px-4 ms-2 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border focus:z-10 focus:ring-1 focus:ring-orange-400 dark:text-black dark:hover:text-black dark:hover:bg-orange-400 shadow">Edit profile</Link>
              </div>
          </div>
      </div>
    </div>
  </div>

  )
}

export default Profile