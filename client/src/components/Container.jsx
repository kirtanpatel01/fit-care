import React from 'react'

function Container({ children }) {
  return (
    <div className='min-h-screen flex flex-col items-center gap-24 p-24'>{ children }</div>
  )
}

export default Container