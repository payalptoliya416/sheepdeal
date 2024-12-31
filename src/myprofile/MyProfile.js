import React, { useEffect } from 'react';
import { FaBorderStyle, FaUserAlt } from 'react-icons/fa';
import './MyProfile.css';
import Accordion from 'react-bootstrap/Accordion';
import { useDispatch, useSelector } from 'react-redux';
import {  openManageAddress, openMyAddress, openMyorder, openProfile, selectIsManageAddressOpen, selectIsMyAddressOpen, selectIsMyorderOpen, selectIsProfileOpen } from '../redux/myorderslice/MyOrderSlice';
import MyOrder from './myorder/MyOrder';
import ProfileInformation from './profileinformation/ProfileInformation';
import MyAddress from './myaddress/MyAddress';
import { FaMapLocationDot } from 'react-icons/fa6';
import ManageAddress from './manageaddress/ManageAddress';
import { ImSwitch } from "react-icons/im";

function MyProfile() {
    const dispatch = useDispatch();
    const isMyorderOpen = useSelector(selectIsMyorderOpen);
    const isMyProfileOpen = useSelector(selectIsProfileOpen);
    const isMyAddressOpen = useSelector(selectIsMyAddressOpen);
    const isManageAddressOpen = useSelector(selectIsManageAddressOpen);

    const handleOrderOpen = () => {
        if (!isMyorderOpen) {
          dispatch(openMyorder());
      };
    }
    const handleMyProfileOpen = () => {
        if (!isMyProfileOpen) {
          dispatch(openProfile());
        }
      };
      const handleMyAddressOpen = () => {
        if (!isMyAddressOpen) {
          dispatch(openMyAddress());
        }
      };
    
      const handleManageAddressOpen = () => {
        if (!isManageAddressOpen) {
          dispatch(openManageAddress());
        }
      };

      useEffect(() => {
        dispatch(openProfile());
    }, [dispatch]);
  return (
    <>
      <div className="breadCrumb pt-[45px] pb-[45px] bg-[#FF8E78]">
      <div className="container">
        <div className=' text-center'>
          <h2 className='text-[24px] font-[400] text-white'>My Profile</h2>
        </div>
      </div>
    </div>
    <div className="mt-[70px] myprofile">
         <div className=" md:ps-20 md:pe-20 sm:ps-10 sm:pe-10 ps-5 pe-5">
            <div className="row">
            <div className="col-lg-3 col-md-12 col-12">
            <div className="profile mb-5">
                  <div className="flex bg-white p-3 gap-3 items-center shadow-md  mb-3">
               <div className="rounded"><img src={require('../image/user.png')} className='w-10 h-10' alt="" /></div>
                  <div>
                    <span className='text-[14px]'>hello</span>
                    <h3 className='text-[18px] font-[600] mt-1'>User Name</h3>
               </div>
                 </div>
                 <Accordion  defaultActiveKey="1">
                 <Accordion.Item eventKey="1" className='shadow'>
        <Accordion.Header className=" shadow ">  
                        <div className='flex gap-2 items-center'>
                     <FaUserAlt className='text-[#FF8E78] text-[20px]'/>
                     <h3 className='uppercase text-[18px] lg:text-[16px] font-[600] text-gray-500 mb-0'>Account Settings</h3>
                        </div>
                 </Accordion.Header>
                 <Accordion.Body className='bg-white'>
                    <ul className='text-black m-0'>
                        <li className={`cursor-pointer ${isMyProfileOpen ? 'text-[#FF8E78]' : ''}`} onClick={handleMyProfileOpen}>
                            Profile Information
                        </li>
                    </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0" className='shadow'>
      <Accordion.Header className="shadow "> 
                        <div className='flex gap-2 items-center'>
                     <FaBorderStyle className='text-[#FF8E78] text-[20px]'/>
                     <h3 className='uppercase text-[18px] lg:text-[16px] font-[600] text-gray-500 mb-0' >My Order</h3>
                        </div>
                 </Accordion.Header>
                 <Accordion.Body className='bg-white'>
                    <ul className='text-black m-0'>
                        <li className={`cursor-pointer text-[16px] md:text-[18px] ${isMyorderOpen ? 'text-[#FF8E78]' : ''}`} onClick={handleOrderOpen}>
                           My Order
                        </li>
                    </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='shadow'>
      <Accordion.Header className="shadow "> 
                        <div className='flex gap-2 items-center'>
                     <FaMapLocationDot className='text-[#FF8E78] text-[20px]'/>
                     <h3 className='uppercase text-[18px] lg:text-[16px] font-[600] text-gray-500 mb-0' >Manage Address</h3>
                        </div>
                 </Accordion.Header>
                 <Accordion.Body className='bg-white'>
                    <ul className='text-black m-0'>
                        <li className={`cursor-pointer text-[16px] md:text-[18px] border-b pb-3 ${isMyAddressOpen ? 'text-[#FF8E78]' : ''}`} onClick={handleMyAddressOpen}>
                           My Address
                        </li>
                        <li className={`cursor-pointer text-[16px] md:text-[18px] pt-3 ${isManageAddressOpen ? 'text-[#FF8E78]' : ''}`} onClick={handleManageAddressOpen}>
                           Manage Adress
                        </li>
                    </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='logout' >
            <Accordion.Header className="shadow "> 
                <div className='flex gap-2 items-center'>
                  <ImSwitch className='text-[#FF8E78] text-[20px]'/>
                <h3 className='uppercase text-[18px] lg:text-[16px] font-[600] text-gray-500 mb-0' >Log Out</h3>
                </div>
                  </Accordion.Header>
            </Accordion.Item>
          </Accordion>
            </div>
            </div>
            { isMyProfileOpen &&  <ProfileInformation/>}
            { isMyorderOpen &&  <MyOrder/> }       
            { isMyAddressOpen &&  <MyAddress/> }       
            { isManageAddressOpen &&  <ManageAddress/> }       
            </div>
         </div>
    </div>
    </>
  )
}

export default MyProfile
