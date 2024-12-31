import React, { useState } from 'react';
import PaginationComponent from '../pagination/Pagination';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaRegStar, FaStar } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { PiHeartLight, PiLockSimpleThin } from 'react-icons/pi';
import { BiSolidCategory, BiSolidStar, BiStar } from 'react-icons/bi';
import { Form } from 'react-bootstrap';
import ShowProductFilter from '../showproductfilter/ShowProductFilter';

function ShowProduct() {
  const location = useLocation();
  const initialShowData = location.pathname === '/shoplist' ? false: true;
  
    const [showData, setShowData] = useState(initialShowData);

  const handleButton1Click = () => {
    setShowData(true);
  };

  const handleButton2Click = () => {
    setShowData(false);
  };

    const data =[
        {
        image: require('../../image/tranding_1.png'),
        name:'Faxon Canvas Low-Top Sneaker',
        price:'$450.00 ',
        },
    {
    image: require('../../image/tranding_2.png'),
    name:'Viscose-Cashmere Scarf',
    price:'$450.00 ',
    },
    {
    image: require('../../image/tranding_3.png'),
    name:'FPlaid Cotton Oxford Shirt',
    price:'$450.00 ',
    },
    {
    image: require('../../image/tranding4.png'),
    name:'Round neck sweater',
    price:'$450.00 ',
    },
    {
    image: require('../../image/tranding5.png'),
    name:'Faxon Canvas Low-Top Sneaker',
    price:'$450.00 ',
    },
    {
    image: require('../../image/tranding_6.png'),
    name:'Faxon Canvas Low-Top Sneaker',
    price:'$450.00 ',
    },
        {
        image: require('../../image/tranding_1.png'),
        name:'Faxon Canvas Low-Top Sneaker',
        price:'$450.00 ',
        },
    {
    image: require('../../image/tranding_2.png'),
    name:'Viscose-Cashmere Scarf',
    price:'$450.00 ',
    },
    {
    image: require('../../image/tranding_3.png'),
    name:'FPlaid Cotton Oxford Shirt',
    price:'$450.00 ',
    },
    {
    image: require('../../image/tranding4.png'),
    name:'Round neck sweater',
    price:'$450.00 ',
    },
    {
    image: require('../../image/tranding5.png'),
    name:'Faxon Canvas Low-Top Sneaker',
    price:'$450.00 ',
    },
    {
    image: require('../../image/tranding_6.png'),
    name:'Faxon Canvas Low-Top Sneaker',
    price:'$450.00 ',
    },
        {
        image: require('../../image/tranding_1.png'),
        name:'Faxon Canvas Low-Top Sneaker',
        price:'$450.00 ',
        },
    {
    image: require('../../image/tranding_2.png'),
    name:'Viscose-Cashmere Scarf',
    price:'$450.00 ',
    },
    {
    image: require('../../image/tranding_3.png'),
    name:'FPlaid Cotton Oxford Shirt',
    price:'$450.00 ',
    },
    {
    image: require('../../image/tranding4.png'),
    name:'Round neck sweater',
    price:'$450.00 ',
    },
    {
    image: require('../../image/tranding5.png'),
    name:'Faxon Canvas Low-Top Sneaker',
    price:'$450.00 ',
    },
    {
    image: require('../../image/tranding_6.png'),
    name:'Faxon Canvas Low-Top Sneaker',
    price:'$450.00 ',
    },
  ]

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const isProductPage = location.pathname === '/shopfull'
  return (
    <>
      <div className="row relative">
                <div className="col-lg-8 col-5">
                <ul className="mt-[20px] m-0 p-0 flex items-center">
                {isProductPage && <ShowProductFilter />}
        <li className={`cursor-pointer mr-[15px] ${showData ? 'bg-black text-white' : 'border text-gray-500'} h-[42px] w-[42px] flex justify-center items-center`}>
          <Link to="#" className={`text-[35px] ${showData ? 'text-white' : 'text-gray-500'}`} onClick={handleButton1Click}>
            <BiSolidCategory />
          </Link>
        </li>
        <li className={`cursor-pointer mr-[15px] ${!showData ? 'bg-black text-white' : 'border text-gray-500'} h-[42px] w-[42px] flex justify-center items-center`}>
          <Link to="#" className={`text-[24px] ${!showData ? 'text-white' : 'text-gray-500'}`} onClick={handleButton2Click}>
            <FaBars />
          </Link>
        </li>
                </ul>
                </div>
                <div className="col-lg-4 col-7">
                <Form.Select aria-label="Default select example" className='shadow-none border border-solid border-[#F5F5F5] rounded-0 pt-[13px] pb-[13px] pe-[20px] ps-[20px] w-[100%] h-auto'>
                <option>Sort </option>
                <option value="1">Default sorting</option>
                <option value="2">Sort by popularity</option>
                <option value="3">Sort by average rating</option>
                <option value="3">Sort by latest</option>
                <option value="3">Sort by price: low to high</option>
                <option value="3">Sort by price: high to low</option>
                </Form.Select>
                </div>
            </div>
        {showData ? (
                <>
            <div className="row">
            {
                    currentItems.map((item,index)=>{
                        return(
                 <>   
       <div className="col-xl-4 col-lg-6 col-md-6 xol-sm-6 col-12 " >
          <div className="thumb relative mt-[40px]">
            <div className="mt-[40px]">
              <Link><img src={item.image} alt="" className='w-[425px]' /></Link>
            </div>
            <div className="thumb-data pt-4 pb-4">
                <span className='uppercase text-[14px] text-[#A4A4A4]'>BRAND:GEEK</span>
                <ul className='flex p-0 items-center  mb-[10px] mt-[7px]'>
                  <li className='text-[#FFB503] me-1'><BiSolidStar /></li>
                  <li className='text-[#FFB503] me-1'><BiSolidStar /></li>
                  <li className='text-[#FFB503] me-1'><BiSolidStar /></li>
                  <li className='text-[#A4A4A4] me-1'><BiStar /></li>
                  <li className='text-[#A4A4A4] me-1'><BiStar /></li>
                </ul>
                <h6 className='text-[20px] font-[600] text-[#404040]'><Link className='text-[#404040]  no-underline'>{item.name}</Link></h6>
                <div className="flex">
                    <div className="content-cart w-[44px] h-[44px] border border-solid border-[#E9E9E9] text-[20px] mr-[15px] flex justify-center items-center">
                        <Link className='text-zinc-800'><PiLockSimpleThin /></Link>
                    </div>
                    <div className="content-price flex flex-col relative">
                        <span className='old-price line-through text-[#cccccc] text-[16px]'>$400.00</span>
                        <span className='new-price text-[16px] text-[#FF8E78] font-[600]'> $450.00</span>
                    </div>
                    <div className='hover-cart absolute bottom-[21px] left-[-30px] opacity-0'>
                        <button className='bg-[#FF8E78] text-[20px] mr-[15px] pl-[20px] pr-[20px] pt-[10px] pb-[10px] text-white flex items-center'><Link className='no-underline text-white'><PiLockSimpleThin className='d-inline me-2'/>Add to cart</Link></button>
                    </div>
                </div>
            </div>
            
            <div className="thumb-hover-content">
            <ul className='absolute top-6 right-0 p-0 m-0 opacity-0 side-cart'>
            <li className='mb-[20px]'><div className='text-[#777] text-[25px]'> <Link className='text-[#777]'><PiHeartLight /></Link></div></li>
            <li ><div className='text-[#777] text-[25px]'><Link className='text-[#777]'><GrView  /></Link></div></li>
            </ul>
            <div className="sale-button absolute top-5 left-6 flex flex-col">
              <span className='pt-[4px] pr-[8px] pb-[4px] pl-[8px] bg-[#FF8E78] text-white text-[12px] uppercase w-max'>sale 13%</span>
              <span className='pt-[4px] pr-[8px] pb-[4px] pl-[8px] bg-[#54CABF] text-white text-[12px] uppercase mt-[13px] w-max'>new</span>
            </div>
            </div>

            </div>
          </div>
                 </>
                        )
                    })
                }
            </div>
                </>
            ) :(
              <>
                <div className="row">
            {
                currentItems.map((item,index)=>{
                    return(
                        <>
               <div className="col-md-4 col-sm-12 col-12 mt-5" key={index}>
                  <div className="thumb ">
                    <img src={item.image} alt="" />
                  </div>
               </div>
               <div className="col-md-8 col-sm-12 col-12 mt-5">
                   <div className="content">
                    <h6 className='text-[20px] font-[700]'><Link className='no-underline text-[#404040] hover:text-[#FF8E78]'>{item.name}</Link></h6>
                    <span className='text-[18px] text-[#FF8E78] font-[600]'>{item.price}</span>
                    <ul className='p-0 m-0 mt-2 flex mb-2'>
                        <li><Link><FaStar className='text-[#FFB503] me-2'/></Link></li>
                        <li><Link><FaStar className='text-[#FFB503] me-2'/></Link></li>
                        <li><Link><FaStar className='text-[#FFB503] me-2'/></Link></li>
                        <li><Link><FaRegStar  className='text-[#A4A4A4] me-2'/></Link></li>
                        <li><Link><FaRegStar  className='text-[#A4A4A4] me-2'/></Link></li>
                    </ul>
                    <p className='text-[16px] text-[#A4A4A4]'>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className="add-cart mt-[20px] flex">
                      <Link className='no-underline'  > <button className='bg-[#FF8E78] border border-solid border-#E9E9E9] text-[20px] mr-[15px] text-white pt-[12px] pb-[12px] pr-[30px] pl-[30px] flex items-center'><PiLockSimpleThin className='d-inline me-2 text-[20px]'/> Add to cart</button></Link>
                      <Link className='no-underline'  > <button className='bg-transparent text-black text-[20px] mr-[15px] pt-[12px] pb-[12px] pr-[30px] pl-[30px] flex items-center'><PiHeartLight className='d-inline me-2 text-[20px]'/> Add to wishlist</button></Link>
                    </div>
                   </div>
               </div>
                        </>
                    )
                })
            }
            </div>
              </>
            )}
            <div className="row">
              <div className="col-lg-12">
                <div className="flex justify-between mt-[50px] border-t border-solid border-t-[#CCCCCC] pt-[30px]">
             <PaginationComponent
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
                </div>
              </div>
            </div>
    </>
  )
}

export default ShowProduct
