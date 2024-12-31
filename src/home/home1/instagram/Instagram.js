import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Instagram() {
   
  return (
    <>
    <div className="instagram-area mt-[75px]">
      <div className="container">
      <div className="row">
        <div className="col-12 text-center">
            <div className="mb-[40px]">
               <h4 className='uppercase font-[400]'><span className='text-[#FF8E78]'> @  <Link className='uppercase text-[#FF8E78] font-[400] me-1'> follow </Link></span> US ON INSTAGRAM</h4>
               <h6 className='text-[#cccccc] text-[24px] mt-[10px]'>shop our instagram</h6>
            </div>
        </div>
      </div>
      <div className="row">
      <Swiper className="mySwiper"  spaceBetween={10}
      slidesPerView={6}
      breakpoints={{
        320: {
            slidesPerView: 1,
          },
        375: {
            slidesPerView: 1,
          },
        435: {
            slidesPerView: 1,
          },
         768: {
           slidesPerView: 4,
         },
         1024: {
           slidesPerView: 6,
         },
       }}
      >
        <SwiperSlide>
            <div className="insta-img">
                <img src={require('../../../image/insta1.png')} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="insta-img">
                <img src={require('../../../image/insta2.png')} alt="" />
            </div>
       </SwiperSlide>
        <SwiperSlide>
            <div className="insta-img">
                <img src={require('../../../image/insta3.png')} alt="" />
            </div>
       </SwiperSlide>
        <SwiperSlide>
            <div className="insta-img">
                <img src={require('../../../image/insta4.png')} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
       
            <div className="insta-img">
                <img src={require('../../../image/insta5.png')} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
       
            <div className="insta-img">
                <img src={require('../../../image/insta6.png')} alt="" />
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
    </div>  
    </>
  )
}

export default Instagram
