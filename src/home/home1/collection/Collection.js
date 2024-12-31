import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import './Collection.css';

function Collection() {

  const data = [
    {
      image: require("../../../image/collection_1.png"),
      name: "FASHION CLOTHING",
    },
    {
      image: require("../../../image/collection_2.png"),
      name: "ACCESSORIES",
    },
    {
      image: require("../../../image/collection_1.png"),
      name: "FASHION CLOTHING",
    },
  ];
  
  const swiperStyles = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className="container mt-[70px] pb-[95px] collection">
        <h3 className='relative text-[36px] pb-[10px] text-center uppercase font-[400] text-[#404040] before:absolute before:content-[""] before:h-[1px] before:w-20  before:bg-black before:bottom-0 before:left-[39%] before:xl:left-[46%] before:lg:left-[45%]  before:md:left-[43%]  after:absolute after:content-[""] after:h-[11px] after:w-[11px] after:border after:border-solid after:border-black after:top-full after:left-[49%]  after:bg-white after:rotate-45 after:translate-y-[-50%] after:translate-x-[-50%] mb-5'>
          collection
        </h3>
        <Swiper
          className="mySwiper"
          pagination={{ clickable: true }}
          modules={[Pagination]}
          slidesPerView={2}
          breakpoints={{
            320: { slidesPerView: 1 },
            375: { slidesPerView: 1 },
            425: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 2 },
            1200: { slidesPerView: 2 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="collection-data relative ms-2 me-2 transition-all duration-1000 overflow-hidden">
                <img src={item.image} alt="" className="img transition-all duration-1000" />
                <div className="absolute xl:top-48 xl:left-48 lg:top-32 lg:left-40 md:top-16 md:left-14 left-16 top-20 text-center flex justify-center items-center flex-col collection-position">
                  <h2 className="lg:text-[36px] font-[400] mb-3 sm:text-[20px]">
                    {item.name}
                  </h2>
                  <Link to="/" className="text-black no-underline">
                    <button className="bg-white pt-[14px] pb-[14px] ps-[35px] pe-[35px] uppercase flex items-center sm:pt-[12px] sm:pb-[12px] sm:ps-[28px] sm:pe-[28px]">
                      Shop now{" "}
                      <HiOutlineArrowRight className="d-inline ms-2 text-[#FF8E78]" />
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container pb-[70px]">
        <Link to="/" className="no-underline text-[#404040]">
          <div
            style={{
              ...swiperStyles,
              backgroundImage: `url(${require("../../../image/collection_b.png")})`,
            }}
            className="pt-[22px] pb-[22px] flex items-center justify-center"
          >
            <h2 className="mb-0 text-[13px] uppercase pr-[20px] pl-[10px] md:pr-[50px] md:pl-[50px] border-r border-solid border-[#FF8E78] font-[400] sm:pr-[30px] sm:pl-[30px] md:text-[30px] lg:text-[36px]">
              BEAUTY awaits within
            </h2>
            <div className="beuty-right sm:pl-[50px] pl-[10px]">
              <h2 className="uppercase lg:text-[36px] font-[400] text-[13px] md:text-[32px]">hats</h2>
              <h4 className="text-[10px] uppercase mb-0 font-normal md:text-[20px]">
                get up to 20% off
              </h4>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Collection;
