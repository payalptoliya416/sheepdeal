import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BlogHome2() {

  return (
    <>
       <div className="container">
       <div className="text-center sec-title-02 mb-[30px]">
              <h6 className='text-[16px] font-[600] text-[#141414] tracking-wider'>FASHION FOR ALL</h6>
              <h3 className='text-[42px] font-[700] text[#141414] mb-0'>LATEST BLOG</h3>
            </div>
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

export default BlogHome2
