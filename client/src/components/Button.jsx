import React from 'react'

function Button({ text, onClick, className='' }, props) {
  return (
    <button
    className={`px-4 py-2 rounded-md text-white ${className}`}
    onClick={onClick}
    {...props}
    >{text}</button>
  )
}

export default Button