import React from 'react';
import { IoCallOutline, IoLocation } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { LuMailOpen } from "react-icons/lu";

function ForQuary() {
  return (
    <>
      <div className="mt-[80px]">
       <div className="container">
            <div className="text-center">
                <h3 className='relative text-[24px] sm:text-[28px] md:text-[36px] pb-[10px] text-center uppercase font-[400] text-[#404040] before:absolute before:content-[""] before:h-[1px] before:w-20  before:bg-black before:bottom-0 before:left-[40%] before:sm:left-[44%] before:md:left-[45%]  before:lg:left-[46%] before:xl:left-[47%]  after:absolute after:content-[""] after:h-[11px] after:w-[11px] after:border after:border-solid after:border-black after:top-full after:left-[50%]  after:bg-white after:rotate-45 after:translate-y-[-50%] after:translate-x-[-50%]'>CONTACT US FOR ANY QUARY</h3>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="single-contact-box mt-[40px] mb-[80px]">
                     <div className="icon w-[60px] h-[60px] bg-[#FF8E78] rounded-[5px]  mb-[40px] flex justify-center items-center">
                     <IoCallOutline className='text-[32px] text-white' />
                     </div>
                     <div className="flex flex-col">
                     <Link href="tel:+12345678910" className='no-underline text-[16px] text-[#141414] mb-2'>+123456 78910</Link>
                     <Link href="tel:+12345678910" className='no-underline text-[16px] text-[#141414] mb-2'>+123456 78910</Link>
                     <span>Mobile</span>
                     </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-contact-box mt-[40px] mb-[80px]">
                     <div className="icon w-[60px] h-[60px] bg-[#FF8E78] rounded-[5px]  mb-[40px] flex justify-center items-center">
                     <LuMailOpen className='text-[32px] text-white' />
                     </div>
                     <div className="flex flex-col">
                     <Link  className='no-underline text-[16px] text-[#141414] mb-2'>brandfashion@email.com</Link>
                     <Link className='no-underline text-[16px] text-[#141414] mb-2'>support@zwin.io</Link>
                     <span>Email</span>
                     </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-contact-box mt-[40px] mb-[80px]">
                     <div className="icon w-[60px] h-[60px] bg-[#FF8E78] rounded-[5px]  mb-[40px] flex justify-center items-center">
                     <IoLocation  className='text-[32px] text-white' />
                     </div>
                     <div className="flex flex-col">
                    <span className='mb-2'>125/A, CA Commercial Area </span>
                    <span className='mb-2'>California, USA</span>
                     <span>Mobile</span>
                     </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
    </>
  )
}

export default ForQuary
