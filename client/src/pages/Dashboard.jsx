import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/collect-info')} className='primary-btn'>Collect information</button>
    </div>
  )
}

export default Dashboard