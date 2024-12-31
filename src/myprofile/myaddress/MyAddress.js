import React from 'react';
import { Form } from 'react-bootstrap';

function MyAddress() {
  return (
    <>
     <div className="col-lg-9 col-md-12 col-12">
        <div className="shadow p-4">
      <Form>
           <div className="w-[100%] mb-3">
            <h3 className="text-gray-600 text-[14px] sm:text-[20px] font-[600] mb-3">
              Address{" "}
            </h3>
              <Form.Group controlId="Address">
                <Form.Control
                  type="text"
                  placeholder="Address"
                  className="shadow-none rounded-0 p-2 mb-3 sm:mb-0"
                />
              </Form.Group>
            </div>
            <div className="sm:flex gap-3 mb-3">
            <div className="w-[100%] sm:w-[50%]">
                <h3 className="text-gray-600 text-[14px] sm:text-[20px] font-[600] mb-3">Country
                </h3>
                <Form.Select
                  aria-label="Country"
                  className="shadow-none mb-3 pt-2 pb-2 rounded-0"
                  name="country"
                >
                   <option value="" disabled selected> Country  </option>
                  <option>India</option>
                  <option value="1">Canada</option>
                  <option value="2">America</option>
                </Form.Select>
              </div>
            <div className="w-[100%] sm:w-[50%]">
                <h3 className="text-gray-600 text-[14px] sm:text-[20px] font-[600] mb-3">State  </h3>
                <Form.Select
                  aria-label="State"
                  className="shadow-none mb-3 pt-2 pb-2 rounded-0"
                  name="state"
                >
                   <option value="" disabled selected>  State</option>
                  <option>Gujarat</option>
                  <option value="1">Bihar</option>
                  <option value="2">Goa</option>
                </Form.Select>
              </div>
            </div>
            <div className="sm:flex gap-3">
            <div className="w-[100%] sm:w-[50%]">
                <h3 className="text-gray-600 text-[14px] sm:text-[20px] font-[600] mb-3">City
                </h3>
                <Form.Select
                  aria-label="City"
                  className="shadow-none mb-3 pt-2 pb-2 rounded-0"
                  name="city"
                >
                 <option value="" disabled selected> City </option>
                  <option>Mumbai</option>
                  <option value="1">Surat</option>
                  <option value="2">Div</option>
                </Form.Select>
              </div>
              <div className="w-[100%] sm:w-[50%]">
              <h3 className="text-gray-600 text-[14px] sm:text-[20px] font-[600] mb-3">
              ZipCode{" "}
            </h3>
              <Form.Group controlId="zipcode">
                <Form.Control
                  type="text"
                  placeholder="ZipCode"
                  className="shadow-none rounded-0 p-2 mb-3 sm:mb-0"
                />
              </Form.Group>
              </div>
            </div>
            <div className="w-[100%] mb-3">
            <h3 className="text-gray-600 text-[14px] sm:text-[20px] font-[600] mb-3">
              Landmark{" "}
            </h3>
              <Form.Group controlId="Landmark">
                <Form.Control
                  type="text"
                  placeholder="Landmark"
                  className="shadow-none rounded-0 p-2"
                />
              </Form.Group>
            </div>
      </Form>
        </div>
     </div>
    </>
  )
}

export default MyAddress
