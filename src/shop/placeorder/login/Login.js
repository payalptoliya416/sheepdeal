import React from 'react';
import { Accordion } from 'react-bootstrap';

function Login() {
  return (
    <>
        <Accordion.Item eventKey="0" className='mb-4 border-0 shadow-md'>
        <Accordion.Header className='border-0'>
            <div className='uppercase flex font-[600]'>
                <div className="w-[18px] h-[18px] bg-gray-200 text-[12px] me-3 flex items-center justify-center rounded-sm">1</div>
                login
            </div>
        </Accordion.Header>
        <Accordion.Body>
            <div className="flex justify-between">
        <p>Admin User <span className='ps-3'>+9324957867</span></p>
        <button className='uppercase border ps-3 pe-3 font-[600] text-[#FF8E78]'>change</button>
            </div>
        </Accordion.Body>
      </Accordion.Item>
    </>
  )
}

export default Login
