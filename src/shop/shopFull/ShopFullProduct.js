import React from 'react';
import ShopBreadCrumb from '../shopbreadcrumb/ShopBreadCrumb';
import ShowProduct from '../showproduct/ShowProduct';
import Connected from '../../home/home1/connected/Connected';
import Instagram from '../../home/home1/instagram/Instagram';

function ShopFullProduct() {
  return (
    <>
     <ShopBreadCrumb/>
     <div className="container mt-5">
     <ShowProduct/> 
     <Connected/>
     <Instagram/>
     </div>
    </>
  )
}

export default ShopFullProduct
