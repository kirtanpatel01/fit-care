import React, { useState } from "react";
import { FormBlock, Container } from "../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CgArrowsExchange } from "react-icons/cg";
import api from "../utils/axios";

const serverUri = import.meta.env.VITE_REACT_SERVER_URL;

function Login() {
  const navigate = useNavigate();
  const inputs = [
    { type: "text", placeholder: "Username", name: "username" },
    { type: "email", placeholder: "Email", name: "email" },
    { type: "number", placeholder: "Phone Number", name: "phone" },
  ];
  const [selectedInput, setSelectedInput] = useState(0);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isPending, setIsPending] = useState(null);

  const [ formData, setFormData ] = useState({
    [inputs[selectedInput].name]: '',
    password: ''
  })

  const handleInputSelection = () => {
    setSelectedInput((prev) => (prev + 1) % inputs.length);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    setIsPending(true);

    try {
      const res = await api.post('/users/login', formData);
      if(res.status === 200) {
        navigate('/')
      }
      setSuccess('User logged in successfully!')
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data.message);
        setError(error.response.data.message || "Something went wrong!");
      } else if (error.request) {
        console.error("No response from the server:", error.request);
        setError("No response from the server!");
      } else {
        console.error("Error:", error.message);
        setError("Something went wrong!");
      }
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Container>
      <h1 className="text-7xl font-bold">Login</h1>
      <FormBlock className="w-full max-w-lg md:max-w-xl">
        <div className="w-full flex flex-col items-center gap-2">
          <div className="w-full max-w-60 min-[320px]:max-w-lg flex justify-between items-center min-[320px]:px-2">
            <label>{inputs[selectedInput].placeholder}</label>
            <button
              className="flex items-center gap-1 p-2 border border-borderLight rounded-md"
              onClick={handleInputSelection}  
            >
              <CgArrowsExchange />
              <span className="hidden min-[320px]:flex">
                {inputs[(selectedInput + 1) % inputs.length].placeholder}
              </span>
            </button>
          </div>
          <input
            type={inputs[selectedInput].type}
            placeholder={inputs[selectedInput].placeholder}
            name={inputs[selectedInput].name}
            onChange={e => handleChange(e)}
            className="input-outline"
          />
        </div>
        <input
          type="password"
          placeholder="Password"
          className="input-outline"
          name='password'
          onChange={e => handleChange(e)}
        />
        <button onClick={e => handleSubmit(e)} className="primary-btn">
          {isPending ? '...' : 'Login'}
        </button>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <div className="flex flex-col md:flex-row gap-2">
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
  );
}

export default Login;
