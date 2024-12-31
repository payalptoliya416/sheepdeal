import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const breadcrumbItems = [
  { path: '/', text: 'home  /' },
  { path: '/shopgrid', text: 'shopgrid /' },
  { path: '/shopfull', text: 'shopfull /' },
  { path: '/singleproduct', text: 'singlepage /' },
  { path: '/cartpage', text: 'Shopping Cart /' },
  { path: '/contactus', text: 'Conatct Us ' },
];

function ShopBreadCrumb() {
  const location = useLocation();

  const currentIndex = breadcrumbItems.findIndex(item => item.path === location.pathname);

  const dynamicBreadcrumb = currentIndex !== -1 ? breadcrumbItems.slice(0, currentIndex + 1) : breadcrumbItems.slice(0, 1);

  return (
    <div className="breadCrumb pt-[45px] pb-[45px] bg-[#FF8E78]">
      <div className="container">
        <div className='md:flex justify-between items-center sm:flex-none text-center'>
          <h2 className='text-[24px] font-[3400] text-white'>Shop</h2>
          <nav>
            {dynamicBreadcrumb.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`ms-2 me-2 text-white ${location.pathname === item.path ? 'breadcrumb-active' : 'breadcrumb-not-active'}`}
                style={{ textDecoration: 'none' }} >
                {item.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default ShopBreadCrumb;
