import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/cart';
import Login from './pages/login';
import Productdetail from './pages/productdetail';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ShopPage from './pages/shop';

function App() {
  const [user, setUser] = useState(null);
console.log(user)
  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  function handleLogin(user) {
    setUser(user);
    console.log(user)
  }

  function handleLogout() {
    setUser(null);
  }


  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<Login onLogin={handleLogin} />}/>  
    <Route path="/cart" element={<Cart />}/>
    <Route path="/shop" element={<ShopPage />}/>
    <Route path='/product-details/:id' element={<Productdetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
