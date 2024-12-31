import React from 'react';
import { HiOutlineArrowRight } from "react-icons/hi2";

function Sale() {
    const swiperStyles = {
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      };
  
  return (
    <>
    <div className="pt-[70px] pb-[70px]">
      <div className="container">
        <div className="pt-[120px] pb-[120px] flex flex-col items-center justify-center" style={{ ...swiperStyles, backgroundImage: `url(${require('../../../image/sales.png')})` }} >
        <h2 className='uppercase text-[46px] text-white'>SPRING SALE</h2>
        <h6 className='text-[24px] text-white font-extrabold' >30% off on selected items</h6>
        <button className='bg-[#FF8E78] text-white text-[16px] pt-[12px] pb-[12px] ps-[18px] pe-[18px] uppercase mt-[30px]'>Shop the sale <HiOutlineArrowRight  className='d-inline ms-2'/></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sale
