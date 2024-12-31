import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ShopBreadCrumb from '../shopbreadcrumb/ShopBreadCrumb';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { FaRegWindowClose } from 'react-icons/fa';

function CartPage() {
  return (
    <>
      <ShopBreadCrumb/>
      <div className="mt-[60px]">
          <div className="cart container">
            <div className="row">
                <div className="col-xl-9 col-lg-8">
                  <div className="cart-content mt-[20px] mb-[30px] lg:mb-0">
                  <div className="table-responsive">
                  <Table bordered responsive>
                    <thead>
                        <tr className='text-center'>
                        <th>product</th>
                        <th>Price</th>
                        <th>Quanity</th>
                        <th>Total</th>
                        <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className='text-center align-middle'>
                    <td> 
                        <div className='sm:flex items-center flex-wrap'>
                        <img src={require('../../image/arrival_1.png')} alt="" className='w-28 h-28 object-contain' />
                        <h3 className='ms-1 text-[16px]'>Product</h3>
                        </div>
                    </td>
                    <td>$25.00</td>
                    <td>
                    <ButtonGroup aria-label="Basic example" className='rounded-0'>
                    <Button className='border bg-white text-black rounded-0'>-</Button>
                    <Button className='border bg-white text-black'>0</Button>
                    <Button className='border bg-white text-black rounded-0'>+</Button>
                    </ButtonGroup>
                    </td>
                    <td>$00.00</td>
                    <td><FaRegWindowClose className='d-inline cursor-pointer text-[26px]' /></td>
                    </tr>
                    </tbody>
                    </Table>
                    </div>
                    <div className="flex justify-between mt-[30px]">
                     <button className='cursor-pointer '><Link className='no-underline bg-[#141414] pt-[15px] pb-[15px] ps-[6px] pe-[6px] sm:pt-[17px] sm:pb-[17px] sm:ps-[24px] sm:pe-[24px] text-white text-[14px] sm:text-16px] font-[600] border'>Continue Shopping</Link></button>
                     <button className='cursor-pointer '><Link className='no-underline bg-white pt-[15px] pb-[15px] ps-[6px] pe-[6px] sm:pt-[17px] sm:pb-[17px] sm:ps-[24px] sm:pe-[24px] text-black text-[14px] sm:text-16px] font-[600] border'>Clear Shopping Cart</Link></button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                   <div className="summary mt-[20px] bg-[#F5F5F5] p-[20px]">
                     <h6 className='uppercase text-[14px] font-[600] pb-[15px] border-b border-solid border-[#CFCFCF]'>Summary</h6>
                     <h6 className='text-[14px] font-[500] leading-[22px]'>Estimate Shipping and Tax</h6>
                     <p className='text-[#A4A4A4] text-[14px] leading-[22px]'>Enter your destination to get a shipping estimate.</p>
                        <p className='text-[#141414] text-[14px] font-[600]'>Flate Rate</p>
                     <Form>
                     <div className='hover:cursor-pointer mb-3'>
                 <div className="flex items-center shadow-none">
                 <Form.Check
                    type="checkbox"
                    label='Fixed: $5.00' 
                 className="mr-2 cursor-pointer border-0 text-[14px] text-[600]" />
                 </div>
                     </div>
                     </Form>
                     <div className="flex justify-between bg-[#FF8E78] pt-[15px] pb-[15px] ps-[10px] pe-[10px] border-b border-solid border-[#fff3]">
                        <p className='mb-0 text-white'>Subtotal</p>
                        <p className='text-white text-[14px] mb-0'>$ <span>0</span></p>
                     </div>
                     <div className="flex justify-between bg-[#FF8E78] pt-[15px] pb-[15px] ps-[10px] pe-[10px] border-b border-solid border-[#fff3]">
                        <p className='mb-0 text-white'>Shipping</p>
                        <p className='text-white text-[14px] mb-0'>$ <span>00.00</span></p>
                     </div>
                     <div className="flex justify-between bg-[#FF8E78] pt-[15px] pb-[15px] ps-[10px] pe-[10px] border-b border-solid border-[#fff3]">
                        <p className='mb-0 text-white'>Order Total</p>
                        <p className='text-white text-[14px] mb-0'>$ <span>0</span></p>
                     </div>
                     <div className='mt-[45px] mb-[15px]' >
                        <Link to='/checkout' className= 'pt-[12px] pb-[12px] ps-[55px] pe-[55px] bg-black text-center no-underline text-white  text-[16px] font-[400]'>Proceed To Checkout</Link>
                     </div>
                   </div>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default CartPage
