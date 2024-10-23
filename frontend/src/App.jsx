import React, { useState } from 'react';
import { Navigate,Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Bookss from './Books/bookss';
import Login from './components/Login';
import Signup from './components/signup';
import Cart from './components/cart';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import Checkout from './components/checkout';
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
        <Route path="/Checkout" element={<Checkout/>}/>
      </Routes>
      <Toaster />
    </div>
  );
}
