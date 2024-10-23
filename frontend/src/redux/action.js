// src/redux/actions.js

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const ADD_ITEM = 'ADD_ITEM';

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id,  // Payload contains the ID of the item to remove
});

export const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },  // Payload contains both item ID and the new quantity
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,  // Payload contains the item object to add
});
