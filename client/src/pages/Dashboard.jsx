import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-96'>
      
      <button onClick={() => navigate('/collect-info')} className='primary-btn'>Collect information</button>
      <span>mne nhi khbr lya sache kav</span>
      <span>mne nhi khbr lya sache kav</span>
      <span>mne nhi khbr lya sache kav</span>
    </div>
  )
}

export default Dashboard