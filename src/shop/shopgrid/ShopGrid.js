import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { CiSearch } from "react-icons/ci";
import Accordion from 'react-bootstrap/Accordion';
import './ShopGrid.css';
import Connected from '../../home/home1/connected/Connected';
import Instagram from '../../home/home1/instagram/Instagram';
import ShowProduct from '../showproduct/ShowProduct';

function ShopGrid() {

  const product =[
    {name:'Geek [124]'},
    {name:'Bags [293]'},
    {name:'Boots [125]'},
    {name:'Name [698]'},
    {name:'Dresses [12456]'},
    {name:'Flats [2654]'},
    {name:'Heels [29]'},
    {name:'Jackets [1136]'},
    {name:'Jewellery [536]'},
    {name:'Jeans [2987]'},
    {name:'Jewellery [536]'},
  ]

  const category=[
    {name:'Backpacks [124]'},
    {name:'Bags [293]'},
    {name:'Boots [125]'},
    {name:'Coats [698]'},
    {name:'Dresses [12456]'},
    {name:'Flats [2654]'},
    {name:'Heels [29]'},
    {name:'Jackets [1136]'},
    {name:'Jeans [2987]'},
    {name:'Jewellery [536]'},
  ]
  const type=[
    {name:'Boys [203]'},
    {name:'Girls [87]'},
    {name:'Men [2869]'},
    {name:'Women [1387]'},
  ]
  const [rangeValue, setRangeValue] = useState(50);

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  return (
    <>
     <div className="mt-[60px] shopgrid">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-9 col-lg-8  col-md-8 col-md-12 xol-sm-12 col-12">
     
            <ShowProduct/>
          </div>
           <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 mt-[20px]">
               <div className="border border-[#CFCFCF] border-solid  search-widget mb-[20px]">
                <Form className='p-1 flex '>
                    <button className='bg-[#ffF] w-[10%] text-[#A4A4A4] '><CiSearch className='text-[20px]'/>
                       </button>
                    <Form.Control className='border-0 p-0 shadow-none placeholder:text-[#CFCFCF]' placeholder='Search brand'/>
                </Form>
               </div>
        <Accordion defaultActiveKey="0" className='mb-[20px] '>
        <Accordion.Item eventKey="0">
        <Accordion.Header  > <h4 className='uppercase bg-[#F5F5F5] text-[16px]'>Categories</h4></Accordion.Header>
        <Accordion.Body className='ps-[20px] pe-[20px] pt-0 pb-0 mt-[20px] mb-[20px]'>
        <div className="overflow-x-auto max-h-[344px]">
          <Form>
          <ul className='p-0 m-0'>
            {
                category.map((cat)=>{
                    return(
                        <>
                        <li className='hover:cursor-pointer mb-3'>
                 <div className="flex items-center shadow-none">
                 <Form.Check
                    type="checkbox"
                    label={cat.name} 
                 className="mr-2 cursor-pointer border-0" />
                 </div>
               </li>
                        </>
                    )
                })
            }
               
             </ul>
          </Form>
        </div>
        </Accordion.Body>
      </Accordion.Item>
        </Accordion>
         <Accordion defaultActiveKey="1" className='mb-[20px]'>
      <Accordion.Item eventKey="1">
      <Accordion.Header  > <h4 className='uppercase bg-[#F5F5F5] text-[16px]'>Categories</h4></Accordion.Header>
        <Accordion.Body className='ps-[20px] pe-[20px] pt-0 pb-0 mt-[20px] mb-[20px]'>
        <div className="overflow-x-auto max-h-[344px]">
          <Form>
          <ul className='p-0 m-0'>
            {
                product.map((cat)=>{
                    return(
                        <>
                        <li className='hover:cursor-pointer mb-3'>
                 <div className="flex items-center shadow-none">
                 <Form.Check
                    type="checkbox"
                    label={cat.name} 
                 className="mr-2 cursor-pointer border-0" />
                 </div>
               </li>
                        </>
                    )
                })
            }
               
             </ul>
          </Form>
        </div>
        </Accordion.Body>
      </Accordion.Item>
     
     </Accordion>
       <Accordion defaultActiveKey="2" className='mb-[20px]'>
      <Accordion.Item eventKey="2">
      <Accordion.Header  > <h4 className='uppercase bg-[#F5F5F5] text-[16px]'>Categories</h4></Accordion.Header>
        <Accordion.Body className='ps-[20px] pe-[20px] pt-0 pb-0 mt-[20px] mb-[20px]'>
        <div className="overflow-x-auto max-h-[344px]">
          <Form>
          <ul className='p-0 m-0'>
            {
                type.map((cat)=>{
                    return(
                        <>
                        <li className='hover:cursor-pointer mb-3'>
                 <div className="flex items-center shadow-none">
                 <Form.Check
                    type="checkbox"
                    label={cat.name} 
                 className="mr-2 cursor-pointer border-0" />
                 </div>
               </li>
                        </>
                    )
                })
            }
               
             </ul>
          </Form>
        </div>
        </Accordion.Body>
      </Accordion.Item>
          </Accordion>
       <Accordion defaultActiveKey="3" className='mb-[20px]'>
      <Accordion.Item eventKey="3">
      <Accordion.Header  > <h4 className='uppercase bg-[#F5F5F5] text-[16px]'>filter by price</h4></Accordion.Header>
        <Accordion.Body className='ps-[20px] pe-[20px] pt-0 pb-0 mt-[20px] mb-[20px]'>
        <div className="">
          <Form>
          <div className="w-full max-w-md mx-auto">
      <Form>
        <Form.Group controlId="customRange">
        <Form.Range
            type="range"
            value={rangeValue}
            onChange={handleRangeChange}
            min="0"
            max="100"
            step="1"
            className="range-input"
          />
        </Form.Group>
      </Form>
      <div className="mt-2 flex justify-between text-xs text-gray-600">
        <span className='text-[16px]'>Price -{rangeValue}</span>
      </div>
    </div>
          </Form>
        </div>
        </Accordion.Body>
      </Accordion.Item>
          </Accordion>
       <Accordion defaultActiveKey="4" className='mb-[20px]'>
      <Accordion.Item eventKey="4">
      <Accordion.Header  > <h4 className='uppercase bg-[#F5F5F5] text-[16px]'>Color</h4></Accordion.Header>
        <Accordion.Body className='ps-[20px] pe-[20px] pt-0 pb-0 mt-[20px] mb-[20px]'>
           <ul className='p-0 m-0 flex'>
            <li className='bg-[#0074D9] w-[23px] h-[23px] mt-[5px] mb-[5px] cursor-pointer rounded-full mr-[10px]'><Link></Link></li>
            <li className='bg-[#000] w-[23px] h-[23px] mt-[5px] mb-[5px] cursor-pointer rounded-full mr-[10px]'><Link></Link></li>
            <li className='bg-[#FF7F50] w-[23px] h-[23px] mt-[5px] mb-[5px] cursor-pointer rounded-full mr-[10px]'><Link></Link></li>
            <li className='bg-[#8DC04A] w-[23px] h-[23px] mt-[5px] mb-[5px] cursor-pointer rounded-full mr-[10px]'><Link></Link></li>
            <li className='bg-[#A03245] w-[23px] h-[23px] mt-[5px] mb-[5px] cursor-pointer rounded-full mr-[10px]'><Link></Link></li>
            <li className='bg-[#FF8E78] w-[23px] h-[23px] mt-[5px] mb-[5px] cursor-pointer rounded-full mr-[10px]'><Link></Link></li>
            <li className='bg-[#54CABF] w-[23px] h-[23px] mt-[5px] mb-[5px] cursor-pointer rounded-full'><Link></Link></li>
           </ul>
        </Accordion.Body>
      </Accordion.Item>
          </Accordion>
       <Accordion defaultActiveKey="5" className='mb-[20px]'>
      <Accordion.Item eventKey="5">
      <Accordion.Header  > <h4 className='uppercase bg-[#F5F5F5] text-[16px]'>Color</h4></Accordion.Header>
        <Accordion.Body className='ps-[20px] pe-[20px] pt-0 pb-0 mt-[20px] mb-[20px]'>
       <ul className='p-0 m-0 flex flex-wrap'>
            <li className='w-[32px] h-[26px] border border-solid border-[#E9E9E9] mr-[10px] mb-[5px] mt-[5px] text-center hover:bg-black hover:text-white'><Link className='text-[#A4A4A4] no-underline hover:text-white'>38</Link></li>
            <li className='w-[32px] h-[26px] border border-solid border-[#E9E9E9] mr-[10px] mb-[5px] mt-[5px] text-center hover:bg-black'><Link className='text-[#A4A4A4] no-underline hover:text-white'>39</Link></li>
            <li className='w-[32px] h-[26px] border border-solid border-[#E9E9E9] mr-[10px] mb-[5px] mt-[5px] text-center hover:bg-black'><Link className='text-[#A4A4A4] no-underline hover:text-white'>40</Link></li>
            <li className='w-[32px] h-[26px] border border-solid border-[#E9E9E9] mr-[10px] mb-[5px] mt-[5px] text-center hover:bg-black'><Link className='text-[#A4A4A4] no-underline hover:text-white'>41</Link></li>
            <li className='w-[32px] h-[26px] border border-solid border-[#E9E9E9] mr-[10px] mb-[5px] mt-[5px] text-center hover:bg-black'><Link className='text-[#A4A4A4] no-underline hover:text-white'>42</Link></li>
            <li className='w-[32px] h-[26px] border border-solid border-[#E9E9E9] mr-[10px] mb-[5px] mt-[5px] text-center hover:bg-black'><Link className='text-[#A4A4A4] no-underline hover:text-white'>43</Link></li>
            <li className='w-[32px] h-[26px] border border-solid border-[#E9E9E9] mr-[10px] mb-[5px] mt-[5px] text-center hover:bg-black'><Link className='text-[#A4A4A4] no-underline uppercase hover:text-white'>s</Link></li>
            <li className='w-[32px] h-[26px] border border-solid border-[#E9E9E9] mr-[10px] mb-[5px] mt-[5px] text-center hover:bg-black'><Link className='text-[#A4A4A4] no-underline uppercase hover:text-white'>M</Link></li>
            <li className='w-[32px] h-[26px] border border-solid border-[#E9E9E9] mr-[10px] mb-[5px] mt-[5px] text-center hover:bg-black'><Link className='text-[#A4A4A4] no-underline uppercase hover:text-white'>x</Link></li>
            <li className='w-[32px] h-[26px] border border-solid border-[#E9E9E9] mr-[10px] mb-[5px] mt-[5px] text-center hover:bg-black'><Link className='text-[#A4A4A4] no-underline uppercase hover:text-white'>xl</Link></li>
       </ul>
        </Accordion.Body>
      </Accordion.Item>
          </Accordion>
           
           <div className="seller-widget">
            <h4 className='text-[40px] font-[600]  text-[#404040]'>Best sellers</h4>
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
           <div className="widget mt-[20px]">
            <Link><img src={require('../../image/wedget.png')} alt="" />
            </Link>
           </div>
           </div>
        </div>
       
        <Connected/>
        <Instagram/>
      </div>
     </div>
    </>
  )
}

export default ShopGrid
