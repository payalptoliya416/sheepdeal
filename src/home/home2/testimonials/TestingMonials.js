import React from 'react';
import { BiSolidStar } from 'react-icons/bi';
import { PiLockSimpleThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Testimonials.css';

function TestingMonials() {
    
  return (
    <>
      <div className="mt-[30px] pb-[30px] testimonials-home2">
        <div className="container">
            <div className="mb-30">
                
                <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper pb-5"
      >
        <SwiperSlide>
          <div className="row">
                    <div className="col-md-6 ">
                        <div className="test-thumb sm:mb-0 mb-[30px]">
                            <img src={require('../../../image/testimonials.png')} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 self-center">
                        <div className="test-data text-center">
                             <div className="test-content lg:ps-[70px] lg:pe-[70px] pe-[30px] ps-[30px]">
                                  <h6 className='text-[16px] font-medium text-[#141414]'>EVERYDAY ITEMS AND MORE</h6>
                                  <h3 className='text-[42px] text-[#141414] font-[700]' >LATEST COLLECTION</h3>
                                  <p className='mt-[30px] mb-[30px] text-[#666666]'>The bay has a rich surfing history and some legendary waves. Camper vans and board short wearing types line the seafront from dawn until dusk.</p>
                                  <ul className="flex p-0 items-center justify-center mb-[13px] mt-[7px] space-x-1">
                                    <li className="text-[#FFB503] ">
                                    <BiSolidStar />
                                    </li>
                                    <li className="text-[#FFB503] ">
                                    <BiSolidStar />
                                    </li>
                                    <li className="text-[#FFB503] ">
                                    <BiSolidStar />
                                    </li>
                                    <li className="text-[#FFB503] ">
                                    <BiSolidStar />
                                    </li>
                                    <li className="text-[#FFB503] ">
                                    <BiSolidStar />
                                    </li>
                                </ul>
                                <span className='text-[36px] font-[700] mb-3'>$292</span>
                                <div className="flex justify-center">
                                <button className="bg-[#54CABF] text-[20px] mr-[15px] pl-[20px] pr-[20px] pt-[10px] pb-[10px] text-white flex items-center mt-2 ">
                        <Link className="no-underline text-white">
                          <PiLockSimpleThin className="d-inline me-2" />
                          Add to cart
                        </Link>
                      </button>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
       </SwiperSlide>
        <SwiperSlide>
          <div className="row">
                    <div className="col-md-6">
                        <div className="test-thumb">
                            <img src={require('../../../image/testimonials.png')} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 self-center">
                        <div className="test-data text-center">
                             <div className="test-content ps-[70px] pe-[70px]">
                                  <h6 className='text-[16px] font-medium text-[#141414]'>EVERYDAY ITEMS AND MORE</h6>
                                  <h3 className='text-[42px] text-[#141414] font-[700]'>LATEST COLLECTION</h3>
                                  <p className='mt-[30px] mb-[30px] text-[#666666]'>The bay has a rich surfing history and some legendary waves. Camper vans and board short wearing types line the seafront from dawn until dusk.</p>
                                  <ul className="flex p-0 items-center justify-center mb-[13px] mt-[7px] space-x-1">
                                    <li className="text-[#FFB503] ">
                                    <BiSolidStar />
                                    </li>
                                    <li className="text-[#FFB503] ">
                                    <BiSolidStar />
                                    </li>
                                    <li className="text-[#FFB503] ">
                                    <BiSolidStar />
                                    </li>
                                    <li className="text-[#FFB503] ">
                                    <BiSolidStar />
                                    </li>
                                    <li className="text-[#FFB503] ">
                                    <BiSolidStar />
                                    </li>
                                </ul>
                                <span className='text-[36px] font-[700] mb-3'>$292</span>
                                <div className="flex justify-center">
                                <button className="bg-[#54CABF] text-[20px] mr-[15px] pl-[20px] pr-[20px] pt-[10px] pb-[10px] text-white flex items-center mt-2 ">
                        <Link className="no-underline text-white">
                          <PiLockSimpleThin className="d-inline me-2" />
                          Add to cart
                        </Link>
                      </button>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
       </SwiperSlide>
      </Swiper>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default TestingMonials
