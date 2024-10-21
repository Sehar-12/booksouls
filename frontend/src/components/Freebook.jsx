import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './cards';
import lists from '../../public/lists.json';

function Freebook() {
  const [selectGenre, setSelectGenre] = useState("Fantasy"); // Default genre

  const filterData = lists.filter((data) => data.genre === selectGenre);



  return (<>
  <div className="flex items-center flex-col text-center">
  <hr className="w-full mb-4" />
  <h1 className="font-bold text-4xl mb-2">
    YOU CAN FIND YOUR FAVOURITE BOOKS HERE
  </h1>
  <hr className="w-full mt-4" />
</div>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-9">
      <div>
        <h1 className="font-bold text-xl pb-2">Categories</h1>
        <br />
        <div className="flex justify-evenly flex-wrap gap-2">
          <div
            className="border-[2px] px-4 py-2 cursor-pointer hover:bg-gray-300"
            onClick={() => setSelectGenre("Classic")}
          >
            Novels
          </div>
          <div
            className="border-[2px] px-4 py-2 cursor-pointer hover:bg-gray-300"
            onClick={() => setSelectGenre("Fiction")}
          >
            Fiction
          </div>
          <div
            className="border-[2px] px-4 py-2 cursor-pointer hover:bg-gray-300"
            onClick={() => setSelectGenre("Programming")}
          >
            Education
          </div>
          <div
            className="border-[2px] px-4 py-2 cursor-pointer hover:bg-gray-300"
            onClick={() => setSelectGenre("Children")}
          >
            Children
          </div>
          <div
            className="border-[2px] px-4 py-2 cursor-pointer hover:bg-gray-300"
            onClick={() => setSelectGenre("Nonfiction")}
          >
            Non-fiction
          </div>
          <div
            className="border-[2px] px-4 py-2 cursor-pointer hover:bg-gray-300"
            onClick={() => setSelectGenre("Thriller")}
          >
          Thriller
          </div>
          <div
            className="border-[2px] px-4 py-2 cursor-pointer hover:bg-gray-300"
            onClick={() => setSelectGenre("Others")}
          >
          Others
          </div>
        </div>
      </div>

      <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3">
        {filterData.length > 0 ? (
         
            filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))
          
        ) : (
          <div className="text-center text-lg font-semibold mt-4">
            No books found for the selected category.
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default Freebook;
