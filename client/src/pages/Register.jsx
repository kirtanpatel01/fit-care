import React, { useState } from "react";
import { FormBlock, Container, VRLine } from "../components";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.svg";
import axios from "axios";
import api from "../utils/axios";

const serverUri = import.meta.env.VITE_REACT_SERVER_URL;

function Register() {
  const inputs = [
    { type: "text", placeholder: "Full Name", name: "fullName" },
    { type: "text", placeholder: "Username", name: "username" },
    { type: "email", placeholder: "Email", name: "email" },
    { type: "number", placeholder: "Phone Number", name: "phone" },
    { type: "password", placeholder: "Passowrd", name: "password" },
    {
      type: "password",
      placeholder: "Confirm Password",
      name: "confirmPassword",
    },
  ];
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [preview, setPreview] = useState(null);
  
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      const file = files[0];
      setFormData({ ...formData, profileImage: file });

      if (file) {
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setFormData({ ...formData, profileImage: null });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("fullName", formData.fullName);
    form.append("username", formData.username);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("password", formData.password);
    form.append("confirmPassword", formData.confirmPassword);

    if (formData.profileImage) {
      form.append("profileImage", formData.profileImage);
    }
    setSuccess(null)
    setError(null);
    setIsPending(true);
    try {
      const res = await api.post(`/users/register`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if(res.status === 200) {
        navigate('/')
      }
      setSuccess("Registration successful!");
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
  };


  return (
    <Container>
      <h1 className="text-5xl md:text-7xl font-bold">Register</h1>
      <FormBlock
        className="w-full max-w-xl md:max-w-6xl"
      >
        <div className="w-full max-w-md md:max-w-full grid md:grid-cols-[1fr_auto_1fr] items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <img
              src={preview || profile}
              alt="profile_image_preview"
              className="h-52 w-52 rounded-full"
            />
            <div className="flex gap-4">
              <div className="relative cursor-pointer">
                <input
                  type="file"
                  className="absolute inset-0 opacity-0"
                  name="profileImage"
                  onChange={(e) => handleChange(e)}
                />
                <button
                  type="button"
                  className="bg-blue-500 px-4 py-2 rounded-md"
                >
                  {preview ? 'Edit Image' : 'Choose Image'}
                </button>
              </div>

              <button
                onClick={handleRemoveImage}
                className={`px-4 py-2 rounded-md ${preview ? 'bg-red-600' : 'bg-slate-300 cursor-not-allowed'}`}
              >
                Remove Image
              </button>
            </div>
          </div>
          <div className="h-[1px] md:h-full w-full md:w-[1px] bg-black"></div>
          <ul className="flex flex-col gap-8">
            {inputs.map((input) => (
              <input
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                className="input-outline"
                value={formData[input.name]}
                onChange={handleChange}
                key={input.name}
              />
            ))}
          </ul>
        </div>

        <button
          onClick={(e) => handleFormSubmit(e)}
          className="primary-btn"
          disabled={isPending}
        >
          {isPending ? "Registering..." : "Register"}
        </button>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <div className="flex flex-col md:flex gap-1 items-center">
          <span>Already have account ?</span>
          <button
            onClick={() => navigate("/login")}
            className="text-blue-700 font-semibold text-lg"
          >
            Login
          </button>
        </div>
      </FormBlock>
    </Container>
  );
}

export default Register;
