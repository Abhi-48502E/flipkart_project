import React from 'react'
import Logo from '../Assets/logo3.png'
import ReactDOM from "react-dom/client";
import './navbar.css'
import { HiShoppingCart } from 'react-icons/hi';
import { GoSearch } from 'react-icons/go';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Login from './Login';




function Navbar() {
  return (
    <div className='containerw'>
      <img src={Logo} alt="vbgcj" className='logo' />
      <input id='jj' class="search" type="text" placeholder="Search for products, brands and more" /><GoSearch id='search-icon' />
      <Link to="/login"> <button className='btnzz'>LOGIN</button></Link>
      <h6 className='nav-text'>Become a Seller</h6>
      <h6 className='nav-text2'>More</h6>
      <HiShoppingCart id='cart' />
      <h6 className='nav-text3'>Cart</h6>
      <Outlet />
    </div>
  )
}

export default Navbar