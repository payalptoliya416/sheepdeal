import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { IoStar } from 'react-icons/io5';

function MyOrder() {
  return (
    <>
       <div className="col-lg-9 col-md-12 col-12">
                <div className="p-3 shadow">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="shadow-md bg-white">
                             <h3 className='p-2 border-b text-[22px] font-[600]'>Filters</h3>
                             <div className="p-2 border-b">
                             <h4 className='uppercase text-[16px] font-[600]'>Order status</h4>
                        <ul className='p-0 m-0'>
                        <li className='hover:cursor-pointer mb-3'>
                 <div className="flex items-center shadow-none">
                 <Form.Check
                    type="checkbox"
                 className="mr-2 cursor-pointer border-0" />
                 <Form.Label className='mb-0'>On the way</Form.Label>
                 </div>
                       </li>
                        <li className='hover:cursor-pointer mb-3'>
                 <div className="flex items-center shadow-none">
                 <Form.Check
                    type="checkbox"
                 className="mr-2 cursor-pointer border-0" />
                 <Form.Label className='mb-0'>Delivered</Form.Label>
                 </div>
                       </li>
                        <li className='hover:cursor-pointer mb-3'>
                 <div className="flex items-center shadow-none">
                 <Form.Check
                    type="checkbox"
                 className="mr-2 cursor-pointer border-0" />
                 <Form.Label className='mb-0'>Cancelled</Form.Label>
                 </div>
                       </li>
                        <li className='hover:cursor-pointer mb-3'>
                 <div className="flex items-center shadow-none">
                 <Form.Check
                    type="checkbox"
                 className="mr-2 cursor-pointer border-0" />
                 <Form.Label className='mb-0'>Returned</Form.Label>
                 </div>
                       </li>
                      </ul>
                             </div>
                             <div className="p-2 border-b mt-[8px]">
                             <h4 className='uppercase text-[16px] font-[600]'>Order time</h4>
                        <ul className='p-0 m-0'>
                        <li className='hover:cursor-pointer mb-3'>
                 <div className="flex items-center shadow-none">
                 <Form.Check
                    type="checkbox"
                 className="mr-2 cursor-pointer border-0" />
                 <Form.Label className='mb-0'>Last 30 day</Form.Label>
                 </div>
                       </li>
                        <li className='hover:cursor-pointer mb-3'>
                 <div className="flex items-center shadow-none">
                 <Form.Check
                    type="checkbox"
                 className="mr-2 cursor-pointer border-0" />
                 <Form.Label className='mb-0'>2023</Form.Label>
                 </div>
                       </li>
                        <li className='hover:cursor-pointer mb-3'>
                 <div className="flex items-center shadow-none">
                 <Form.Check
                    type="checkbox"
                 className="mr-2 cursor-pointer border-0" />
                 <Form.Label className='mb-0'>2022</Form.Label>
                 </div>
                       </li>
                        <li className='hover:cursor-pointer mb-3'>
                 <div className="flex items-center shadow-none">
                 <Form.Check
                    type="checkbox"
                 className="mr-2 cursor-pointer border-0" />
                 <Form.Label className='mb-0'>2021</Form.Label>
                 </div>
                       </li>
                        <li className='hover:cursor-pointer mb-3'>
                 <div className="flex items-center shadow-none">
                 <Form.Check
                    type="checkbox"
                 className="mr-2 cursor-pointer border-0" />
                 <Form.Label className='mb-0'>2020</Form.Label>
                 </div>
                       </li>
                        <li className='hover:cursor-pointer mb-3'>
                 <div className="flex items-center shadow-none">
                 <Form.Check
                    type="checkbox"
                 className="mr-2 cursor-pointer border-0" />
                 <Form.Label className='mb-0'>older</Form.Label>
                 </div>
                       </li>
                      </ul>
                             </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-12">
                        <Form>
                        <Form.Group controlId="search" className='border-solid relative flex'>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            aria-describedby="search-addon"
                            required
                            className='rounded-0 shadow-none border-[#dee2e6]'
                        />
                        <button className='bg-[#FF8E78] h-[45px] w-60 flex items-center justify-center text-white'><FaSearch  className='text-white me-2' /> Search Order</button>
                        </Form.Group>
                        </Form>
                        <div className="orderlist mt-3">
                            <div className="border rounded-md p-2 mb-3">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="flex gap-3 flex-wrap sm:flex-nowrap">
                                        <img src={require('../../image/arrival_1.png')} className='w-24 h-24' alt="" />

                                        <div>
                                            <h4 className='text-[16px] mb-0 font-[600]'>Product Name</h4>
                                            <span className='text-[14px]'>Color : Black</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                            <h4 className='text-[16px] font-[500]'>$50.00</h4>
                                    </div>
                                    <div className="col-5">
                                        <div className="flex items-center gap-2 mb-3">
                                        <div className="w-[10px] h-[10px] bg-green-600 rounded"></div>
                                         <h4 className='text-[16px] font-[600] mb-0'> Delivered on Oct 13</h4>
                                        </div>
                                        <p className='text-[12px]'>Your item has been Delivered</p>
                                        <div className="flex items-center gap-2 mb-2 text-blue-600">
                                        <div><IoStar /></div>
                                         <h4 className='text-[16px] font-[600] mb-0'> Rate & Review Product</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded-md p-2 mb-3">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="flex gap-3 flex-wrap sm:flex-nowrap">
                                        <img src={require('../../image/arrival_1.png')} className='w-24 h-24' alt="" />

                                        <div>
                                            <h4 className='text-[16px] mb-0 font-[600]'>Product Name</h4>
                                            <span className='text-[14px]'>Color : Black</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                            <h4 className='text-[16px] font-[500]'>$50.00</h4>
                                    </div>
                                    <div className="col-5">
                                        <div className="flex items-center gap-2 mb-3">
                                        <div className="w-[10px] h-[10px] bg-green-600 rounded"></div>
                                         <h4 className='text-[16px] font-[600] mb-0'> Delivered on Oct 13</h4>
                                        </div>
                                        <p className='text-[12px]'>Your item has been Delivered</p>
                                        <div className="flex items-center gap-2 mb-2 text-blue-600">
                                        <div><IoStar /></div>
                                         <h4 className='text-[16px] font-[600] mb-0'> Rate & Review Product</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded-md p-2 mb-3">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="flex gap-3 flex-wrap sm:flex-nowrap">
                                        <img src={require('../../image/arrival_1.png')} className='w-24 h-24' alt="" />

                                        <div>
                                            <h4 className='text-[16px] mb-0 font-[600]'>Product Name</h4>
                                            <span className='text-[14px]'>Color : Black</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                            <h4 className='text-[16px] font-[500]'>$50.00</h4>
                                    </div>
                                    <div className="col-5">
                                        <div className="flex items-center gap-2 mb-3">
                                        <div className="w-[10px] h-[10px] bg-green-600 rounded"></div>
                                         <h4 className='text-[16px] font-[600] mb-0'> Delivered on Oct 13</h4>
                                        </div>
                                        <p className='text-[12px]'>Your item has been Delivered</p>
                                        <div className="flex items-center gap-2 mb-2 text-blue-600">
                                        <div><IoStar /></div>
                                         <h4 className='text-[16px] font-[600] mb-0'> Rate & Review Product</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default MyOrder
