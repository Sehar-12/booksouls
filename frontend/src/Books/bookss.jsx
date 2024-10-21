import React from 'react';
import Navbar from '../components/Navbar';
import Books from '../components/Book';
import Footer from '../components/footer';

function Bookss({ addToCart }) { // Accept addToCart as a prop
  return (
    <>
      <div className="min-h-screen dark:bg-slate-900 dark:text-white">
        <Navbar />
        <Books addToCart={addToCart} /> {/* Pass addToCart to Books */}
        <Footer />
      </div>
    </>
  );
}

export default Bookss;
