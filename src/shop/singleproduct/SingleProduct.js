import React from 'react';
import ShopBreadCrumb from '../shopbreadcrumb/ShopBreadCrumb';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BiSolidStar } from "react-icons/bi";
import { BiSolidStarHalf } from "react-icons/bi";
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { PiLockSimpleThin, PiMoney } from 'react-icons/pi';
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import RelatedProduct from '../relatedproduct/RelatedProduct';
import Instagram from '../../home/home1/instagram/Instagram';

function SingleProduct() {

  return (
    <>
      <ShopBreadCrumb/>
      <div className="collection-area mt-[60px]">
        <div className="container">
        <div className="row">
        <div className="col-lg-9 col- md-12">
             <div className="row">
        <div className="col-lg-5 col-md-6">
          <div className="single-item mt-[20px]">
             <img src={require('../../image/collection.png')} className='w-[100%]' alt="" />
          </div>
          <div className="mt-[10px]">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper"  spaceBetween={10}
      slidesPerView={5}>
      <SwiperSlide><img src={require('../../image/collection.png')} alt="" /></SwiperSlide>
      <SwiperSlide><img src={require('../../image/collection.png')} alt="" /></SwiperSlide>
      <SwiperSlide><img src={require('../../image/collection.png')} alt="" /></SwiperSlide>
      <SwiperSlide><img src={require('../../image/collection.png')} alt="" /></SwiperSlide>
      <SwiperSlide><img src={require('../../image/collection.png')} alt="" /></SwiperSlide>
      <SwiperSlide><img src={require('../../image/collection.png')} alt="" /></SwiperSlide>
      <SwiperSlide><img src={require('../../image/collection.png')} alt="" /></SwiperSlide>
      <SwiperSlide><img src={require('../../image/collection.png')} alt="" /></SwiperSlide>
      <SwiperSlide><img src={require('../../image/collection.png')} alt="" /></SwiperSlide>
    </Swiper>
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="content-part mt-[20px]">
            <h3  className='text-[32px] text-[#141414] font-[700]'>Faxon Canvas Low-Top Sneaker Inspired Slim Ankle Leg Jean</h3>
            <p className='text-[42px] font-[600] text-[#FF8E78] leading-[52px]'>$90.00</p>
            <div className="flex items-center">
            <span className='flex items-center'>
            <BiSolidStar  className='text-[#FFB503]'/>
            <BiSolidStar  className='text-[#FFB503]'/>
            <BiSolidStar  className='text-[#FFB503]'/>
            <BiSolidStar  className='text-[#FFB503]'/>
            <BiSolidStarHalf  className='text-[#FFB503]'/>
            </span>
            <span className='text-[#A4A4A4] text-[14px] leading-[22px]'>3 reviews</span>
            </div>
            <p className="specification text-[#A4A4A4] text-[16px] mt-[20px] mb-[20px]">SKU: <b className='text-[#141414]'>0014</b></p>
            <p className="specification text-[#A4A4A4] text-[16px] mt-[20px] mb-[20px]">SKUVENDOR:  <b className='text-[#141414]'>Geek</b></p>
            <p className="specification text-[#A4A4A4] text-[16px] mt-[20px] mb-[20px]">AVAILABILITY:   <b className='text-[#12B800]'>In Stock</b></p>
            <div className="flex">
              <span className='specification text-[#A4A4A4] text-[16px] mt-[20px] mb-[20px]'>SIZE: </span>
              <ul className='p-0 m-0 flex items-center ps-3'>
                <li className='w-[32px] h-[26px] border border-solid border-[#E9E9E9] mr-[10px] mt-[5px] mb-[5px]'><Link className='no-underline text-[#A4A4A4] uppercase flex justify-center items-center'>s</Link></li>
                <li className='w-[32px] h-[26px] border border-solid border-[#E9E9E9] mr-[10px] mt-[5px] mb-[5px]'><Link className='no-underline text-[#A4A4A4] uppercase flex justify-center items-center'>m</Link></li>
                <li className='w-[32px] h-[26px] border border-solid border-[#E9E9E9] mr-[10px] mt-[5px] mb-[5px]'><Link className='no-underline text-[#A4A4A4] uppercase flex justify-center items-center'>x</Link></li>
                <li className='w-[32px] h-[26px] border border-solid border-[#E9E9E9] mr-[10px] mt-[5px] mb-[5px]'><Link className='no-underline text-[#A4A4A4] uppercase flex justify-center items-center'>xl</Link></li>
                <li className='w-[32px] h-[26px] border border-solid border-[#E9E9E9] mr-[10px] mt-[5px] mb-[5px]'><Link className='no-underline text-[#A4A4A4] uppercase flex justify-center items-center'>xs</Link></li>
              </ul>
            </div>
            <div className="flex">
              <span className='specification text-[#A4A4A4] text-[16px] mt-[20px] mb-[20px] uppercase'>Color: </span>
              <ul className='p-0 m-0 flex items-center ps-3'>
           <li className='bg-[#0074D9] w-[23px] h-[23px]  rounded-full mt-[5px] mb-[5px] me-[10px] cursor-pointer'><Link></Link></li>
           <li className='bg-[#000000] w-[23px] h-[23px]  rounded-full mt-[5px] mb-[5px] me-[10px] cursor-pointer'><Link></Link></li>
           <li className='bg-[#FF7F50] w-[23px] h-[23px]  rounded-full mt-[5px] mb-[5px] me-[10px] cursor-pointer'><Link></Link></li>
           <li className='bg-[#8DC04A] w-[23px] h-[23px]  rounded-full mt-[5px] mb-[5px] me-[10px] cursor-pointer'><Link></Link></li>
           <li className='bg-[#A03245] w-[23px] h-[23px]  rounded-full mt-[5px] mb-[5px] me-[10px] cursor-pointer'><Link></Link></li>
           <li className='bg-[#FF8E78] w-[23px] h-[23px]  rounded-full mt-[5px] mb-[5px] me-[10px] cursor-pointer'><Link></Link></li>
           <li className='bg-[#54CABF] w-[23px] h-[23px]  rounded-full mt-[5px] mb-[5px] me-[10px] cursor-pointer'><Link></Link></li>
              </ul>
            </div>
            <p className="specification text-[#A4A4A4] text-[16px] mt-[20px] mb-[20px]">MATERIAL: Cotton, Wool, Silk</p>
            <div className="flex">
            <ButtonGroup aria-label="Basic example" className='bg-[#F5F5F5] w-[140px] border-0'>
              <button className='bg-[#F5F5F5] btn'><span className='text-[26px] font-bold'>-</span></button>
              <button className='bg-[#F5F5F5] btn'>0</button>
              <button className='bg-[#F5F5F5] btn'><span className='text-[26px] font-bold'>+</span></button>
            </ButtonGroup>
            <button className="add-to-cart-btn bg-[#FF8E78] border border-solid border-[#E9E9E9] text-[20px]  lg:pb-3 lg:ps-[30px] lg:pe-[30px] lg:pt-2 p-[10px] text-white ms-[35px]">
              <Link className='text-white no-underline'><PiLockSimpleThin className='d-inline' />  Add to cart</Link>
            </button>
            </div>
            <div className="btn-wrapp mt-[30px]"><Link className='border border-solid border-[#CFCFCF] font[600] uppercase pt-[12px] pb-[12px] lg:ps-[136px] lg:pe-[136px] ps-[108px] pe-[108px] mt-[20px] no-underline text-black'>Buy it now</Link></div>
            <p className="specification text-[#A4A4A4] text-[16px] mt-[20px] mb-[20px]">CATEGORY: <b className='text-[#141414]'> Men, Blazer</b></p>
            <p className="specification text-[#A4A4A4] text-[16px] mt-[20px] mb-[20px]">TAG: <b className='text-[#141414]'>Men, Blazer, Casual, Classic, Elegant</b></p>
            <div className="flex mt-[20px] mb-[20px]">
            <p className="specification text-[#A4A4A4] text-[16px] mt-[20px] mb-[20px]">SHARE:</p>
            <ul className='p-0 ms-[20px] flex mt-[20px] mb-[20px]'>
              <li className='bg-[#3B5998] w-[32px] h-[32px] text-white rounded-[1px] me-[6px] flex justify-center items-center'><Link className='no-underline text-white '><FaFacebookF /></Link></li>
              <li className='bg-[#CB2027] w-[32px] h-[32px] text-white rounded-[1px] me-[6px] flex justify-center items-center'><Link className='no-underline text-white '><FaTwitter /></Link></li>
              <li className='bg-[#1DA1F2] w-[32px] h-[32px] text-white rounded-[1px] me-[6px] flex justify-center items-center'><Link className='no-underline text-white '><FaInstagram /></Link></li>
              <li className='bg-[#C13584] w-[32px] h-[32px] text-white rounded-[1px] flex justify-center items-center'><Link className='no-underline text-white '><FaPinterest  /></Link></li>
            </ul>
            </div>
          </div>
        </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="product-tab">
                <ul className="nav flex flex-wrap p-0 m-0">
                  <li className='mt-[20px] border border-solid border-[#E9E9E9] lg:text-[16px] lg:pt-[17px] lg:pb-[17px]  lg:ps-[26px] lg:pe-[26px] pt-[10px] pb-[10px] ps-[15px] pe-[15px] text-[12px] uppercase '><Link className='no-underline text-black'>DESCRIPTION</Link></li>
                  <li className='mt-[20px] border border-solid border-[#E9E9E9] lg:text-[16px] lg:pt-[17px] lg:pb-[17px]  lg:ps-[26px] lg:pe-[26px] pt-[10px] pb-[10px] ps-[15px] pe-[15px] text-[12px] uppercase'><Link className='no-underline text-black'>ADITIONAL INFORMATION</Link></li>
                  <li className='mt-[20px] border border-solid border-[#E9E9E9] lg:text-[16px] lg:pt-[17px] lg:pb-[17px]  lg:ps-[26px] lg:pe-[26px] pt-[10px] pb-[10px] ps-[15px] pe-[15px] text-[12px] uppercase'><Link className='no-underline text-black'>SHIPPING</Link></li>
                  <li className='mt-[20px] border border-solid border-[#E9E9E9] lg:text-[16px] lg:pt-[17px] lg:pb-[17px]  lg:ps-[26px] lg:pe-[26px] pt-[10px] pb-[10px] ps-[15px] pe-[15px] text-[12px] uppercase'><Link className='no-underline text-black'>WHY BUY FROM US</Link></li>
                  <li className='mt-[20px] border border-solid border-[#E9E9E9] lg:text-[16px] lg:pt-[17px] lg:pb-[17px]  lg:ps-[26px] lg:pe-[26px] pt-[10px] pb-[10px] ps-[15px] pe-[15px] text-[12px] uppercase'><Link className='no-underline text-black'>REVIEWS</Link></li>
                </ul>
              </div>
              <div className="tab-content mt-[40px]">
                <p className='text-[#666]'>Silver, metallic-blue and metallic-lavender silk-blend jacquard, graphic pattern, pleated ruffle along collar, long sleeves with button-fastening cuffs, buckle-fastening silver skinny belt, large pleated rosettes at hips. Dry clean. Zip and hook fastening at back. 100% silk. Specialist clean</p>
                <ul className='m-0 p-0 mt-[30px]'>
                  <li className='mb-[15px] text-[16px]'><Link className='no-underline text-black'><MdOutlineArrowRightAlt  className='d-inline' /> Lightweight soft-touch woven </Link></li>
                  <li className='mb-[15px] text-[16px]'><Link className='no-underline text-black'><MdOutlineArrowRightAlt  className='d-inline' />  High-rise waist </Link></li>
                  <li className='mb-[15px] text-[16px]'><Link className='no-underline text-black'><MdOutlineArrowRightAlt  className='d-inline' />   Zip fly with hook and button fastening </Link></li>
                  <li className='mb-[15px] text-[16px]'><Link className='no-underline text-black'><MdOutlineArrowRightAlt  className='d-inline' />  Slip pockets </Link></li>
                  <li className='mb-[15px] text-[16px]'><Link className='no-underline text-black'><MdOutlineArrowRightAlt  className='d-inline' /> Waist belt</Link></li>
                  <li className='mb-[15px] text-[16px]'><Link className='no-underline text-black'><MdOutlineArrowRightAlt  className='d-inline' /> Relaxed fit </Link></li>
                  <li className='mb-[15px] text-[16px]'><Link className='no-underline text-black'><MdOutlineArrowRightAlt  className='d-inline' /> Machine wash </Link></li>
                  <li className='mb-[15px] text-[16px]'><Link className='no-underline text-black'><MdOutlineArrowRightAlt  className='d-inline' /> 76% Polyester, 18% Viscose, 6% Elastane</Link></li>
                  <li className='mb-[15px] text-[16px]'><Link className='no-underline text-black'><MdOutlineArrowRightAlt  className='d-inline' /> Our model wears a UK 8/ EU 36/ US 4 and is 174 cm/5'8.5” tall</Link></li>
                </ul>
              </div>
            </div>
          </div>
             </div>
        </div>
        <div className="col-lg-3 col-md-12">
         <div className="widget mt-[20px]">
          <div className="mb-[50px]">
             <div className="flex">
             <FiTruck className='text-[#ff8e78] text-[22px]'/>
             <h4 className='text-[#141414] text-[20px] ml-[20px] font-[600]'>Delivery</h4>
             </div>
             <span className='text-[#A4A4A4] text-[16px] '>Free shipping on orders over $89.</span>
          </div>
          <div className="mb-[50px]">
             <div className="flex">
             <TfiHeadphoneAlt  className='text-[#ff8e78] text-[22px]'/>
             <h4 className='text-[#141414] text-[20px] ml-[20px] font-[600]'>Support 24/7</h4>
             </div>
             <span className='text-[#A4A4A4] text-[16px] '>Contact us 24 hours a day, 7 days a week.</span>
          </div>
          <div className="mb-[50px]">
             <div className="flex">
             <PiMoney  className='text-[#ff8e78] text-[22px]'/>
             <h4 className='text-[#141414] text-[20px] ml-[20px] font-[600]'>Return</h4>
             </div>
             <span className='text-[#A4A4A4] text-[16px] '>Simply return it within 30 days for an exchange.</span>
          </div>
         </div>
         <div className="widget-checkout mb-[60px] relative before:absolute before:border before:border-solid before:border-[#E9E9E9] before:w-[100%] before:h-[100%] before:content-[''] before:z-[-1]">
           <h4 className='ps-[40px] pe-[40px] ms-[10px] me-[10px] bg-white font-[600] text-[22px] text-center text-[#141414]'>GUARANTED SAFE CHECKOUT</h4>
           <ul className='m-0 flex flex-wrap p-[20px]'>
            <li className='mt-[5px] mr-[5px]'><Link><img src={require('../../image/paypal.png')} alt="" /></Link></li>
            {/* <li className='mt-[5px] mr-[5px]'><Link><img src={require('../../image/safe.png')} alt="" /></Link></li> */}
            <li className='mt-[5px] mr-[5px]'><Link><img src={require('../../image/p3.png')} alt="" /></Link></li>
            <li className='mt-[5px] mr-[5px]'><Link><img src={require('../../image/p4.png')} alt="" /></Link></li>
            <li className='mt-[5px] mr-[5px]'><Link><img src={require('../../image/p5.png')} alt="" /></Link></li>
            <li className='mt-[5px] mr-[5px]'><Link><img src={require('../../image/p6.png')} alt="" /></Link></li>
           </ul>
         </div>
           <div className="widget-img mb-[20px]">
            <Link><img src={require('../../image/wedget.png')} alt="" /></Link>
           </div>
           <div className="seller-widget">
            <h4 className='text-[20px] font-[600]  text-[#404040]'>Top Product</h4>
            <div className='seller-content'>
                 <div className="flex mt-[20px]">
                    <div className="thumb mr-[10px]">
                        <img src={require('../../image/page1.png')} alt="" />
                    </div>
                    <div className="content">
                        <h6 className='text-[20px] font-[600] pt-2'>Men's Crew T-shirt</h6>
                        <span className='font-[400] text-[#A4A4A4] text-[16px]'>$35.00</span>
                    </div>
                 </div>
                 <div className="flex mt-[20px]">
                    <div className="thumb mr-[10px]">
                        <img src={require('../../image/page2.png')} alt="" />
                    </div>
                    <div className="content">
                        <h6 className='text-[20px] font-[600] pt-2'>Men's V-neck Pima</h6>
                        <span className='font-[400] text-[#A4A4A4] text-[16px]'>$35.00</span>
                    </div>
                 </div>
                 <div className="flex mt-[20px]">
                    <div className="thumb mr-[10px]">
                        <img src={require('../../image/page3.png')} alt="" />
                    </div>
                    <div className="content">
                        <h6 className='text-[20px] font-[600] pt-2'>Men's Crew T-shirt</h6>
                        <span className='font-[400] text-[#A4A4A4] text-[16px]'>$35.00</span>
                    </div>
                 </div>
            </div>
           </div>
        </div>
        </div>
        </div>
      </div>
      <div className="related-product">
        <RelatedProduct/>
      </div>
      <Instagram/>
    </>
  )
}

export default SingleProduct
