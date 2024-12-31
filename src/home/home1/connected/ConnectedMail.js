import React from 'react';
import { FormControl, Form } from 'react-bootstrap';
import { CiMail } from 'react-icons/ci';

function ConnectedMail() {
  return (
    <>
    <div className="container pt-5">
      <div className="contact-content relative before:absolute before:content-[''] before:h-[100%] before:w-[100%] before:bg-[#00000059] pt-[80px] pb-[80px] flex justify-center items-center flex-col text-white">
        <h2 className='relative text-[30px] pb-[10px] text-center uppercase font-[400] text-[#fff] before:absolute before:content-[""] before:h-[1px] before:w-20  before:bg-white before:bottom-0 before:left-[48%] after:absolute after:content-[""]  after:h-[1px] after:w-[2px] after:border after:bg-black sm:before:left-[40%] sm:text-[36px]'>
          KEEP CONNECTED
        </h2>
        <h6 className='text-[18px] mt-[35px] text-center get-text z-10'>Get updates by subscribing to our weekly newsletter</h6>
        <div className="flex justify-center items-center w-full">
          <div className="col-10 col-sm-6">
            <Form>
              <Form.Group controlId="emailForm" className='mt-[60px] border-b border-solid relative'>
                <CiMail className=' text-white d-inline absolute top-3' />
                <button className='absolute right-0 top-3 text-white uppercase'>subscribe</button>
                <FormControl
                  type="email"
                  placeholder="Enter your email"
                  aria-describedby="email-addon"
                  required
                  className='hol border-b border-solid ps-4 bg-transparent border-0 text-white  form-place'
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ConnectedMail;
