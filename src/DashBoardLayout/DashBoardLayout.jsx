import React from 'react'
import DashboardAppBar from '../websiteLandingPage/reusablesComponents/DashboardAppBar'
import { Outlet } from 'react-router-dom'

const DashBoardLayout = () => {
  return (
    <>
    <DashboardAppBar/>
    <Outlet/>
    </>
  )
}

export default DashBoardLayout