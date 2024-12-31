import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './PlaceOrder.css';
import Login from './login/Login';
import DeliveryAddress from './delivery/DeliveryAddress';
import OrderSummery from './ordersummery/OrderSummery';
import PaymentOption from './paymentoption/PaymentOption';

function PlaceOrder() {

  return (
    <>
      <div className="breadCrumb pt-[45px] pb-[45px] bg-[#FF8E78]">
      <div className="container">
        <div className=' text-center'>
          <h2 className='text-[24px] font-[3400] text-white'>CheckOut</h2>
        </div>
      </div>
    </div>
    <div className="container mt-[50px] placeorder">
        <div className="row">
            <div className="col-lg-8  col-12">
                 <Accordion defaultActiveKey="0" alwaysOpen>
    <Login/>
      <DeliveryAddress/>
      <OrderSummery/>
      <PaymentOption/>
    </Accordion>
            </div>
            <div className="col-lg-4  col-12">
               <div className="shadow-md">
                <h3 className="p-3 uppercase border-b text-[16px] font-extrabold bg-gray-100">
                    price details
                </h3>
                <div className="p-3">
                <div className="flex justify-between pt-2 pb-2">
                    <h3 className='text-[16px] font-[500]'>Price(1 Item)</h3>    
                    <h3 className='text-[16px] font-[500]'>$50.00</h3>    
                </div>
                <div className="flex justify-between pt-2 pb-2 border-b border-dotted border-gray-400">
                    <h3 className='text-[16px]'>Delivery Charges</h3>    
                    <h3 className='uppercase text-[16px]'><del>$40.00</del> Free</h3> 
                </div>
                </div>
                <div className="flex justify-between p-3  border-b border-solid border-gray-400">
                    <h3 className='text-[18px] font-bold'>Total Payable</h3>    
                    <h3 className='uppercase text-[16px] font-bold'>$50.00</h3> 
                </div>
                <div className="flex justify-between p-3">
                    <h3 className='text-[16px] font-bold text-green-900'>Your Total Saving on This order $02.00</h3>    
                </div>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PlaceOrder
