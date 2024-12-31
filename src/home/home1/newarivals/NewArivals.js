import React from 'react';
import { PiHeartLight, PiLockSimpleThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { GrView } from "react-icons/gr";
import { BiSolidStar,BiStar } from "react-icons/bi";
import './NewArrival.css';

import 'swiper/css';

function NewArivals() {

  const data = [
    {
      id: 1,
      image: require('../../../image/arrival_1.png'),
      name: 'Faxon Canvas Low-Top Sneaker',
      price: '$450.00 ',
    },
    {
      id: 2,
      image: require('../../../image/arrival_2.png'),
      name: 'Viscose-Cashmere Scarf',
      price: '$450.00 ',
    },
    {
      id: 3,
      image: require('../../../image/arrival_3.png'),
      name: 'Plaid Cotton Oxford Shirt',
      price: '$450.00 ',
    },
    {
      id: 4,
      image: require('../../../image/arrival_4.png'),
      name: 'Round neck sweater',
      price: '$450.00 ',
    },
    {
      id: 5,
      image: require('../../../image/arrival_5.png'),
      name: 'Faxon Canvas Low-Top Sneaker',
      price: '$450.00 ',
    },
    {
      id: 6,
      image: require('../../../image/arrival_6.png'),
      name: 'Faxon Canvas Low-Top Sneaker',
      price: '$450.00 ',
    },
  ];

  return (
    <>
      <div className="newarivals mt-[70px] ">
        <h3 className='relative text-[36px] pb-[10px] text-center uppercase font-[400] text-[#404040] before:absolute before:content-[""] before:h-[1px] before:w-20  before:bg-black before:bottom-0 before:left-[40%] before:sm:left-[45%]  before:md:left-[46%] before:lg:left-[47%] before:xl:left-[48%]    after:absolute after:content-[""] after:h-[11px] after:w-[11px] after:border after:border-solid after:border-black after:top-full after:left-[50%]  after:bg-white after:rotate-45 after:translate-y-[-50%] after:translate-x-[-50%]' >new arrivals</h3>
        <div className="container">
        <div className="row">
        {data.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="thumb relative">
                  <div className="mt-[40px]">
                    <Link>
                      <img src={item.image} alt="" className="w-[425px]" />
                    </Link>
                  </div>
                  <div className="thumb-data pt-4 pb-4">
                    <span className="uppercase text-[14px] text-[#A4A4A4]">
                      BRAND:GEEK
                    </span>
                    <ul className="flex p-0 items-center mb-[10px] mt-[7px]">
                      <li className="text-[#FFB503] me-1">
                        <BiSolidStar />
                      </li>
                      <li className="text-[#FFB503] me-1">
                        <BiSolidStar />
                      </li>
                      <li className="text-[#FFB503] me-1">
                        <BiSolidStar />
                      </li>
                      <li className="text-[#A4A4A4] me-1">
                        <BiStar />
                      </li>
                      <li className="text-[#A4A4A4] me-1">
                        <BiStar />
                      </li>
                    </ul>
                    <h6 className="text-[20px] font-[600] text-[#404040]">
                      <Link className="text-[#404040] no-underline">
                        {item.name}
                      </Link>
                    </h6>
                    <div className="flex">
                      <div className="content-cart w-[44px] h-[44px] border border-solid border-[#E9E9E9] text-[20px] mr-[15px] flex justify-center items-center">
                        <Link className="text-zinc-800">
                          <PiLockSimpleThin />
                        </Link>
                      </div>
                      <div className="content-price flex flex-col relative">
                        <span className="old-price line-through text-[#cccccc] text-[16px]">
                          $400.00
                        </span>
                        <span className="new-price text-[16px] text-[#FF8E78] font-[600]">
                          {' '}
                          $450.00
                        </span>
                      </div>
                      <div className="hover-cart absolute bottom-[21px] left-[-30px] opacity-0">
                        <button className="bg-[#FF8E78] text-[20px] mr-[15px] pl-[20px] pr-[20px] pt-[10px] pb-[10px] text-white flex items-center">
                          <Link className="no-underline text-white">
                            <PiLockSimpleThin className="d-inline me-2" />
                            Add to cart
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="thumb-hover-content">
                    <ul className="absolute top-6 right-0 p-0 m-0 opacity-0 side-cart">
                      <li className="mb-[20px]">
                        <div className="text-[#777] text-[25px]">
                          <Link className="text-[#777]">
                            <PiHeartLight />
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="text-[#777] text-[25px]">
                          <Link className="text-[#777]">
                            <GrView />
                          </Link>
                        </div>
                      </li>
                    </ul>
                    <div className="sale-button absolute top-5 left-6 flex flex-col">
                      <span className="pt-[4px] pr-[8px] pb-[4px] pl-[8px] bg-[#FF8E78] text-white text-[12px] uppercase w-max">
                        sale 13%
                      </span>
                      <span className="pt-[4px] pr-[8px] pb-[4px] pl-[8px] bg-[#54CABF] text-white text-[12px] uppercase mt-[13px] w-max">
                        new
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
        <div className="text-center mt-[55px]">
           <Link to='/shopfull'><button className='rounded-0 border border-solid border-[E9E9E9] pt-[18px] pb-[18px] sm:pl-[139px] sm:pr-[139px] text-[16px] hover:bg-[#FF8E78] hover:text-[white] transition-all pl-[70px] pr-[70px]'>View more + </button>
           </Link>  
        </div>
        </div>
      </div>
    </>
  )
}

export default NewArivals
