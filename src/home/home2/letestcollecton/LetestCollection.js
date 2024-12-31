import React from 'react';
import { GrView } from 'react-icons/gr';
import { PiHeartLight, PiLockSimpleThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';

function LetestCollection() {

      const data = [
        {
          image: require('../../../image/arrival_1.png'),
          price: '$450.00',
        },
        {
          image: require('../../../image/arrival_3.png'),
          price: '$450.00',
        },
        {
          image: require('../../../image/tranding4.png'),
          price: '$450.00',
        },
        
      ];
  return (
    <>
      <div className="mt-[70px]">
         <div className="container">
            <div className="text-center sec-title-02">
              <h6 className='text-[16px] font-[600] text-[#141414] tracking-wider'>EVERYDAY ITEMS AND MORE</h6>
              <h3 className='text-[42px] font-[700] text[#141414] mb-0' >LATEST COLLECTION</h3>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ul className='p-0 m-0 flex justify-center items-center flex-wrap'>
                        <li className='mt-[20px] mr-[20px] ms-[20px] text-center'><Link className='text-[25px] sm:text-[30px] text-[#CCCCCC] no-underline'>Hot Collection</Link></li>
                        <li className='mt-[20px] mr-[20px] ms-[20px]'><Link className='text-[25px] sm:text-[30px] text-[#CCCCCC] no-underline'>Best Sellers</Link></li>
                        <li className='mt-[20px] mr-[20px] ms-[20px]'><Link className='text-[25px] sm:text-[30px] text-[#CCCCCC] no-underline'>Sale Product</Link></li>
                    </ul>
                </div>
            </div>
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
                    <div className="mt-[20px]">
                      <h6 className='text-[20px] font-[700] hover:text-[#FF8E78]'><Link className='text-[#A4A4A4] transition-all duration-[0.5s] hover:text-[#FF8E78] no-underline'>Faxon Canvas Low-Top Sneaker</Link></h6>
                      <div className="product-coutdown text-center bg-white flex">
                           <div className='pt-[15px] pb-[15px] rounded-[10px] flex flex-col mr-[12%]'>
                            <span className='text-[26px] text-[#141414] font-[600]'>00</span>
                            <div className='text-[12px] text-[#A4A4A4] '>Days</div>
                           </div>
                           <div className='pt-[15px] pb-[15px] rounded-[10px] flex flex-col mr-[12%]'>
                            <span className='text-[26px] text-[#141414] font-[600]'>00</span>
                            <div className='text-[12px] text-[#A4A4A4] '>Days</div>
                           </div>
                           <div className='pt-[15px] pb-[15px] rounded-[10px] flex flex-col mr-[12%]'>
                            <span className='text-[26px] text-[#141414] font-[600]'>00</span>
                            <div className='text-[12px] text-[#A4A4A4] '>Days</div>
                           </div>
                           <div className='pt-[15px] pb-[15px] rounded-[10px] flex flex-col mr-[12%]'>
                            <span className='text-[26px] text-[#141414] font-[600]'>00</span>
                            <div className='text-[12px] text-[#A4A4A4] '>Days</div>
                           </div>
                      </div>
                    </div>
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
                      <span className="new-price text-[16px] text-[#54CABF] font-[600]">
                        {' '}
                        {item.price}
                      </span>
                    </div>
                    <div className="hover-cart absolute bottom-[21px] left-[-30px] opacity-0">
                      <button className="bg-[#54CABF] text-[20px] mr-[15px] pl-[20px] pr-[20px] pt-[10px] pb-[10px] text-white flex items-center">
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
    </>
  )
}

export default LetestCollection
