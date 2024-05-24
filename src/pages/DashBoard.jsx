import React from 'react'
import DashboardAppBar from '../websiteLandingPage/reusablesComponents/DashboardAppBar';
// import DashboardSideBar from '../websiteLandingPage/reusablesComponents/DashboardSideBar';

const DashBoard = () => {
    const userName = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="h-screen bg-orange-50">
     <DashboardAppBar/>
     {/* <DashboardSideBar/> */}
        
    </div>
  )
}

export default DashBoard