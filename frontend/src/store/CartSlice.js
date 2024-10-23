// src/store/CartSlice.js

import { createSlice } from '@reduxjs/toolkit';
import toast, { Toaster } from 'react-hot-toast';
const initialState = {
  items: (JSON.parse(localStorage.getItem('cartItems')) || []).map(item => ({
    ...item,
    quantity: item.quantity || 1, // Default to quantity: 1 if missing
  })),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      toast.success("Item added to Cart");
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity of 1
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items)); // Update localStorage
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      toast.error("Item removed from the Cart") // Remove item
      localStorage.setItem('cartItems', JSON.stringify(state.items)); // Update localStorage
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity; 
        // Correctly set the quantity to the value passed from the action
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items)); // Update localStorage
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
