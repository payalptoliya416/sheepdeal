import React from 'react';
import { Link } from 'react-router-dom';
import './ViewCollection.css';

function ViewCollection() {
  return (
    <div className="container mx-auto">
    <div className="flex flex-wrap">
      <div className="lg:w-1/3 w-full lg:px-4">
          <div className="mt-[20px] relative view-data">
            <img src={require('../../../image/women.png')} alt="" className='min-h-[191px] object-cover'/>
            <div className="view-content absolute top-[20px] left-[20px] w-[calc(100%-40px)] h-[calc(100%-40px)] border border-solid border-white border-opacity-30 p-[20px] transition-all duration-500">
              <h3 className='text-3xl text-white font-[500] uppercase'>Women</h3>
              <h6 className='text-base text-white text-[20px]'>Collection</h6>
              <Link to="#" className='text-base text-black text-decoraton-none no-underline'>View Collection</Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full lg:px-4">
          <div className="mt-[20px] relative view-data">
            <img src={require('../../../image/men.png')} alt="" className='min-h-[191px] object-cover'/>
            <div className="view-content absolute top-[20px] left-[20px] w-[calc(100%-40px)] h-[calc(100%-40px)] border border-solid border-white border-opacity-30 p-[20px] transition-all duration-500">
              <h3 className='text-3xl text-white font-[500] uppercase'>Men</h3>
              <h6 className='text-base text-white text-[20px]'>Collection</h6>
              <Link to="#" className='text-base text-black text-decoraton-none no-underline'>View Collection</Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full lg:px-4">          
          <div className="mt-[20px] relative view-data">
            <img src={require('../../../image/child.png')} alt="" className='min-h-[191px] object-cover'/>
            <div className="view-content absolute top-[20px] left-[20px] w-[calc(100%-40px)] h-[calc(100%-40px)] border border-solid border-white border-opacity-30 p-[20px] transition-all duration-500">
              <h3 className='text-3xl text-white font-[500] uppercase'>kids</h3>
              <h6 className='text-base text-white text-[20px]'>Collection</h6>
              <Link to="#" className='text-base text-black text-decoraton-none no-underline'>View Collection</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCollection;
