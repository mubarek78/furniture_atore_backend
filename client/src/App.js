import React from 'react';
import Register from './page/register'
import Login from './page/login'

import MyAccounts from './page/my-account/index';
// import { Counter } from './features/counter/Counter';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './component/Nav/Nav';
import ShopGrid from './page/shop';
import ProductDetails from './page/product/index';
import Cart from './page/cart/index';
import Checkout from './component/Checkout';
import Error from './page/error';
import Furniture from './page/furniture';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Furniture />}/>
    <Route path="/register" element={<Register />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/my-account" element={<MyAccounts />}/>
    <Route path="/shop" element={<ShopGrid />}/>
    <Route path='/product-details-one/:id'  element={<ProductDetails/>} />
    <Route path="/cart" element={<Cart />}/>
    <Route path="/checkout-one" element={<Checkout />}/>
    <Route path='*' element={<Error />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
