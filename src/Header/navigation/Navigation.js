import React, { useEffect, useRef, useState } from 'react';
import {  Link } from 'react-router-dom';
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";
import { CiMail, CiSearch, CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiLockSimpleThin } from "react-icons/pi";
import { HiBars3 } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { Dropdown, DropdownButton, Form, FormControl, Offcanvas} from 'react-bootstrap';
import { IoIosCall,IoMdMail,IoMdClose } from "react-icons/io";
import { FaLongArrowAltRight,FaFacebookF,FaInstagram , FaTwitter,FaPinterestP } from "react-icons/fa";

import './Navigation.css';

function Navigation() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const dropdownRef = useRef(null);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);
  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);
  const closeNavbar = () => setIsNavbarOpen(false);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeNavbar();
    }
  };

  const handleResize = () => {
    const isResponsive = window.innerWidth <= 768;

    if (!isResponsive !== isNavbarOpen) {
      setIsNavbarOpen(isResponsive);
    }

    if (window.innerWidth <= 768) {
      setShowOffcanvas(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
        <div className="grid lg:grid-cols-4 grid-cols-2 pt-[22px] pb-[22px] ps-[20px] pe-[20px] sm:ps-[40px] sm:pe-[40px] relative">
          <div className="navbar-brand">
            <Link to="/">
              <img src={require('../../image/logo.png')} alt="" className='max-w-[100%]' />
            </Link>
          </div>
          <nav className="hidden lg:flex col-span-2 justify-center items-center">
            <ul className="flex m-0 p-0 items-center">
              <li className="uppercase  me-2 ms-2 relative nav-item">
                <Link className='nav-link hover:text-[#FF8E78] transition-all duration-500 text-[#000]  text-[14px] lg:text-[14px] xl:text-[16px] font-[400] no-underline flex items-center group'>Home <MdKeyboardArrowDown className="inline-flex" /></Link>
                <div className="opacity-0 sub-menu absolute bg-white pt-[5px] pb-[5px] ps-[15px] pe-[15px] shadow z-[-1]  min-w-[260px] top-10">
                <ul className='m-0 p-0 '>
                  <li className='border-b pt-[12px] pb-[12px]'><Link to='/' className='no-underline text-black text-[15px] font-[600] pt-[12px] pb-[12px] '> Home 01</Link></li>
                  <li  className='border-b pt-[12px] pb-[12px]'><Link to='/home2' className='no-underline text-black text-[15px] font-[600]'> Home 02</Link></li>
                  <li  className='border-b pt-[12px] pb-[12px]'><Link className='no-underline text-black text-[15px] font-[600]'> Home 03</Link></li>
                  <li  className='border-b pt-[12px] pb-[12px]'><Link className='no-underline text-black text-[15px] font-[600]'> Home 04</Link></li>
                  <li  className=' pt-[12px] pb-[12px]'><Link className='no-underline text-black text-[15px] font-[600]'> Home 05</Link></li>
                </ul>
              </div>
              </li>
              <li className="uppercase  me-2 ms-2 relative  nav-item">
                <Link className='nav-link text-[#000] hover:text-[#FF8E78] transition-all duration-500 text-[14px] lg:text-[14px] xl:text-[16px] font-[400] no-underline flex items-center '>shop <MdKeyboardArrowDown className="inline-flex" /></Link>
                <div className="opacity-0 sub-menu absolute bg-white pt-[5px] pb-[5px] ps-[15px] pe-[15px] shadow z-[-1]  min-w-[260px] top-10">
                <ul className='m-0 p-0 '>
                  <li className='border-b pt-[12px] pb-[12px]'><Link to='/shopgrid' className='no-underline text-black text-[15px] font-[600] pt-[12px] pb-[12px]'>Shop grid</Link></li>
                  <li  className='border-b pt-[12px] pb-[12px]'><Link to='/shoplist' className='no-underline text-black text-[15px] font-[600]'>Shop List</Link></li>
                  <li  className='pt-[12px] pb-[12px]'><Link to='shopfull' className='no-underline text-black text-[15px] font-[600]'> Shop full</Link></li>
                </ul>
              </div>
              </li>
              <li className="uppercase me-2 ms-2   relative  nav-item">
                <Link  className='nav-link text-[#000] hover:text-[#FF8E78] transition-all duration-500 text-[14px] lg:text-[14px] xl:text-[16px] font-[400] no-underline flex items-center'>pages <MdKeyboardArrowDown className="inline-flex" /></Link>
                <div className="opacity-0 sub-menu absolute bg-white pt-[5px] pb-[5px] ps-[15px] pe-[15px] shadow z-[-1]  min-w-[260px] top-10">
                <ul className='m-0 p-0 '>
                  <li className='border-b pt-[12px] pb-[12px]'><Link className='no-underline text-black text-[15px] font-[600] pt-[12px] pb-[12px] '> Bolg</Link></li>
                  <li  className='border-b pt-[12px] pb-[12px]'><Link className='no-underline text-black text-[15px] font-[600]'> Blog Details</Link></li>
                  <li  className='border-b pt-[12px] pb-[12px]'><Link to='singleproduct' className='no-underline text-black text-[15px] font-[600]'> Single Product</Link></li>
                  <li  className='border-b pt-[12px] pb-[12px]'><Link to='cartpage' className='no-underline text-black text-[15px] font-[600]'> Shopping Cart</Link></li>
                  <li  className='border-b pt-[12px] pb-[12px]'><Link className='no-underline text-black text-[15px] font-[600]'> FAQ</Link></li>
                  <li  className='border-b pt-[12px] pb-[12px]'><Link className='no-underline text-black text-[15px] font-[600]'> Error</Link></li>
                  <li  className=' pt-[12px] pb-[12px]'><Link className='no-underline text-black text-[15px] font-[600]'> Comming  Soon</Link></li>
                </ul>
              </div>
              </li>
              <li className="uppercase  me-2 ms-2 ">
                <Link  className='hover:text-[#FF8E78] text-[#000] transition-all duration-500  text-[14px] lg:text-[14px] xl:text-[16px] font-[400] no-underline flex items-center'>about us </Link>
              </li>
              <li className="uppercase  me-2 ms-2 ">
                <Link to="/contactus" className='hover:text-[#FF8E78] text-[#000] transition-all duration-500  text-[14px] lg:text-[14px] xl:text-[16px] font-[400] no-underline flex items-center'>contact us </Link>
              </li>
            </ul>
          </nav>
          <div>
            <ul className='flex justify-end items-center m-0 p-0'>
                <li className='me-2 ms-2 text-[24px]'><Link className='text-[#000] hover:text-[#FF8E78] '><CiSearch  /></Link></li>
                <li className='me-2 ms-2 text-[24px]'><Link to='/information'  className='text-[#000] hover:text-[#FF8E78] '><CiUser   /></Link></li>
                <li className='me-2 ms-2 text-[24px]'><Link className='text-[#000] hover:text-[#FF8E78] relative'><CiHeart  /><span className='text-[12px] absolute bottom-[-4px] right-0 bg-[#FF8E78] rounded w-[15px] h-[15px] flex items-center justify-center text-white'>0</span></Link></li>
                <li className='me-2 ms-2 text-[24px] relative'><Link className='text-[#000] hover:text-[#FF8E78]'><PiLockSimpleThin /><span className='text-[12px] absolute bottom-[-4px] right-[-1px] bg-[#FF8E78] rounded w-[15px] h-[15px] flex items-center justify-center text-white'>0</span></Link></li>
                <li className='me-2 ms-2 text-[24px] hidden lg:block' onClick={handleOffcanvasShow}><Link className='text-[#000] hover:text-[#FF8E78]'><HiBars3  /></Link></li>
                <li className='me-2 ms-2 text-[24px] lg:hidden'><Link className='text-[#000] hover:text-[#FF8E78]' onClick={toggleNavbar}> {isNavbarOpen ? <MdClose className="text-2xl" /> : <HiBars3 className="text-2xl" />}</Link></li>
            </ul>
          </div>
        </div>
          {
            isNavbarOpen? <>
        <div className={`responsive-nav bg-[#404040] ms-2 me-2 p-2 pt-4  transition-all absolute top-26 left-4 sm:left-6 w-[90%] z-20 menu translate-y-[-100%]`}   style={{ transform: isNavbarOpen ? 'translateY(0)' : 'translateY(-100%)' }}>
             <ul className='p-0 m-0'>
             <li className="uppercase  me-2 ms-2 mb-4">
             <DropdownButton id="dropdown-basic-button" title="HOME" className='text-[#fff]  text-[14px] lg:text-[14px] xl:text-[16px] font-[400] no-underline flex items-center '>
      <Dropdown.Item href='/'  className='capitalize border-b border-solid border-gray-500'>Home1</Dropdown.Item>
      <Dropdown.Item href='/home2' className='capitalize'>Home2</Dropdown.Item>
      <Dropdown.Item href='/' className='capitalize'>Home3</Dropdown.Item>
      <Dropdown.Item href='/' className='capitalize'>Home4</Dropdown.Item>
    </DropdownButton>
                {/* <Link to="/" className='text-[#fff]  text-[14px] lg:text-[14px] xl:text-[16px] font-[400] no-underline flex items-center'>Home <MdKeyboardArrowDown className="inline-flex" /></Link> */}
              </li>
             <li className="uppercase  me-2 ms-2 mb-4">
             <DropdownButton id="dropdown-basic-button" title="SHOP" className='text-[#fff]  text-[14px] lg:text-[14px] xl:text-[16px] font-[400] no-underline flex items-center '>
      <Dropdown.Item href='/shopgrid'  className='capitalize'>Shop Grid</Dropdown.Item>
      <Dropdown.Item href='/shoplist' className='capitalize'>Shop List</Dropdown.Item>
      <Dropdown.Item href='/shopfull' className='capitalize'>Shop Full</Dropdown.Item>
    </DropdownButton>
                {/* <Link to="/" className='text-[#fff]  text-[14px] lg:text-[14px] xl:text-[16px] font-[400] no-underline flex items-center'>Shop <MdKeyboardArrowDown className="inline-flex" /></Link> */}
              </li>
             <li className="uppercase  me-2 ms-2 mb-4">
             <DropdownButton id="dropdown-basic-button" title="PAGES" className='text-[#fff]  text-[14px] lg:text-[14px] xl:text-[16px] font-[400] no-underline flex items-center '>
      <Dropdown.Item href='/'  className='capitalize'>Blogs</Dropdown.Item>
      <Dropdown.Item href='/' className='capitalize'>Blog Details</Dropdown.Item>
      <Dropdown.Item href='/singleproduct' className='capitalize'>Single Product</Dropdown.Item>
      <Dropdown.Item href='/cartpage' className='capitalize'>Shoping Cart</Dropdown.Item>
      <Dropdown.Item href='/' className='capitalize'>FAQ</Dropdown.Item>
      <Dropdown.Item href='/' className='capitalize'>Error</Dropdown.Item>
      <Dropdown.Item href='/' className='capitalize'>Comming Soon</Dropdown.Item>
    </DropdownButton>
                {/* <Link to="/" className='text-[#fff]  text-[14px] lg:text-[14px] xl:text-[16px] font-[400] no-underline flex items-center'>pages<MdKeyboardArrowDown className="inline-flex" /></Link> */}
              </li>
             <li className="uppercase  me-2 ms-2 mb-4">
                <Link to="/" className='text-[#fff]  text-[14px] lg:text-[14px] xl:text-[16px] font-[400] no-underline flex items-center pt-[6px] pb-[6px] ps-[12px] pe-[12px]'>abut us</Link>
              </li>
             <li className="uppercase  me-2 ms-2 mb-4">
                <Link to="/contactus" className='text-[#fff]  text-[14px] lg:text-[14px] xl:text-[16px] font-[400] no-underline flex items-center pt-[6px] pb-[6px] ps-[12px] pe-[12px]'>contact us</Link>
              </li>
             </ul>
            </div> 
            </> :
            <>
            </>
          }
      <Offcanvas  show={showOffcanvas} onHide={handleOffcanvasClose} placement="end" className='relative pt-[100px] pe-[30px] pb-[30px] ps-[30px]' closeButton>
  <button onClick={handleOffcanvasClose} className='absolute top-0 right-0 bg-[#FF8E78] text-white w-[50px] h-[50px] cursor-pointer flex justify-center items-center'><IoMdClose /></button>
        <Offcanvas.Header>
          <Offcanvas.Title><Link><img src={require('../../image/logo.png')} alt="" /></Link></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
      <p className='text-[17px] text-[#666] mb-4'>We believe brand interaction is key in commu- nication. Real inno vations and a positive customer experience are the heart of successful commu- nication.</p>
      <h4 className='text-[24px] mb-[10px] font-[400] text-[#404040] '>  Contact Us </h4>
      <ul className='p-0 m-0'>
        <li className='text-[16px] mb-2'><FaLocationDot className='d-inline me-3'/> Lavaca Street, Suite 2000</li>
        <li className='text-[16px] mb-2'><IoMdMail  className='d-inline me-3'/> email@evha.com</li>
        <li className='text-[16px] mb-2'><IoIosCall  className='d-inline me-3'/> (+880) 172570051 </li>
      </ul>
      <div className="mail">
         <Form >
            <Form.Group controlId="emailForm" className='mt-[60px] border-solid relative flex'><CiMail className=' text-white d-inline absolute top-3 ' />
              <FormControl
                type="email"
                placeholder="Email"
                aria-label="Enter your email"
                aria-describedby="email-addon"
                required
                className='rounded-0 shadow-none'
              />
            <button className='bg-[#FF8E78] h-[45px] w-[45px] flex items-center justify-center'><FaLongArrowAltRight className='text-white' /></button>
            </Form.Group>
            </Form>
            <ul className='m-0 p-0 mt-5 flex'>
                     <li className='w-[40px] h-[40px] rounded-full bg-[#0433811a] flex items-center justify-center me-3 hover:text-[#FF8E78] duration-500 hover:shadow'><FaFacebookF /></li>
                     <li className='w-[40px] h-[40px] rounded-full bg-[#0433811a] flex items-center justify-center me-3 hover:text-[#FF8E78] duration-500 hover:shadow'><FaTwitter /></li>
                     <li className='w-[40px] h-[40px] rounded-full bg-[#0433811a] flex items-center justify-center me-3 hover:text-[#FF8E78] duration-500 hover:shadow'><FaInstagram  /></li>
                     <li className='w-[40px] h-[40px] rounded-full bg-[#0433811a] flex items-center justify-center me-3 hover:text-[#FF8E78] duration-500 hover:shadow'><FaPinterestP  /></li>
            </ul>
         
      </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* <div className="overlay bg-[#0000008a] w-[0] h-[100%] z-50  top-0 left-0 fixed">
        <div className="flex justify-center items-center absolute top-[45%] left-[35%]">
             <Form className='min-w-[600px] mb-[16px]'>
              <Form.Control type='search' placeholder='Search...' className='h-[54px] pr-[100px] pl-[30px] text-[#495057] text-[16px] bg-white'/>
              <button className='absolute right-0 top-0 w-[60px] h-[54px] rounded-tr-5 rounded-br-5 bg-[#FF8E78] flex justify-center items-center'><CiSearch  className='text-white text-[25px] font-bold'/></button>
             </Form>
        </div>
      </div> */}
    </>
  );
}

export default Navigation;
