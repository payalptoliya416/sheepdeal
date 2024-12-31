import React from 'react';
import Login from './login/Login';
import Register from './register/Register';
import './Information.css';

function Information() {
  return (
    <>
      <div className="breadCrumb pt-[45px] pb-[45px] bg-[#FF8E78]">
      <div className="container">
        <div className=' text-center'>
          <h2 className='text-[24px] font-[500] text-white'>Information</h2>
        </div>
      </div>
    </div>
    <div className="container mt-[50px]">
        <div className="row">
           <Login/>
          <Register/>
        </div>
    </div>
    </>
  )
}

export default Information
