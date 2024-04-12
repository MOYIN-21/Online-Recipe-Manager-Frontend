import React from 'react'

const FilledButton = (props) => {
  return (
    <div>
        <button className ='bg-orange-500 text-white font-bold text-center items-center rounded-lg
                            btn' style={props.style}>
            {props.text}
        </button>
    </div>
  )
}

export default FilledButton