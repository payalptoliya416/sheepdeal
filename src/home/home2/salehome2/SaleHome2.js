import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import './SaleHome2.css';

function SaleHome2() {
  return (
    <>
      <div className="mt-[60px] sale">
       <div className="container">
       <Swiper
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide>
        <div className="mt-[20px] thumb overflow-hidden">
       <div className="thumb-sale relative w-[653px] before:absolute before:w-[100%] before:content-[''] before:bg-[#0000001a] z-[1] before:top0 before:left-0 before:h-[100%] overflow-hidden">
        <img src={require('../../../image/sale1.png')} alt="" className='img-sale' /> 
        <div className="thumb-sale-data absolute top-[50%] xl:left-[50%] lg:left-[37%] md:left-[27%] left-[28%] w-[80%] z-[9] transform translate-x-[-50%] translate-y-[-50%] text-center">
         <h4 className='text-[20px] text-white uppercase'>MENS COLLECTION</h4>
         <h2 className='text-[90px] sm:text-[115px] textwhite mb-[15px] text-white' >SALE</h2>
         <h3 className='text-[40px] text-white uppercase'>FLAT 20%</h3>
         <button className='btn-wrapper cursor-pointer bg-[#54CABF] pt-[15px] pb-[15px] ps-[30px] pe-[30px] text-white mt-[15px] uppercasetext-[16px]'><Link className='no-underline text-white font-[400] '>SHOP NOW</Link></button>
        </div>
       </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="mt-[20px] thumb overflow-hidden">
       <div className="thumb-sale relative w-[653px] before:absolute before:w-[100%] before:content-[''] before:bg-[#0000001a] z-[1] before:top0 before:left-0 before:h-[100%] overflow-hidden">
        <img src={require('../../../image/sale2.png')} alt="" className='img-sale' /> 
        <div className="thumb-sale-data absolute top-[50%] xl:left-[50%] lg:left-[37%] md:left-[27%] left-[28%] w-[80%] z-[9] transform translate-x-[-50%] translate-y-[-50%] text-center">
         <h4 className='text-[20px] text-white uppercase'>top tranding</h4>
         <h2 className='text-[90px] sm:text-[115px] textwhite mb-[15px] text-white' >40%</h2>
         <h3 className='text-[40px] text-white uppercase'>off everything</h3>
         <button className='btn-wrapper cursor-pointer bg-[#54CABF] pt-[15px] pb-[15px] ps-[30px] pe-[30px] text-white mt-[15px] uppercasetext-[16px]'><Link className='no-underline text-white font-[400] '>SHOP NOW</Link></button>
        </div>
       </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="mt-[20px] thumb overflow-hidden">
       <div className="thumb-sale relative w-[653px] before:absolute before:w-[100%] before:content-[''] before:bg-[#0000001a] z-[1] before:top0 before:left-0 before:h-[100%] overflow-hidden">
        <img src={require('../../../image/sale1.png')} alt="" className='img-sale' /> 
        <div className="thumb-sale-data absolute top-[50%] xl:left-[50%] lg:left-[37%] md:left-[27%] left-[28%] w-[80%] z-[9] transform translate-x-[-50%] translate-y-[-50%] text-center">
         <h4 className='text-[20px] text-white uppercase'>MENS COLLECTION</h4>
         <h2 className='text-[90px] sm:text-[115px] textwhite mb-[15px] text-white' >SALE</h2>
         <h3 className='text-[40px] text-white uppercase'>FLAT 20%</h3>
         <button className='btn-wrapper cursor-pointer bg-[#54CABF] pt-[15px] pb-[15px] ps-[30px] pe-[30px] text-white mt-[15px] uppercasetext-[16px]'><Link className='no-underline text-white font-[400] '>SHOP NOW</Link></button>
        </div>
       </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="mt-[20px] thumb overflow-hidden">
       <div className="thumb-sale relative w-[653px] before:absolute before:w-[100%] before:content-[''] before:bg-[#0000001a] z-[1] before:top0 before:left-0 before:h-[100%] overflow-hidden">
        <img src={require('../../../image/sale2.png')} alt="" className='img-sale' /> 
        <div className="thumb-sale-data absolute top-[50%] xl:left-[50%] lg:left-[37%] md:left-[27%] left-[28%] w-[80%] z-[9] transform translate-x-[-50%] translate-y-[-50%] text-center">
         <h4 className='text-[20px] text-white uppercase'>top tranding</h4>
         <h2 className='text-[90px] sm:text-[115px] textwhite mb-[15px] text-white' >40%</h2>
         <h3 className='text-[40px] text-white uppercase'>off everything</h3>
         <button className='btn-wrapper cursor-pointer bg-[#54CABF] pt-[15px] pb-[15px] ps-[30px] pe-[30px] text-white mt-[15px] uppercasetext-[16px]'><Link className='no-underline text-white font-[400] '>SHOP NOW</Link></button>
        </div>
       </div>
        </div>
        </SwiperSlide>
     
    </Swiper>
        
       </div>
      </div>
    </>
  )
}

export default SaleHome2
