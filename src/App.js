import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home1 from './home/home1/Home1';
import Footer from './footer/Footer';
import Shop from './shop/Shop';
import SingleProduct from './shop/singleproduct/SingleProduct';
import ShopFullProduct from './shop/shopFull/ShopFullProduct';
import Home2 from './home/home2/Home2';
import CartPage from './shop/cart/CartPage';
import CheckOut from './shop/checkout/CheckOut';
import PlaceOrder from './shop/placeorder/PlaceOrder';
import Information from './information/Information';
import ContactUs from './contactus/ContactUs';
import WishList from './wishlist/WishList';
import Header from './Header/Header';
import MyProfile from './myprofile/MyProfile';
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home1/>}/>
        <Route path='/shopgrid' element={<Shop/>}/>
        <Route path='/shoplist' element={<Shop/>}/>
        <Route path='/shopfull' element={<ShopFullProduct/>}/>
        <Route path='/singleproduct' element={<SingleProduct/>}/>
        <Route path='/home2' element={<Home2/>}/>
        <Route path='/cartpage' element={<CartPage/>}/>        
        <Route path='/checkout' element={<CheckOut/>}/>        
        <Route path='/placeorder' element={<PlaceOrder/>}/>        
        <Route path='/information' element={<Information/>}/>        
        <Route path='/contactus' element={<ContactUs/>}/>        
        <Route path='/wishlist' element={<WishList/>}/>        
        <Route path='/myprofile' element={<MyProfile/>}/>        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
