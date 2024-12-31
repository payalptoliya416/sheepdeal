import React from 'react'
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaSkype } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="mt-[70px] pt-[70px] pb-[50px] bg-[#F5F5F5]">
       <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="widget">
                <h4 className='uppercase text-[16px] font-[500] mb-[20px]'>CATEGORIES</h4>
                <ul className='p-0 m-0'>
                    <li className='mb-[10px]'><Link className='hover:text-[#FF8E78] duration-600 text-[#A4A4A4] text-[16px] font-[400] no-underline'>Clothing</Link></li>
                    <li className='mb-[10px]'><Link className='hover:text-[#FF8E78] duration-600 text-[#A4A4A4] text-[16px] font-[400] no-underline'>Accessories</Link></li>
                    <li className='mb-[10px]'><Link className='hover:text-[#FF8E78] duration-600 text-[#A4A4A4] text-[16px] font-[400] no-underline'>Women</Link></li>
                    <li className='mb-[10px]'><Link className='hover:text-[#FF8E78] duration-600 text-[#A4A4A4] text-[16px] font-[400] no-underline'>Men</Link></li>
                    <li className='mb-[10px]'><Link className='hover:text-[#FF8E78] duration-600 text-[#A4A4A4] text-[16px] font-[400] no-underline'>Shoes</Link></li>
                    <li className='mb-[10px]'><Link className='hover:text-[#FF8E78] duration-600 text-[#A4A4A4] text-[16px] font-[400] no-underline'>New Arrivals</Link></li>
                    <li className='mb-[10px]'><Link className='hover:text-[#FF8E78] duration-600 text-[#A4A4A4] text-[16px] font-[400] no-underline'>Clearance</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="widget">
                <h4 className='uppercase text-[16px] font-[500] mb-[20px]'>OUR POLICY</h4>
                <ul className='p-0 m-0'>
                    <li className='mb-[10px]'><Link className='text-[#A4A4A4] text-[16px] font-[400] no-underline hover:text-[#FF8E78] duration-600'>Brands</Link></li>
                    <li className='mb-[10px]'><Link className='text-[#A4A4A4] text-[16px] font-[400] no-underline hover:text-[#FF8E78] duration-600'>Contact Us</Link></li>
                    <li className='mb-[10px]'><Link className='text-[#A4A4A4] text-[16px] font-[400] no-underline hover:text-[#FF8E78] duration-600'>About</Link></li>
                    <li className='mb-[10px]'><Link className='text-[#A4A4A4] text-[16px] font-[400] no-underline hover:text-[#FF8E78] duration-600'>Blog</Link></li>
                    <li className='mb-[10px]'><Link className='text-[#A4A4A4] text-[16px] font-[400] no-underline hover:text-[#FF8E78] duration-600'>Blog details</Link></li>
                    <li className='mb-[10px]'><Link className='text-[#A4A4A4] text-[16px] font-[400] no-underline hover:text-[#FF8E78] duration-600'>Comming Soon</Link></li>
                    <li className='mb-[10px]'><Link className='text-[#A4A4A4] text-[16px] font-[400] no-underline hover:text-[#FF8E78] duration-600'>Shop</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="widget">
                <h4 className='uppercase text-[16px] font-[500] mb-[20px]'>GET IN TOUCH</h4>
                <ul className='p-0 m-0'>
                <li className='relative mb-[25px]'>
                    <div className="icon absolute left-0 top-0 text-[#141414] text-[20px]"><IoHomeOutline className='d-inline text-[#A4A4A4]' /></div>
                    <div className="detail pl-[40px] text-[16px] text-[#A4A4A4] leading-[26px] hover:text-[#FF8E78] duration-600">
                     <span>Davis Patrick <br/>P.O. Box 147 2546 Sociosqu Rd.  <br/>Bethlehem Utah 02913</span>
                    </div>
                </li>
                <li className='relative mb-[25px] flex items-center'>
                    <div className="icon absolute left-0 top-0 text-[#141414] text-[20px]"><CiMail  className=' d-inline text-[#A4A4A4]' /></div>
                    <div className="detail pl-[40px] text-[16px] text-[#A4A4A4] leading-[26px] hover:text-[#FF8E78] duration-600">
                        <span>support@example.com</span>
                    </div>
                </li>
                <li className='relative mb-[25px] flex items-center'>
                    <div className="icon absolute left-0 top-0 text-[#141414] text-[20px]"><IoIosCall  className=' d-inline text-[#A4A4A4]' /></div>
                    <div className="detail pl-[40px] text-[16px] text-[#A4A4A4] leading-[26px] hover:text-[#FF8E78] duration-600">
                     <Link className='text-[#A4A4A4] no-underline hover:text-[#FF8E78] duration-600'>(939) 353-1107, (302) 259-2375</Link>
                    </div>
                </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="widget">
                <h4 className='uppercase text-[16px] font-[500] mb-[20px]'>FOLLOW US</h4>
                <ul className='p-0 m-0'>
                    <li className='text-[#A4A4A4] mb-[10px]'>
                        <Link className='no-underline text-[#A4A4A4] hover:text-[#FF8E78] duration-600'><FaFacebookF className='d-inline me-3'/> Facebook</Link>
                    </li>
                    <li className='text-[#A4A4A4] mb-[10px]'>
                        <Link className='no-underline text-[#A4A4A4] hover:text-[#FF8E78] duration-600'><FaTwitter  className='d-inline me-3'/>  Twitter</Link>
                    </li>
                    <li className='text-[#A4A4A4] mb-[10px]'>
                        <Link className='no-underline text-[#A4A4A4] hover:text-[#FF8E78] duration-600'><FaInstagram  className='d-inline me-3'/>  Instagram</Link>
                    </li>
                    <li className='text-[#A4A4A4] mb-[10px]'>
                        <Link className='no-underline text-[#A4A4A4] hover:text-[#FF8E78] duration-600'><FaPinterestP className='d-inline me-3'/> Pinterest</Link>
                    </li>
                    <li className='text-[#A4A4A4] mb-[10px]'>
                        <Link className='no-underline text-[#A4A4A4] hover:text-[#FF8E78] duration-600'><TfiYoutube className='d-inline me-3'/> Youtube</Link>
                    </li>
                    <li className='text-[#A4A4A4] mb-[10px]'>
                        <Link className='no-underline text-[#A4A4A4] hover:text-[#FF8E78] duration-600'><FaSkype className='d-inline me-3'/> Skype</Link>
                    </li>
                </ul>
              </div>
            </div>
        </div>
       </div>
      </footer>
      <div className="footer-bottom container pt-[23px] pb-[23px]">
        <div className="row">
            <div className="col-md-6 self-start">
            <p className='text-[14px] text-[#A4A4A4]'>© Stoon 2020. Powered with <FaHeart className='d-inline text-[#FF8E78] me-1'/>
            <Link className='text-[#A4A4A4] text-[14px] no-underline'>Zwin</Link>.</p>
            </div>
            <div className="col-md-6">
                <ul className='flex items-center m-0 p-0 justify-end'>
                  <li className='mr-[20px]'><Link><img src={require('../image/footer1.png')} className='max-w-[35px]' alt="" /></Link></li>
                  <li className='mr-[20px]'><Link><img src={require('../image/footer2.png')} className='max-w-[35px]' alt="" /></Link></li>
                  <li className='mr-[20px]'><Link><img src={require('../image/footer3.png')} className='max-w-[35px]' alt="" /></Link></li>
                  <li className='mr-[20px]'><Link><img src={require('../image/footer4.png')} className='max-w-[35px]' alt="" /></Link></li>
                  <li className='mr-[20px]'><Link><img src={require('../image/footer5.png')} className='max-w-[35px]' alt="" /></Link></li>
                  <li className='mr-[20px]'><Link><img src={require('../image/footer6.png')} className='max-w-[35px]' alt="" /></Link></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
