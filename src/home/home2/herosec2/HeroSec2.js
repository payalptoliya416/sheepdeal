import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { CgArrowLongLeft,CgArrowLongRight } from "react-icons/cg";

function HeroSec2() {
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
        <SwiperSlide style={{ ...swiperStyles, backgroundImage: `url(${require('../../../image/home2.png')})` }} className='min-h-[900px] flex justify-center items-center'>
                <div className="banner-content text-center">
                    <h3 className='uppercase text-[30px] text-white font-[300] md:text-[44px] lg:text-[60px]'>Find Your</h3>
                    <h2 className='sm:text-[40px] text-[28px] lg:text-[76px] font-[600] md:text-[50px] uppercase text-white'>Everyday fashion</h2>
                    <div className="div">
                        <button className='btn uppercase bg-black text-white rounded-0 pt-3 pb-3 ps-5 mt-[30px] md:mt-[38px] sm:mt-[10px]'>shop now </button>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ ...swiperStyles, backgroundImage: `url(${require('../../../image/home2-1.png')})` }} className='min-h-[900px] flex justify-center items-center'>
                <div className="banner-content text-center">
                    <h3 className='uppercase text-[30px] text-white font-[300] md:text-[44px] lg:text-[60px]'>Find Your</h3>
                    <h2 className='sm:text-[40px] text-[28px] lg:text-[76px] font-[600] md:text-[50px] uppercase text-white'>Everyday fashion</h2>
                    <div className="div">
                        <button className='btn uppercase bg-black text-white rounded-0 pt-3 pb-3 ps-5 mt-[30px] md:mt-[38px] sm:mt-[10px]'>shop now </button>
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

export default HeroSec2
