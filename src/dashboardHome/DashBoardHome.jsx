import React from 'react'
import Account from './Account'
import BookMark from './BookMark'
import Create from './Create'
import Favorite from './Favorite'
import Profile from './Profile'

const DashBoardHome = () => {
  return (
    <>
        <Account/>
        <BookMark/>
        <Create/>
        <Favorite/>
        <Profile/>
    </>
  )
}

export default DashBoardHome