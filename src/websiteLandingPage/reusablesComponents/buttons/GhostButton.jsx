import React from 'react'

const GhostButton = (props) => {
  return (
    <div>
        <button className='text-orange-400 text-center items-center font-semibold text-2xl btn' onClick={props.onClick}>
        {props.text}
        </button>
    </div>
  )
}

export default GhostButton;