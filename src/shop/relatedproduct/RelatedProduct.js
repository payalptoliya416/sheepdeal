import React from 'react';
import { BiSolidStar, BiStar } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './RelatedProduct.css';

function RelatedProduct() {

    const data = [
        {
            image: require('../../image/related1.png'),
            name:'Faxon Canvas Low-Top Sneaker',
            price:'$450.00 ',
        },
        {
            image: require('../../image/related2.png'),
            name:'Faxon Canvas Low-Top Sneaker',
            price:'$450.00 ',
        },
        {
            image: require('../../image/related3.png'),
            name:'Faxon Canvas Low-Top Sneaker',
            price:'$450.00 ',
        },
        {
            image: require('../../image/related4.png'),
            name:'Faxon Canvas Low-Top Sneaker',
            price:'$450.00 ',
        },
        {
            image: require('../../image/related5.png'),
            name:'Faxon Canvas Low-Top Sneaker',
            price:'$450.00 ',
        },
    ]

  return (
    <>
    <div className="relatedproduct">
    <div className="container">
        <div className="pt-[80px] pb-[60px] mt-[80px] border-t border-solid border-[#E9E9E9] border-b">
           <div className="title">
            <h4 className='text-[28px] font-[600] mb-[-48px]'>RELATED PRODUCTS</h4>
           </div>
           <Swiper
      spaceBetween={20}
      navigation={true} modules={[Navigation]} className="mySwiper"
      slidesPerView={1}
      breakpoints={{
         1099: {
           slidesPerView: 4,
         },
         1024: {
           slidesPerView: 3,
         },
         768: {
           slidesPerView: 2,
         },
       }}
       style={{paddingTop:'28px'}}
    >
        {
            data.map((item)=>{
                return(
                    <>
            <SwiperSlide><div className="thumb relative mt-[40px]">
            <div className="mt-[40px]">
              <Link><img src={item.image} alt="" className='w-[425px]' /></Link>
            </div>
            <div className="thumb-data pt-4 pb-4 text-center">
                <span className='uppercase text-[14px] text-[#A4A4A4]'>BRAND:GEEK</span>
                <ul className='flex p-0 items-center  mb-[10px] mt-[7px] justify-center'>
                  <li className='text-[#FFB503] me-1'><BiSolidStar /></li>
                  <li className='text-[#FFB503] me-1'><BiSolidStar /></li>
                  <li className='text-[#FFB503] me-1'><BiSolidStar /></li>
                  <li className='text-[#A4A4A4] me-1'><BiStar /></li>
                  <li className='text-[#A4A4A4] me-1'><BiStar /></li>
                </ul>
                <h6 className='text-[20px] font-[600] text-[#404040]'><Link className='text-[#404040]  no-underline hover:text-[#FF8E78] transition-all duration-[0.5s]'>{item.name}</Link></h6>
                <span className='text-[20px] font-[600] text-[#FF8E78]'>${item.price}</span>
            </div>
            
            <div className="sale-button absolute top-5 left-6 flex flex-col">
              <span className='pt-[4px] pr-[8px] pb-[4px] pl-[8px] bg-[#FF8E78] text-white text-[12px] uppercase w-max'>sale 13%</span>
              <span className='pt-[4px] pr-[8px] pb-[4px] pl-[8px] bg-[#54CABF] text-white text-[12px] uppercase mt-[13px] w-max'>new</span>
            </div>
             </div>
             </SwiperSlide>
                    </>
                )
            })
        }
    </Swiper>
        </div>
    </div>  
    </div>
    </>
  )
}

export default RelatedProduct
