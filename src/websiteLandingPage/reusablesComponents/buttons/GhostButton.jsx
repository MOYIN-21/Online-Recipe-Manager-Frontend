import React from 'react'

const GhostButton = (props) => {
  return (
    <div>
        <button className='text-blue-400 text-center items-center  btn' onClick={props.onClick}>
        {props.text}
        </button>
    </div>
  )
}

export default GhostButton;