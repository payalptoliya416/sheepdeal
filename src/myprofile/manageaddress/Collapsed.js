import React from 'react';
import { Collapse,Form } from 'react-bootstrap';

function Collapsed({open}) {
  return (
    <>
      <Collapse in={open}>
        <div id="example-collapse-text" className='p-3'>
         <Form>
            <div className="flex w-[100%] gap-3">
                <div className="w-[50%]">
                <Form.Group >
                <Form.Control
                  type="text"
                  placeholder="Pincode"
                  className="shadow-none rounded-0 p-2 mb-3 sm:mb-0"
                />
              </Form.Group>
                </div>
                <div className="w-[50%]">
                <Form.Group >
                <Form.Control
                  type="text"
                  placeholder="Locality"
                  className="shadow-none rounded-0 p-2 mb-3 sm:mb-0"
                />
              </Form.Group>
                </div>
            </div>
            <div className="flex w-[100%] gap-3">
              <Form.Control
               as="textarea"
              placeholder="Address (Area and Street)"
              className='h-[170px] shadow-none mb-3 rounded-0 w-[100%]'
              />
            </div>
            <div className="flex w-[100%] gap-3">
                <div className="w-[50%]">
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
                <div className="w-[50%]">
                <Form.Select
                  aria-label="State"
                  className="shadow-none mb-3 pt-2 pb-2 rounded-0"
                  name="state"
                >
                   <option value="" disabled selected>  State </option>
                  <option>Gujarat</option>
                  <option value="1">Bihar</option>
                  <option value="2">Goa</option>
                </Form.Select>
                </div>
            </div>
            <div className="flex w-[100%] gap-3">
                <div className="w-[50%]">
                <Form.Group >
                <Form.Control
                  type="text"
                  placeholder="Landmark(optional)"
                  className="shadow-none rounded-0 p-2 mb-3 sm:mb-0"
                />
              </Form.Group>
                </div>
                <div className="w-[50%]">
                <Form.Group >
                <Form.Control
                  type="number"
                  placeholder="Alternate Phone (optional)"
                  className="shadow-none rounded-0 p-2 mb-3 sm:mb-0"
                />
              </Form.Group>
                </div>
            </div>
            <div className='flex gap-5 mb-3'>
      <Form.Check
        type="radio"
        aria-label="radio 1"
        label="Home"
        className='shadow-none'
        name="radioGroup"
      />
      <Form.Check
        type="radio"
        aria-label="radio 2"
        label="Work"
        className='shadow-none'
        name="radioGroup"
      />
    </div>
    <div className="flex gap-4 flex-wrap">
        <button className='uppercase ps-[60px] pt-[7px] pb-[7px] pe-[60px] text-white bg-[#FF8E78] font-[600]'>Save</button>
        <button className='uppercase ps-[60px] pt-[7px] pb-[7px] pe-[60px] font-[600] text-blue-600'>Cancle</button>
    </div>
         </Form>
        </div>
      </Collapse>
    </>
  )
}

export default Collapsed
