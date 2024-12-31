import React, {  useState } from 'react';
import Collapsed from './Collapsed';
import { Dropdown } from 'react-bootstrap';
import { BsThreeDotsVertical } from "react-icons/bs";
import './ManageAddress.css';   

function ManageAddress() {
    const [open,setOpen] = useState(false);
  
  return (
    <>
      <div className="col-lg-9 col-md-12 col-12">
      <div className="p-3 shadow-md">
        <div className='mb-[30px]'>
          <h3 className='text-[18px] font-[600] mb-4'>Manage Addresses</h3>
          <div className="border">
          <div
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='w-[100%] bg-transparent text-start p-3 uppercase text-blue-600 font-semibold cursor-pointer'
      >
        <span className='text-[22px] me-3'>{open ? '-' : '+'}</span> Add New Address
      </div>
      <Collapsed open={open}/>
          </div>
        </div>
      <div className="border p-4 mb-[30px]">
      <div className="flex justify-between">
      <span className="bg-gray-200 text-[12px] text-gray-800 p-[5px] font-[600]">Work</span>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className="border-0 dropdown-toggle::after-hidden bg-transparent  text-black">
          <BsThreeDotsVertical />
        </Dropdown.Toggle>

        <Dropdown.Menu className='shadow border-0'>
          <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
      <h3 className='text-[16px] text-black font-[600] mt-3 '>User Name <span className='ms-2'>9328076854</span></h3>
      <p className='max-w-4xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate cum fugit mollitia culpa est voluptates pariatur eaque temporibus assumenda deleniti?lorem12</p>
      </div>
      <div className="border p-4">
      <div className="flex justify-between">
      <span className="bg-gray-200 text-[12px] text-gray-800 p-[5px] font-[600]">Home</span>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className="border-0 dropdown-toggle::after-hidden bg-transparent  text-black">
          <BsThreeDotsVertical />
        </Dropdown.Toggle>

        <Dropdown.Menu className='shadow border-0'>
          <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
      <h3 className='text-[16px] text-black font-[600] mt-3 '>User Name <span className='ms-2'>9328076854</span></h3>
      <p className='max-w-4xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate cum fugit mollitia culpa est voluptates pariatur eaque temporibus assumenda deleniti?lorem12</p>
      </div>
      </div>
      </div>
    </>
  )
}

export default ManageAddress
