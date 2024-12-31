import React, { useState } from 'react';
import { Accordion, FormCheck, FormGroup,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OrderSummery() {
    const [diliverOption, setDiliverOption] = useState('diliver1');

    const handleOptionChange = (event) => {
      setDiliverOption(event.target.value);
    };
  return (
    <>
        <Accordion.Item eventKey="2" className='mb-4 border-0 shadow-md'>
        <Accordion.Header className='border-0'>
            <div className='uppercase flex font-[600]'>
                <div className="w-[18px] h-[18px] bg-gray-200 text-[12px] me-3 flex items-center justify-center rounded-sm">3</div>
               order summary
            </div>
        </Accordion.Header>
        <Accordion.Body className='p-0'>
        <div className="row p-3">
                <div className="col-lg-2 col-md-2 col-12">
                  <img src={require('../../../image/arrival_1.png')} className='w-28 h-28' alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <h3 className='text-[16px] font-[600] mb-[2px]'>Product Name</h3>
                    <h6 className='text-[14px] text-gray-500'>black</h6>
                    <p className='text-[14px] text-gray-500'>Seller : SPLIPRLItech</p>
                    <p><del className='text-gray-500 me-3'>$39.00</del> <span className='text-[18px] font-bold me-3'>$50.00</span>
                    <span className='text-green-800 text-[16px] font-[700]'>5% off 2 offers aplied</span></p>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                <Form>
                <div>
                <FormGroup className='flex'>
                    <FormCheck
                    type="radio"
                    id="diliver1"
                    label=""
                    value="diliver1"
                    checked={diliverOption === 'diliver1'}
                    onChange={handleOptionChange}
                    className='cursor-pointer'
                    />
                    <div>
                        <div className="ps-2">
                        <h4 className='text-[14px] mb-[2px]'>Delivery by 11 PM, Tommorow | </h4>
                        <span className='text-green-800 text-[14px]'><del className='text-gray-400 me-2'>$20</del>Free</span>
                        </div>
                    </div>
                </FormGroup>
                </div>
                <div className="pt-3">
                    <FormGroup className='flex'>
                        <FormCheck
                        type="radio"
                        id="diliver2"
                        label=""
                        value="diliver2"
                        checked={diliverOption === 'diliver2'}
                        onChange={handleOptionChange}
                        className='cursor-pointer'
                        />
                        <div>
                        <div className="ps-2">
                        <h4 className='text-[14px] mb-[2px]'>Delivery by Tommorow, Wed | </h4>
                        <span className='text-green-800 text-[14px]'><del className='text-gray-400 me-2'>$10</del>Free</span>
                        </div>
                    </div>
             </FormGroup>
                </div>
              </Form>
                </div>
            </div>
            <div className='flex mt-[20px] ps-3 pe-3 pb-3'>
                <div className="flex me-5">
                    <button className='rounded-[100%] border w-[22px] h-[22px] flex items-center justify-center me-1'>-</button>
                    <button className=' border w-[40px] h-[22px] flex items-center justify-center '>1</button>
                    <button className='rounded-[100%] border w-[22px] h-[22px] flex items-center justify-center ms-1'>+</button>
                </div>
                <span className='text-[18px] font-bold'>Remove</span>
            </div>
            <div className="bg-gray-200 p-1"></div>
                <div className=" bg-white mt-3 ps-3 pe-3 pb-1">
                     <Form>
                     <div className='hover:cursor-pointer mb-3'>
                 <div className="flex items-center shadow-none">
                 <Form.Check
                    type="checkbox"
                    label='Use GST Invoice' 
                 className="mr-2 cursor-pointer border-0 font-[600]" />
                 </div>
               </div>
                     </Form>
                </div>
            <div className="bg-gray-200 p-1"></div>
                <div className=" bg-white mt-3 ps-3 pe-3 pb-3">
                    <div className="flex items-center justify-between">
             <p className='mb-0'>oreder confirmation email will be sent to <span className='font-bold'>example@gmail.com</span></p>
             <Link><button className='uppercase bg-[#FF8E78] pt-[8px] pb-[8px] ps-[22px] pe-[22px] text-white'>Continue</button></Link>
             
                    </div>
                </div>
        </Accordion.Body>
      </Accordion.Item> 
    </>
  )
}

export default OrderSummery
