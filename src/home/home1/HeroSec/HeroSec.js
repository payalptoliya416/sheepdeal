import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GoArrowRight } from "react-icons/go";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { CgArrowLongLeft,CgArrowLongRight } from "react-icons/cg";

function HeroSec() {
    const swiperStyles = {
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display:'flex',
        alignItems:'center'
      };
  return (
    <>
    <div className='relative '>
    <Swiper  modules={[Navigation]} className="mySwiper " navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}>
        <SwiperSlide style={{ ...swiperStyles, backgroundImage: `url(${require('../../../image/hero1.png')})` }} className='min-h-[700px] '>
            <div className="px-[50px] sm:px-[100px]">
                <div className="banner-content">
                    <h3 className='uppercase text-[30px] text-white font-[300] md:text-[44px] lg:text-[60px]'>30% off</h3>
                    <h2 className='sm:text-[40px] text-[28px] lg:text-[76px] text-[#404040] font-[600] md:text-[50px]'>FAVOURITE CLOTHING</h2>
                    <div className="div">
                        <button className='btn uppercase bg-white rounded-0 p-3 mt-[30px] md:mt-[38px] sm:mt-[10px]'>get collection <GoArrowRight className='d-inline text-[#FF8E78]'/> </button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ ...swiperStyles, backgroundImage: `url(${require('../../../image/hero2.png')})` }} className='min-h-[700px] '>
        <div className="px-[50px] sm:px-[100px]">
                <div className="banner-content">
                    <h3 className='uppercase text-[30px] text-white font-[300] md:text-[44px] lg:text-[60px]'>30% off</h3>
                    <h2 className='text-[40px] lg:text-[76px] text-[#404040] font-[600] md:text-[50px] sm:text-[40px] '>FAVOURITE CLOTHING</h2>
                    <div className="div">
                        <button className='btn uppercase bg-white rounded-0 p-3 mt-[30px] md:mt-[38px] sm:mt-[10px]'>get collection <GoArrowRight className='d-inline text-[#FF8E78]'/> </button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
    </div>
    <div className="custom-prev text-white top-[50%] left-0 absolute z-10 flex items-center cursor-pointer">
        <CgArrowLongLeft  className='text-white me-2' /> <span>Pre</span>    
          </div>
      <div className="custom-next text-white top-[50%] right-0 absolute z-10 flex items-center cursor-pointer">
        <span>Nxt</span><CgArrowLongRight  className='text-white ms-2' />
      </div>
    </>
  )
}

export default HeroSec
