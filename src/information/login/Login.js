import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const API_URL = "https://royalgujarati.com/sheepdeal/public/api";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError({
      email: "",
      password: "",
    });

    if (!formData.email) {
      setFormError((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      return;
    }
    if (!formData.password) {
      setFormError((prevErrors) => ({
        ...prevErrors,
        password: "password is required",
      }));
      return;
    }
    
    console.log("Form submitted:", formData);

    axios.post(`${API_URL}/login`, formData)
    .then((response) => {
      console.log(response.data);
      const token = response.data.token;
      localStorage.setItem('token', token);
    })
    .catch((error) => {
      console.error(error);
    });

    setFormData({
      email: "",
      password: "",
    });

  };
  return (
    <>
      <div className="col-lg-6 col-12">
        <div className="login-information">
          <h2 className="uppercase border-b pb-2 border-solid  font-bold mb-3">
            Sign in
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label className="text-[18px]">
                Username & Email {" "}
              </Form.Label>
              <Form.Control
                className="border-0 shadow-none"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={(e) => {
                    handleChange(e);
                    setFormError((prevErrors) => ({ ...prevErrors, email: '' }));
                  }}
                isInvalid={!!formError.email}
              />
                 <Form.Control.Feedback type="invalid">{formError.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label className="text-[18px]">
                Password 
              </Form.Label>
              <Form.Control
                 className="border-0 shadow-none"
                 type="password"
                 placeholder="Password"
                 name="password"
                 value={formData.password}
                 onChange={(e) => {
                     handleChange(e);
                     setFormError((prevErrors) => ({ ...prevErrors, password: '' }));
                   }}
                 isInvalid={!!formError.password}
              />
              <Form.Control.Feedback type="invalid">{formError.password}</Form.Control.Feedback>
            </Form.Group>
            <div className="hover:cursor-pointer mb-3">
              <div className="flex items-center shadow-none">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  className="mr-2 cursor-pointer border-0"
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Link className="text-[#FF8E78] text-[18px] font-[500] mb-0">
                Forgot Password ?
              </Link>
              <button className="bg-[#FF8E78] text-white pt-[5px] pb-[5px] ps-[10px] pe-[20px] uppercase hover:bg-[#ea6d54]" type="submit">
                Sign In
              </button>
            </div>
          </Form>
          <div className="text-center mt-[50px] mb-[50px] relative before:absolute before:content-[''] before:bg-[#BEBEBE] before:w-[46%] before:h-[1px] before:top-3 before:left-0 after:absolute after:content-[''] after:bg-[#BEBEBE] after:w-[46%] after:h-[1px] after:top-3 after:right-0">
            or
          </div>
          <div className="google-login mb-4">
            <Link className="text-black">
            <button className="btn border w-[100%] pt-[6px] pb-[6px] text-[18px] font-[500] flex items-center justify-center">
              <FcGoogle className="d-inline text-[26px] me-3 text-black" />
              Sign In with Google
            </button>
            </Link>
          </div>
          <div className="facebook-login mb-4">
            <Link className="text-black">
            <button className="btn border w-[100%] pt-[6px] pb-[6px] text-[18px] font-[500] flex items-center justify-center">
              <FaFacebook className="d-inline text-[26px] me-3 text-[#4267B2]" />
              Sign In with Facebook
            </button>
            </Link>
          </div>
          <div className="home-back">
            <Link className="text-black">
            <button className="btn border-0 w-[100%] pt-[6px] pb-[6px] text-[18px] flex items-center justify-center ">
              Go To Back Home
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
