import React from "react";
import { Form } from "react-bootstrap";

function ProfileInformation() {
  return (
    <>
      <div className="col-lg-9 col-md-12 col-12">
        <div className="p-4 shadow-md">
          <Form>
            <h3 className="text-gray-600 text-[14px] sm:text-[20px] font-[600] mb-3">
              Personal Information
            </h3>
            <div className="sm:flex gap-3 mb-3">
                <div className="w-[100%] sm:w-[50%]">
              <Form.Group controlId="firstname">
                <Form.Control
                  type="text"
                  placeholder="First name"
                  className="shadow-none rounded-0 p-2 mb-3 sm:mb-0 "
                />
              </Form.Group>
                </div>
                <div className="w-[100%] sm:w-[50%]">
              <Form.Group controlId="lastname">
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  className="shadow-none rounded-0 p-2 mb-3 sm:mb-0"
                />
              </Form.Group>
                </div>
            </div>
            
            <div className="sm:flex gap-3 mb-3">
                <div  className="w-[100%] sm:w-[50%]">
                <h3 className="text-gray-600 text-[14px] sm:text-[20px] font-[600] mb-3">
              Email Address{" "}
            </h3>
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="shadow-none rounded-0 p-2 mb-3 sm:mb-0"
                />
              </Form.Group>
                </div>
                <div  className="w-[100%] sm:w-[50%]">
                <h3 className="text-gray-600 text-[14px] sm:text-[20px] font-[600] mb-3">
              Mobile Number
            </h3>
            <div className="flex">
                <div className="w-[100%] ">
              <Form.Group controlId="number">
                <Form.Control
                  type="number"
                  placeholder="+9324568490"
                  className="shadow-none rounded-0 p-2 mb-3 sm:mb-0"
                />
              </Form.Group>
                </div>
            </div>
                </div>
            </div>

            <div className="w-[100%] mb-3">
            <h3 className="text-gray-600 text-[14px] sm:text-[20px] font-[600] mb-3">
              Password{" "}
            </h3>
              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="password"
                  className="shadow-none rounded-0 p-2 mb-3 sm:mb-0"
                />
              </Form.Group>
            </div>

            
            <button className="bg-[#FF8E78] pt-[8px] pb-[8px] ps-[30px] pe-[30px] text-white font-[600] hover:bg-[#a47f78]">Update</button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ProfileInformation;
