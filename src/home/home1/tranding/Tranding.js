import React from 'react';
import { PiHeartLight, PiLockSimpleThin } from 'react-icons/pi';
import { BiSolidStar, BiStar } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { GrView } from 'react-icons/gr';
import './Tranding.css';

function Tranding() {
  const data = [
    {
      image: require('../../../image/tranding_1.png'),
      name: 'Faxon Canvas Low-Top Sneaker',
      price: '$450.00',
    },
    {
      image: require('../../../image/tranding_2.png'),
      name: 'Viscose-Cashmere Scarf',
      price: '$450.00',
    },
    {
      image: require('../../../image/tranding_3.png'),
      name: 'Plaid Cotton Oxford Shirt',
      price: '$450.00',
    },
    {
      image: require('../../../image/tranding4.png'),
      name: 'Round neck sweater',
      price: '$450.00',
    },
    {
      image: require('../../../image/tranding5.png'),
      name: 'Faxon Canvas Low-Top Sneaker',
      price: '$450.00',
    },
    {
      image: require('../../../image/tranding_6.png'),
      name: 'Faxon Canvas Low-Top Sneaker',
      price: '$450.00',
    },
  ];

  return (
    <div className="mt-[70px] container">
      <h3 className="relative text-[36px] pb-[10px] text-center uppercase font-[400] text-[#404040] before:absolute before:content-[''] before:h-[1px] before:w-20 before:bg-black before:bottom-0 before:xl:left-[46%] before:lg:left-[45%] before:md:left-[43%] before:left-[39%] after:absolute after:content-[''] after:h-[11px] after:w-[11px] after:border after:border-solid after:border-black after:top-full after:left-[49%] after:bg-white after:rotate-45 after:translate-y-[-50%] after:translate-x-[-50%]">
        TRANDING NOW
      </h3>

      <div className="mt-[25px]">
        <ul className="flex justify-center p-0 m-0">
          <li className="mt-[16px] border border-solid border-[#E9E9E9] sm:text-[14px] rounded-0 uppercase text-black cursor-pointer sm:ps-[67px] sm:pe-[67px] text-[12px] ps-[10px] pe-[10px] pt-[16px] pb-[16px]">
            Best Seller
          </li>
          <li className="mt-[16px] border border-solid border-[#E9E9E9] sm:text-[14px] rounded-0 uppercase text-black cursor-pointer sm:ps-[67px] sm:pe-[67px] text-[12px] ps-[10px] pe-[10px] pt-[16px] pb-[16px]">
            Top Rated
          </li>
          <li className="mt-[16px] border border-solid border-[#E9E9E9] sm:text-[14px] rounded-0 uppercase text-black cursor-pointer sm:ps-[67px] sm:pe-[67px] text-[12px] ps-[10px] pe-[10px] pt-[16px] pb-[16px]">
            Top Sale
          </li>
        </ul>
        <div className="row">
          {data.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
              <div className="thumb relative">
                <div className="mt-[40px]">
                  <Link>
                    <img src={item.image} alt="" className="w-[425px]" />
                  </Link>
                </div>
                <div className="thumb-data pt-4 pb-4">
                  <span className="uppercase text-[14px] text-[#A4A4A4]">
                    BRAND: GEEK
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
                        {item.price}
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
                      Sale 13%
                    </span>
                    <span className="pt-[4px] pr-[8px] pb-[4px] pl-[8px] bg-[#54CABF] text-white text-[12px] uppercase mt-[13px] w-max">
                      New
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tranding;