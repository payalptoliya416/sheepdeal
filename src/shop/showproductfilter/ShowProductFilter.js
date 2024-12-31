import React from 'react';
import { Form } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ShowFilter.css';

function ShowProductFilter() {
    const product =[
        {name:'Geek [124]'},
        {name:'Bags [293]'},
        {name:'Boots [125]'},
        {name:'Name [698]'},
      ]
      const price =[
        {name:'$30-$60'},
        {name:'Above $100'},
      ]
      const size= [
        {size: '38'},
        {size: '39'},
        {size: '40'},
        {size: '41'},
        {size: '42'},
        {size: '43'},
        {size: 'S'},
        {size: 'M'},
        {size: 'X'},
        {size: 'Xl'},
      ]

  return (
        <>
            <li className='cursor-pointer me-5 hover:text-[#FF8E78] filter'><Link className='no-underline text-black flex hover:text-[#FF8E78]'> <FaFilter  className='hover:text-[#FF8E78]'/> Filter</Link>
                        <div className="filter-menu bg-white absolute w-[100%] text-black z-10 border border-solid border-[#E9E9E9] pt-[20px] pb-[5px] pl-[20px] ps-[20px] ">
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-sm-3">
                                    <div className="ptype-widget">
                                        <h4 className='text-[20px] text-[#141414] font-[600] mb-[30px]'>Product Categories</h4>
                                        <Form>
                                        <ul className='p-0 m-0'>
                                            {
                                                product.map((cat,index)=>{
                                                    return(
                                                        <>
                                                        <li className='hover:cursor-pointer mb-3' key={index}>
                                                <div className="flex items-center shadow-none">
                                                <Form.Check  type="checkbox"     label={cat.name} className="mr-2 cursor-pointer border-0" />
                                                </div>
                                            </li>
                                                        </>
                                                    )
                                                })
                                            }
                                            
                                            </ul>
                                        </Form>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-3 col-sm-3">
                                    <div className="ptype-widget">
                                        <h4 className='text-[20px] text-[#141414] font-[600] mb-[30px]'>Color</h4>
                                        <div className="flex">
                                <ul className='p-0 m-0 flex items-center ps-3'>
                            <li className='bg-[#0074D9] w-[23px] h-[23px]  rounded-full mt-[5px] mb-[5px] me-[10px] cursor-pointer'><Link></Link></li>
                            <li className='bg-[#000000] w-[23px] h-[23px]  rounded-full mt-[5px] mb-[5px] me-[10px] cursor-pointer'><Link></Link></li>
                            <li className='bg-[#FF7F50] w-[23px] h-[23px]  rounded-full mt-[5px] mb-[5px] me-[10px] cursor-pointer'><Link></Link></li>
                            <li className='bg-[#8DC04A] w-[23px] h-[23px]  rounded-full mt-[5px] mb-[5px] me-[10px] cursor-pointer'><Link></Link></li>
                            <li className='bg-[#A03245] w-[23px] h-[23px]  rounded-full mt-[5px] mb-[5px] me-[10px] cursor-pointer'><Link></Link></li>
                            <li className='bg-[#FF8E78] w-[23px] h-[23px]  rounded-full mt-[5px] mb-[5px] me-[10px] cursor-pointer'><Link></Link></li>
                            <li className='bg-[#54CABF] w-[23px] h-[23px]  rounded-full mt-[5px] mb-[5px] me-[10px] cursor-pointer'><Link></Link></li>
                                </ul>
                                </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-3 col-sm-3">
                                    <div className="ptype-widget">
                                        <h4 className='text-[20px] text-[#141414] font-[600] mb-[30px]'>Price</h4>
                                        <Form>
                                        <ul className='p-0 m-0'>
                                            {
                                                price.map((cat,index)=>{
                                                    return(
                                                        <>
                                                        <li className='hover:cursor-pointer mb-3' key={index}>
                                                <div className="flex items-center shadow-none">
                                                <Form.Check  type="checkbox" label={cat.name} className="mr-2 cursor-pointer border-0" />
                                                </div>
                                            </li>
                                                        </>
                                                    )
                                                })
                                            }
                                            
                                            </ul>
                                        </Form>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-3 col-sm-3">
                                    <div className="ptype-widget">
                                        <h4 className='text-[20px] text-[#141414] font-[600] mb-[30px]'>Size</h4>
                                        <ul className='p-0 m-0 flex items-center ps-3 flex-wrap'>
                                            {
                                                size.map((size,index)=>(
                                                    <>
                                                    <li className='w-[32px] h-[26px] border border-solid border-[#E9E9E9] mr-[10px] mt-[5px] mb-[5px]'><Link className='no-underline text-[#A4A4A4] uppercase flex justify-center items-center' key={index}>{size.size}</Link></li>
                                                    </>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
            </li> 
        </>
  )
}

export default ShowProductFilter
