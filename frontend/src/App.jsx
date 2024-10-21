import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Bookss from './Books/bookss';
import Login from './components/Login';
import Signup from './components/signup';
import Cart from './components/cart';


export default function App() {


  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<Bookss />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}
