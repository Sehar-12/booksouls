import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../store/CartSlice';
import {Link} from 'react-router-dom'
function Cards({ item }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(item)); // Add item to cart
  };

  return (
    <div className='mt-4 my-3 p-3'>
      
      <div className="card bg-base-100  h-full shadow-xl hover:scale-105 transition duration-200 dark:bg-slate-800 dark:text-white dark:border">
        <div className="relative w-full h-48">
        <Link to={`/Bookover/${item._id}`}>
          <img
            src={item.image}
            alt={item.title}
            className="mt-4 w-full h-64 object-contain"
            onError={(e) => {
              e.target.onerror = null; // Prevent looping
              e.target.src = '/path/to/fallback/image.png'; // Fallback image path
            }}
          />
          </Link>
        </div>
        <div className="mt-[100px] card-body flex flex-col justify-between h-full">
          <h2 className="card-title dark:text-white">
            {item.title}
            <div className="md:text-[11.5px] badge badge-secondary py-4 ">{item.genre}</div>
          </h2>
          <p className="dark:text-gray-300">{item.description}</p>
          <div className="card-actions flex justify-between mt-4">
            <div className="badge badge-outline dark:bg-gray-700 dark:text-white">${item.price}</div>
            <div
              className="cursor-pointer rounded-full border-[2px] px-2 py-1 hover:bg-pink-500 hover:text-white duration-200"
              onClick={handleAddToCart} // Add to cart on click
            >
              Add to Cart
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Cards;
