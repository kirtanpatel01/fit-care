import React from 'react'
import { FormBlock, Container } from "../components";
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1 className="text-7xl font-bold">Register</h1>
      <FormBlock>
        <input type="text" placeholder="Username" className="input-outline" />
        <input type="text" placeholder="Email" className="input-outline" />
        <input
          type="password"
          placeholder="Password"
          className="input-outline"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input-outline"
        />
        <button 
        className="primary-btn">Register</button>

        <div className="flex gap-1 items-center">
          <span>Already have account ?</span>
          <button
          onClick={() => navigate('/login')}
          className="text-blue-700 font-semibold text-lg">Login</button>
        </div>
      </FormBlock>
    </Container>
  )
}

export default Register