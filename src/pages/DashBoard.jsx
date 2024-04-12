import React from 'react'

const DashBoard = () => {
    const userName = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="text-center text-7xl text-orange-400">
        <p>Welcome - {userName.name}</p>
    </div>
  )
}

export default DashBoard