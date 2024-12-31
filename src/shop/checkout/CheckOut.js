import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function CheckOut() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_Name: "",
    email: "",
    email1: "",
    streataddress: "",
    companyName: "",
    country: "",
    state: "",
    city: "",
    cityarea: "",
    zipcode: "",
    number: "",
  });

  const [formError, setFormError] = useState({
    first_name: "",
    last_Name: "",
    email: "",
    email1: "",
    streataddress: "",
    companyName: "",
    country: "",
    state: "",
    city: "",
    cityarea: "",
    zipcode: "",
    number: "",
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

    if (!formData.first_name) {
      setFormError((prevErrors) => ({ ...prevErrors,first_Name: "FirstName is required",}));
    }
    if (!formData.last_Name) {
      setFormError((prevErrors) => ({ ...prevErrors,first_Name: "LastName is required",}));
    }
    if (!formData.email) {
      setFormError((prevErrors) => ({ ...prevErrors,first_Name: "email is required",}));
    }
    if (!formData.email1) {
      setFormError((prevErrors) => ({ ...prevErrors,first_Name: "email is required",}));
    }
    if (!formData.streataddress) {
      setFormError((prevErrors) => ({ ...prevErrors,first_Name: "streatAddress is required",}));
    }
    if (!formData.companyName) {
      setFormError((prevErrors) => ({ ...prevErrors,first_Name: "company is required",}));
    }
    if (!formData.country) {
      setFormError((prevErrors) => ({ ...prevErrors,first_Name: "country is required",}));
    }
    if (!formData.state) {
      setFormError((prevErrors) => ({ ...prevErrors,first_Name: "state is required",}));
    }
    if (!formData.city) {
      setFormError((prevErrors) => ({ ...prevErrors,first_Name: "city is required",}));
    }
    if (!formData.cityarea) {
      setFormError((prevErrors) => ({ ...prevErrors,first_Name: "cityArea is required",}));
    }
    if (!formData.zipcode) {
      setFormError((prevErrors) => ({ ...prevErrors,first_Name: "zipcode is required",}));
    }

    setFormData({
      first_Name: "",
      last_Name: "",
      email: "",
      email1: "",
      streataddress: "",
      companyName: "",
      country: "",
      state: "",
      city: "",
      cityarea: "",
      zipcode: "",
      number: "",
    })
  };

  return (
    <>
      <div className="breadCrumb pt-[45px] pb-[45px] bg-[#FF8E78]">
        <div className="container">
          <div className=" text-center">
            <h2 className="text-[24px] font-[3400] text-white">CheckOut</h2>
          </div>
        </div>
      </div>
      <div className="mt-[50px] container ">
        <h3 className="text-[26px] font-[700] text-center mb-[30px]">
          Billing Details
        </h3>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <Form onSubmit={handleSubmit}>
              <div className="flex">
                <Form.Group
                  controlId="first_name"
                  className="w-[50%] mb-[22px] me-[10px]"
                >
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="pt-2 pb-2 shadow-none"
                    isInvalid={!!formError.first_name}
                  />
                      <Form.Control.Feedback type="invalid"> {formError.first_name}  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="last_Name" className="w-[50%] mb-[22px]">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="last_Name"
                    value={formData.last_Name}
                    onChange={handleChange}
                    className="pt-2 pb-2 shadow-none"
                    isInvalid={!!formError.phone}
                    />
                        <Form.Control.Feedback type="invalid"> {formError.phone}  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <Form.Group controlId="email" className="mb-[22px]">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="pt-2 pb-2 shadow-none"
                  isInvalid={!!formError.email}
                  />
                      <Form.Control.Feedback type="invalid"> {formError.email}  </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="streataddress" className="mb-[22px]">
                <Form.Control
                  type="text"
                  placeholder="Street Address"
                  name="streataddress"
                  value={formData.streataddress}
                  onChange={handleChange}
                  className="pt-2 pb-2 shadow-none"
                  isInvalid={!!formError.streataddress}
                  />
                      <Form.Control.Feedback type="invalid"> {formError.streataddress}  </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="companyName" className="mb-[22px]">
                <Form.Control
                  type="text"
                  placeholder="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="pt-2 pb-2 shadow-none"
                  isInvalid={!!formError.companyName}
                  />
                      <Form.Control.Feedback type="invalid"> {formError.companyName}  </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="email1" className="mb-[22px]">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  name="email1"
                  value={formData.email1}
                  onChange={handleChange}
                  className="pt-2 pb-2 shadow-none"
                  isInvalid={!!formError.email1}
                  />
                      <Form.Control.Feedback type="invalid"> {formError.email1}  </Form.Control.Feedback>
              </Form.Group>
              <div className="flex">
                <Form.Select
                  aria-label="Contrary Name"
                  className="shadow-none me-[10px] mb-[22px] pt-2 pb-2"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  isInvalid={!!formError.country}
                >
                  <option value="" disabled selected>
                    {" "}
                    Country{" "}
                  </option>
                  <option>Contrary Name</option>
                  <option value="1">India</option>
                  <option value="2">Canada</option>
                      <Form.Control.Feedback type="invalid"> {formError.country}  </Form.Control.Feedback>
                </Form.Select>
                <Form.Select
                  aria-label="State"
                  className="shadow-none mb-[22px] pt-2 pb-2"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  isInvalid={!!formError.state}
                >
                  <option value="" disabled selected>
                    State
                  </option>
                  <option>State</option>
                  <option value="1">Gujarat</option>
                  <option value="2">Div</option>
                  <Form.Control.Feedback type="invalid"> {formError.state}  </Form.Control.Feedback>
                </Form.Select>
              </div>
              <div className="flex">
                <Form.Select
                  aria-label="City"
                  className="shadow-none me-[10px] mb-[22px] pt-2 pb-2"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  isInvalid={!!formError.city}
                >
                  <option value="" disabled selected>
                    City
                  </option>
                  <option>City</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <Form.Control.Feedback type="invalid"> {formError.city}  </Form.Control.Feedback>
                </Form.Select>
                <Form.Select
                  aria-label="City area"
                  className="shadow-none mb-[22px] pt-2 pb-2"
                  name="cityarea"
                  value={formData.cityarea}
                  onChange={handleChange}
                  isInvalid={!!formError.cityarea}
                >
                  <option value="" disabled selected>
                    City Area
                  </option>
                  <option>City area</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <Form.Control.Feedback type="invalid"> {formError.cityarea}  </Form.Control.Feedback>
                </Form.Select>
              </div>
              <div className="flex w-[100%]">
                <Form.Group
                  controlId="zipcode"
                  className="mb-[22px] w-[50%] me-[10px]"
                >
                  <Form.Control
                    type="text"
                    placeholder="Zipcode"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                    className="pt-2 pb-2 shadow-none"
                    isInvalid={!!formError.zipcode}
                  />
                    <Form.Control.Feedback type="invalid"> {formError.zipcode}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="number" className="mb-[22px] w-[50%]">
                  <Form.Control
                    type="number"
                    placeholder="Mobile Number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="pt-2 pb-2 shadow-none"
                    isInvalid={!!formError.number}
                  />
                    <Form.Control.Feedback type="invalid"> {formError.number}  </Form.Control.Feedback>
                </Form.Group>
              </div>
            </Form>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="border rounded-md">
              <div className="p-3 border-b">
                <h3 className="text-[18px] font-extrabold mb-0">Your Order</h3>
              </div>
              <div className="p-3">
                <div className="flex justify-between border-b pb-2">
                  <h3 className="text-[18px] font-extrabold">Product</h3>
                  <h3 className="text-[18px] font-extrabold">SubTotal</h3>
                </div>
                <div className="flex justify-between border-b pb-3 pt-3">
                  <h3 className="text-[16px]">t-shirt</h3>
                  <h3 className="text-[16px]">$35.00</h3>
                </div>
                <div className="flex justify-between border-b pb-3 pt-3">
                  <h3 className="text-[18px] font-extrabold">SubTotal</h3>
                  <h3 className="text-[18px] font-extrabold">$25.00</h3>
                </div>
                <div className="flex justify-between border-b pb-3 pt-3">
                  <h3 className="text-[18px] font-extrabold">Shipping </h3>
                  <div className="text-end">
                    <h3 className="text-[18px]">Flate rate $10.00</h3>
                    <h3 className="text-[18px]">Local pickup</h3>
                  </div>
                </div>
                <div className="flex justify-between border-b pb-3 pt-3">
                  <h3 className="text-[18px] font-extrabold">Total</h3>
                  <h3 className="text-[18px] font-extrabold">$50.00</h3>
                </div>
                <Form>
                  <div className="flex w-[100%] pb-3 pt-3">
                    <Form.Group controlId="code" className="w-[70%] me-[10px]">
                      <Form.Control
                        type="text"
                        placeholder="DiscountCode"
                        className="pt-2 pb-2 shadow-none"
                      />
                    </Form.Group>
                    <button className="w-[30%] bg-[#FF8E78] text-white pt-2 pb-2 rounded-md font-bold">
                      Apply
                    </button>
                  </div>
                </Form>
                <div className="pt-2">
                  <Link to="/placeorder">
                    <button className="w-[100%] bg-[#FF8E78] text-white pt-2 pb-2 rounded-md font-bold">
                      Place An Order
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
