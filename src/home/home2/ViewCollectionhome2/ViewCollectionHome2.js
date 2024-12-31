import React from 'react';
import { Link } from 'react-router-dom';
import './View.css';

function ViewCollectionHome2() {
  return (
    <>
        <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12 ">
          <div className="mt-[20px] relative view-data">
            <img src={require('../../../image/home3.png')} alt="" className='min-h-[191px] object-cover'/>
            <div className="view-content absolute top-[20px] left-[20px] w-[calc(100%-40px)] h-[calc(100%-40px)] border border-solid border-white border-opacity-30 p-[20px] transition-all duration-500">
              <h3 className='text-3xl text-white font-[500] uppercase'>Women</h3>
              <h6 className='text-base text-white text-[20px]'>Collection</h6>
              <Link to="#" className='text-base text-black text-decoraton-none no-underline'>View Collection</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="mt-[20px] relative view-data">
            <img src={require('../../../image/home4.png')} alt="" className='min-h-[191px] object-cover'/>
            <div className="view-content absolute top-[20px] left-[20px] w-[calc(100%-40px)] h-[calc(100%-40px)] border border-solid border-white border-opacity-30 p-[20px] transition-all duration-500">
              <h3 className='text-3xl text-white font-[500] uppercase'>Men</h3>
              <h6 className='text-base text-white text-[20px]'>Collection</h6>
              <Link to="#" className='text-base text-black text-decoraton-none no-underline'>View Collection</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="mt-[20px] relative view-data">
            <img src={require('../../../image/home5.png')} alt="" className='min-h-[191px] object-cover'/>
            <div className="view-content absolute top-[20px] left-[20px] w-[calc(100%-40px)] h-[calc(100%-40px)] border border-solid border-white border-opacity-30 p-[20px] transition-all duration-500">
              <h3 className='text-3xl text-white font-[500] uppercase'>kids</h3>
              <h6 className='text-base text-white text-[20px]'>Collection</h6>
              <Link to="#" className='text-base text-black text-decoraton-none no-underline'>View Collection</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ViewCollectionHome2
