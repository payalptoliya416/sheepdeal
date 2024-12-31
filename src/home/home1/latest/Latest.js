import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Latest.css';

function Latest() {

  return (
    <>
    <div className="container">
      <h3 className='relative text-[36px] pb-[10px] text-center uppercase font-[400] text-[#404040] before:absolute before:content-[""] before:h-[1px] before:w-20  before:bg-black before:bottom-0  before:xl:left-[46%] before:lg:left-[45%] before:sm:left-[43%] before:left-[39%] after:absolute after:content-[""] after:h-[11px] after:w-[11px] after:border after:border-solid after:border-black after:top-full after:left-[49%]  after:bg-white after:rotate-45 after:translate-y-[-50%] after:translate-x-[-50%] mb-5' >LATEST ARTICLE</h3>
    <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
       <Card className='border-0 rounded-0 mb-[45px] '>
        <Card.Img variant="top" src={require('../../../image/latest_1.png')} className='rounded-0 relative' />
        <span className='text-[12px] absolute top-56 left-6 pt-[4px] pr-[12px] pb-[3px] pl-[12px] text-white bg-[#FF8E78] uppercase'>modal</span>
        <Card.Body className='ps-0'>
        <div className="content">
            <span className='text=-[14px] text-[#A4A4A4]'>June 24, 2020</span>
            <Link className='text-[#141414] no-underline '><h3 className='text-[24px] text-[#141414] font-[600] pb-[10px] pt-[15px] pr-[50px] leading-[36px] hover:text-[#FF8E78]'>Never putting your Cocktail down to leave</h3></Link>
            <p className='text-[#A4A4A4] text-[16px] mb-[20px]'>It reopened this year following a refurb which aims to cement its place a surfer’s paradise. It now boasts two.</p>
            <div>
            <Link className='text-[#A4A4A4]'>Read more</Link>
            </div>
        </div>
        </Card.Body>
        </Card>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
       <Card className='border-0 rounded-0 mb-[45px]'>
        <Card.Img variant="top" src={require('../../../image/latest_2.png')} className='rounded-0 relative' />
        <span className='text-[12px] absolute top-56 left-6 pt-[4px] pr-[12px] pb-[3px] pl-[12px] text-white bg-[#FF8E78] uppercase'>lifestyle</span>
        <Card.Body className='ps-0'>
        <div className="content">
            <span className='text=-[14px] text-[#A4A4A4]'>June 24, 2020</span>
            <Link className='text-[#141414] no-underline '><h3 className='text-[24px] text-[#141414] font-[600] pb-[10px] pt-[15px] pr-[50px] leading-[36px] hover:text-[#FF8E78]'>7 Things You Can’t Wear After Labor Day Read</h3></Link>
            <p className='text-[#A4A4A4] text-[16px] mb-[20px]'>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga</p>
            <div>
            <Link className='text-[#A4A4A4]'>Read more</Link>
            </div>
        </div>
        </Card.Body>
        </Card>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
       <Card className='border-0 rounded-0 mb-[45px]'>
        <Card.Img variant="top" src={require('../../../image/latest_3.png')} className='rounded-0 relative' />
        <span className='absolute top-56 left-6 pt-[4px] pr-[12px] pb-[3px] pl-[12px] text-white bg-[#FF8E78] uppercase text-[12px]'>fashion trands</span>
        <Card.Body className='ps-0'>
        <div className="content">
            <span className='text=-[14px] text-[#A4A4A4]'>June 24, 2020</span>
            <Link className='text-[#141414] no-underline '><h3 className='text-[24px] text-[#141414] font-[600] pb-[10px] pt-[15px] pr-[50px] leading-[36px] hover:text-[#FF8E78]'>Never putting your Cocktail down to leave
          </h3></Link>
            <p className='text-[#A4A4A4] text-[16px] mb-[20px]'>It reopened this year following a refurb which aims to cement its place a surfer’s paradise. It now boasts two.</p>
            <div>
            <Link className='text-[#A4A4A4]'>Read more</Link>
            </div>
        </div>
        </Card.Body>
        </Card>
        </div>
    </div>
 
    </div>
    </>
  )
}

export default Latest
