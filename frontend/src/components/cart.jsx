// src/components/Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, updateItemQuantity } from '../store/CartSlice'; // Import the actions
import { Link } from 'react-router-dom';
function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.price || 0;
      const itemQuantity = item.quantity || 1;
      return total + itemPrice * itemQuantity;
    }, 0).toFixed(2);
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id)); // Dispatch action to remove item
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      dispatch(removeItemFromCart(id)); // Remove item if quantity is less than 1
    } else {
      dispatch(updateItemQuantity({ id, quantity })); // Dispatch action to update quantity
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl md:text-3xl font-bold">Shopping Cart</h1>
        <div className="text-center p-8">
          <h1 className="text-pink-500 font-semibold text-xl">Your cart is empty</h1>
          <h3 className="mt-4">Continue your journey and explore more fantastic reads</h3>
          <button
            onClick={() => window.location.href = '/'}
            className="mt-5 px-6 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Shopping Cart</h2>
      <ul className="divide-y divide-gray-200">
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <img src={item.image} alt={item.title} className="w-30 h-40 object-cover mr-4" />
              <div className="flex flex-col">
                <strong className="text-lg">{item.title}</strong>
                <div className="text-sm text-gray-600">${item.price ? item.price.toFixed(2) : '0.00'}</div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mx-3">Quantity:</span>
              <button
                className="px-2 py-1 bg-slate-800 text-white rounded transition duration-200 hover:bg-slate-700"
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1} // Disable the "-" button if quantity is 1
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                className="px-2 py-1 bg-slate-800 text-white rounded transition duration-200 hover:bg-slate-700"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="ml-4 text-red-600 hover:text-red-800 transition duration-200"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h3 className="font-bold text-lg mt-6 text-right">Total: ${calculateTotalPrice()}</h3>
      <div className="flex justify-center mt-8">
       <Link to="/payment">
        <button className='font-bold px-11 py-2 text-lg bg-black text-white rounded hover:bg-gray-800 transition duration-300'>
          Checkout
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
