import React from 'react'
import DashboardAppBar from '../websiteLandingPage/reusablesComponents/DashboardAppBar';
// import DashboardSideBar from '../websiteLandingPage/reusablesComponents/DashboardSideBar';

const DashBoard = () => {
    const userName = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="w-full">
     <DashboardAppBar/>
     {/* <DashboardSideBar/> */}
        
    </div>
  )
}

export default DashBoard