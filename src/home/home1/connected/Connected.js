import React from 'react';
import { PiMoney } from "react-icons/pi";
import { PiTruckLight } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import './Connected.css'

function Connected() {
  return (
    <>
      <div className="container">
        <div className="pt-[80px]">
         <div className="row border-t border-b">
            <div className="col-lg-4">
                <div className="pt-[60px] pb-[60px] text-center relative lg:before:absolute lg:before:bg-[#cccccc] lg:before:h-[40%] lg:before:w-[1px] lg:before:content[''] lg:before:right-0 border-b lg:border-0">
                <PiTruckLight className='text-[42px] text-[#ff8e78] flex items-center justify-center d-inline'/>
                <h6 className='text-[18px] mt-[10px] text-[#141414]'>FREE SHIPPING, RETURN</h6>
                <p className='text-[#cccccc] text-[14px]'>Free Shipping On All US Orders</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="pt-[60px] pb-[60px] text-center relative lg:before:absolute lg:before:bg-[#cccccc] lg:before:h-[40%] lg:before:w-[1px] lg:before:content[''] lg:before:right-0 border-b lg:border-0">
                <PiMoney  className='text-[42px] text-[#ff8e78] flex items-center justify-center d-inline'/>
                <h6 className='text-[18px] mt-[10px] text-[#141414]'>MONEY BACK GUARANTEE</h6>
                <p className='text-[#cccccc] text-[14px]'>30 Days Money Back Guarantee</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="pt-[60px] pb-[60px] text-center">
                <TfiHeadphoneAlt  className='text-[39px] text-[#ff8e78] flex items-center justify-center d-inline'/>
                <h6 className='text-[18px] mt-[10px] text-[#141414]'>1-800-333-44-55</h6>
                <p className='text-[#cccccc] text-[14px]'>24/7 Days Support</p>
                </div>
            </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Connected
