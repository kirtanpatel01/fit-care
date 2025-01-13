import React from 'react'
import { FormBlock, Container } from "../components";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1 className="text-7xl font-bold">Login</h1>
      <FormBlock>
        <input
          type="text"
          placeholder="Username / Email"
          className="input-outline"
        />
        <input
          type="password"
          placeholder="Password"
          className="input-outline"
        />
        <button className="primary-btn">
          Login
        </button>
        <div>
          Don't have account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-700 font-semibold text-lg"
          >
            Register
          </button>
        </div>
      </FormBlock>
    </Container>
  )
}

export default Login