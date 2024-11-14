// src/store/CartSlice.js

import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  items: (JSON.parse(localStorage.getItem('cartItems')) || []).map(item => ({
    ...item,
    quantity: item.quantity || 1,
  })),
  orders: JSON.parse(localStorage.getItem('orders')) || [], // Persist orders in localStorage
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      toast.success("Item added to Cart");
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      toast.error("Item removed from the Cart");
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    addItemsToOrders: (state, action) => {
      state.orders.push(...action.payload); // Add all cart items to orders
      localStorage.setItem('orders', JSON.stringify(state.orders)); // Persist orders
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem('cartItems', JSON.stringify(state.items)); // Clear cart in localStorage
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, addItemsToOrders, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
