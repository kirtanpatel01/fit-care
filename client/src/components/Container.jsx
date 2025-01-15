import React from 'react'

function Container({ children }) {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center gap-8  p-4'>{ children }</div>
  )
}

export default Container