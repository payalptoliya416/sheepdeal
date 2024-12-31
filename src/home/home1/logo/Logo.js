import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function Logo() {
    const logo =[
        {
            image: require('../../../image/logo1.png'),
        },
        {
            image: require('../../../image/logo2.png'),
        },
        {
            image: require('../../../image/logo3.png'),
        },
        {
            image: require('../../../image/logo4.png'),
        },
        {
            image: require('../../../image/logo5.png'),
        },
        {
            image: require('../../../image/logo6.png'),
        },
        {
            image: require('../../../image/logo1.png'),
        },
        {
            image: require('../../../image/logo2.png'),
        },
        {
            image: require('../../../image/logo3.png'),
        },
    ]
  return (
    <>
        <div className="container">
         <div className="logo-slider pt-[30px] pb-[80]">
          <div className="border-t border-b flex">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={6}
              breakpoints={{
               
                 320: {
                   slidesPerView: 2,
                 },
                 375: {
                   slidesPerView: 2,
                 },
                 425: {
                   slidesPerView: 2,
                 },
                 768: {
                   slidesPerView: 4,
                 },
                 1024: {
                   slidesPerView: 5,
                 },
               }}>
              {logo.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="mt-[50px] mb-[50px]">
                    <img src={item.image} alt={`Logo ${index}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        </div>
    </>
  )
}

export default Logo
