import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  // const apiUrl = process.env.REGISTER_API_URL

  const API_URL = "https://royalgujarati.com/sheepdeal/public/api";
  const navigate = useNavigate();
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address: "",
    country: "",
    state: "",
    city: "",
    landmark: "",
    zipcode: "",
    phone: "",
  });

  const [formError, setFormError] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address: "",
    country: "",
    state: "",
    city: "",
    landmark: "",
    zipcode: "",
    phone: "",
  });

  // const sendWelcomeEmail = async () => {
  //   try {
  //     await axios.post(`${API_URL}/send-welcome-email`, {
  //       email: formData.email,
  //       first_name: formData.first_name,
  //     });
  //   } catch (error) {
  //     console.error("Error sending welcome email:", error);
  //   }
  // };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      streetAddress: "",
      companyName: "",
      country: "",
      state: "",
      city: "",
      zipcode: "",
      phone: "",
      landmark: "",
    });

    if (!formData.first_name) {
      setFormError((prevErrors) => ({
        ...prevErrors,
        first_name: "First name is required",
      }));
      return;
    }
    if (!formData.last_name) {
      setFormError((prevErrors) => ({
        ...prevErrors,
        last_name: "last name is required",
      }));
      return;
    }
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
        password: "Email is required",
      }));
      return;
    }
    if (!formData.address) {
      setFormError((prevErrors) => ({
        ...prevErrors,
        streetAddress: "Street address is required",
      }));
      return;
    }
    if (!formData.country) {
      setFormError((prevErrors) => ({
        ...prevErrors,
        country: "Country 1 is required",
      }));
      return;
    }
    if (!formData.state) {
      setFormError((prevErrors) => ({
        ...prevErrors,
        select2: "Select 2 is required",
      }));
      return;
    }
    if (!formData.city) {
      setFormError((prevErrors) => ({
        ...prevErrors,
        city: "City 3 is required",
      }));
      return;
    }
    if (!formData.landmark) {
      setFormError((prevErrors) => ({
        ...prevErrors,
        select4: "Select 4 is required",
      }));
      return;
    }
    if (!formData.zipcode) {
      setFormError((prevErrors) => ({
        ...prevErrors,
        zipcode: "Zipcode is required",
      }));
      return;
    }
    if (!formData.phone) {
      setFormError((prevErrors) => ({
        ...prevErrors,
        phone: "Mobile number is required",
      }));
      return;
    }

    axios.post(`${API_URL}/register`, formData)
  .then((response) => {
    console.log(response.data);
    navigate('/');
    setRegistrationStatus("success");
  })
  .catch((error) => {
    console.error(error);
    setRegistrationStatus("error");
  });
   
  setFormData({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    streetAddress: "",
    companyName: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    phone: "",
    landmark: "",
  });

  };

  return (
    <>
      <div className="col-lg-6 col-12">
        <div className="registration-information">
          <h2 className="uppercase border-b pb-2 border-solid font-bold mb-3">
            Sign Up
          </h2>
          <Form onSubmit={handleSubmit}>
            <div className="flex">
              <Form.Group
                controlId="first_name"
                className="w-[50%] mb-3 me-[10px]"
              >
                <Form.Label className="text-[18px]">First Name </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={(e) => {
                    handleChange(e);
                    setFormError((prevErrors) => ({
                      ...prevErrors,
                      first_name: "",
                    }));
                  }}
                  className="pt-2 pb-2 shadow-none"
                  isInvalid={!!formError.first_name}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.first_name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="last_name" className="w-[50%] mb-3">
                <Form.Label className="text-[18px]">Last Name </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={(e) => {
                    handleChange(e);
                    setFormError((prevErrors) => ({
                      ...prevErrors,
                      last_name: "",
                    }));
                  }}
                  className="pt-2 pb-2 shadow-none"
                  isInvalid={!!formError.last_name}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.last_name}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label className="text-[18px]">Email Address </Form.Label>
              <Form.Control
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={(e) => {
                  handleChange(e);
                  setFormError((prevErrors) => ({ ...prevErrors, email: "" }));
                }}
                className="pt-2 pb-2 shadow-none"
                isInvalid={!!formError.email}
              />
              <Form.Control.Feedback type="invalid">
                {formError.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="phone" className="mb-3">
              <Form.Label className="text-[18px]">Mobile Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Mobile phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  handleChange(e);
                  setFormError((prevErrors) => ({ ...prevErrors, phone: "" }));
                }}
                isInvalid={!!formError.phone}
                className="pt-2 pb-2 shadow-none"
              />
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label className="text-[18px]">Password </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={(e) => {
                  handleChange(e);
                  setFormError((prevErrors) => ({
                    ...prevErrors,
                    password: "",
                  }));
                }}
                className="pt-2 pb-2 shadow-none"
                isInvalid={!!formError.password}
              />
              <Form.Control.Feedback type="invalid">
                {formError.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="address" className="mb-3">
              <Form.Label className="text-[18px]">Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={(e) => {
                  handleChange(e);
                  setFormError((prevErrors) => ({
                    ...prevErrors,
                    address: "",
                  }));
                }}
                className="pt-2 pb-2 shadow-none"
                isInvalid={!!formError.address}
              />
              <Form.Control.Feedback type="invalid">
                {formError.address}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="flex">
              <div className="w-[50%] me-[10px]">
                <Form.Label className="text-[18px]">Country</Form.Label>
                <Form.Select
                  aria-label="Country Name"
                  className="shadow-none mb-3 pt-2 pb-2"
                  name="country"
                  value={formData.country}
                  onChange={(e) => {
                    handleChange(e);
                    setFormError((prevErrors) => ({
                      ...prevErrors,
                      country: "",
                    }));
                  }}
                  isInvalid={!!formError.country}
                >
                      <option value="" disabled selected> Country  </option>
                  <option> India</option>
                  <option value="1">Amerika</option>
                  <option value="2">Canada</option>
                  <Form.Control.Feedback type="invalid">
                    {formError.country}
                  </Form.Control.Feedback>
                </Form.Select>
              </div>
              <div className="w-[50%]">
                <Form.Label className="text-[18px]">State</Form.Label>
                <Form.Select
                  aria-label="State"
                  className="shadow-none mb-3 pt-2 pb-2"
                  name="state"
                  value={formData.state}
                  onChange={(e) => {
                    handleChange(e);
                    setFormError((prevErrors) => ({
                      ...prevErrors,
                      state: "",
                    }));
                  }}
                  isInvalid={!!formError.state}
                >
                   <option value="" disabled selected>State </option>
                  <option>Gujarat</option>
                  <option value="1">Bihar</option>
                  <option value="2">Goa</option>
                  <Form.Control.Feedback type="invalid">
                    {formError.state}
                  </Form.Control.Feedback>
                </Form.Select>
              </div>
            </div>
            <div className="flex">
              <div className="w-[50%] me-[10px]">
                <Form.Label className="text-[18px]">City</Form.Label>
                <Form.Select
                  aria-label="City"
                  className="shadow-none mb-3 pt-2 pb-2"
                  name="city"
                  value={formData.city}
                  onChange={(e) => {
                    handleChange(e);
                    setFormError((prevErrors) => ({ ...prevErrors, city: "" }));
                  }}
                  isInvalid={!!formError.city}
                >
                   <option value="" disabled selected>City</option>
                  <option>Surat</option>
                  <option value="1">Mumbai</option>
                  <option value="2">Div</option>
                  <Form.Control.Feedback type="invalid">
                    {formError.city}
                  </Form.Control.Feedback>
                </Form.Select>
              </div>
              <Form.Group controlId="zipcode" className="mb-3 w-[50%]">
                <Form.Label className="text-[18px]">Zipcode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={(e) => {
                    handleChange(e);
                    setFormError((prevErrors) => ({
                      ...prevErrors,
                      zipcode: "",
                    }));
                  }}
                  isInvalid={!!formError.zipcode}
                  className="pt-2 pb-2 shadow-none"
                />
                <Form.Control.Feedback type="invalid">
                  {formError.zipcode}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <Form.Group controlId="zipcode" className="mb-3">
              <Form.Label className="text-[18px]">Landmark</Form.Label>
              <Form.Control
                type="text"
                placeholder="Landmark"
                className="shadow-none mb-3 pt-2 pb-2"
                name="landmark"
                value={formData.landmark}
                onChange={(e) => {
                  handleChange(e);
                  setFormError((prevErrors) => ({
                    ...prevErrors,
                    landmark: "",
                  }));
                }}
                isInvalid={!!formError.landmark}
              />
              <Form.Control.Feedback type="invalid">
                {formError.landmark}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="hover:cursor-pointer mb-3">
              <div className="flex shadow-none">
                <Form.Check
                  type="checkbox"
                  className="mr-2 cursor-pointer border-0"
                />
                <Form.Label className="text-[16px] mb-0 ">
                  By Creating An Account , You Agree To The{" "}
                  <Link className="no-underline text-[#FF8E78]">
                    Term Of Service And Conditions,
                  </Link>{" "}
                  And{" "}
                  <Link className="no-underline text-[#FF8E78]">
                    {" "}
                    Privacy Policy
                  </Link>{" "}
                </Form.Label>
              </div>
            </div>
            <button
              type="submit"
              className="border p-2 w-[100%] bg-[#FF8E78] text-white uppercase hover:bg-[#ea6d54] mb-3"
            >
              Sign Up
            </button>
            {registrationStatus === "success" && (
        <div className="alert alert-danger">
      welcome 
      </div>
      )}
      {registrationStatus === "error" && (
        <div className="alert alert-danger">
          Registration failed. Please try again.
        </div>
      )}
          </Form>
        </div>
      </div>
    </>
  );
}

export default Register;
