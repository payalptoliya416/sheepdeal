import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaInstagram,FaPinterestP,FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

function TopNavigation() {
  return (
    <>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 bg-[#F5F5F5] pt-[6px] pb-[6px] ps-[25px] pe-[25px]  md:grid hidden">
        <div className='flex ps-[15px] xl:pe-[15px] lg:pe-[0px]  hover:text-[#FF8E78]'>
            <Link  className='text-[13px] text-[#A4A4A4] me-[15px] flex items-center no-underline hover:text-[#FF8E78]'><IoCallOutline className='inline-flex me-2 hover:text-[#FF8E78]'/>(939) 353-1107</Link>
            <Link  className='text-[13px] text-[#A4A4A4]  flex items-center no-underline hover:text-[#FF8E78]'><CiMail  className='inline-flex me-2 text-[14px]'/>support@example.com</Link>
        </div>

        <div className='flex justify-center hidden lg:flex'>
          <p className='text-[#6C6C6C] text-[16px] mb-0 '>FREE SHIPPING - on all orders over $35*</p>
        </div>

        <div className='flex justify-end items-center ps-[15px] pe-[15px]'>
          <ul className="flex m-0 p-0">
            <li className='me-2 hover:[#FF8E78] hover:text-[#FF8E78]'><Link className='text-[12px] text-[#A4A4A4] hover:text-[#FF8E78]'><FaFacebookF /></Link></li>
            <li className='me-2 hover:[#FF8E78]'><Link className='text-[12px] text-[#A4A4A4] hover:[#FF8E78] hover:text-[#FF8E78]'><FaInstagram /></Link></li>
            <li className='me-2 hover:[#FF8E78]'><Link className='text-[12px] text-[#A4A4A4] hover:[#FF8E78] hover:text-[#FF8E78]'><FaPinterestP /></Link></li>
            <li className='me-2 hover:[#FF8E78]'><Link className='text-[12px] text-[#A4A4A4] hover:[#FF8E78] hover:text-[#FF8E78]'><TfiYoutube /></Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default TopNavigation
