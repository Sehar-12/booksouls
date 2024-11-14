import React, { useState } from 'react';
import { Navigate,Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Bookss from './Books/bookss';
import Login from './components/Login';
import Signup from './components/signup';
import Cart from './components/cart';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import Payment from "./components/Payment";
import OrdersPage from './components/OrdersPage';
import Bookover from './Bookove/bookover';
import AboutUs from './components/AboutUs.jsx';
import BookPage from './components/BookPage'; 
import ContactUs from './components/Contact.jsx';
export default function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={authUser?<Bookss />:<Navigate to="/signup"/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Cart" element={authUser?<Cart />:<Navigate to="/signup"/>} />
        <Route path='/About' element={<AboutUs/>}/>
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/Bookover/:bookId" element={<Bookover />} />
        <Route path="/Contact" element={<ContactUs/>}/>

      </Routes>
      <Toaster />
    </div>
  );
}
