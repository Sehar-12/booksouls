import React from 'react';
import Navbar from '../components/Navbar';
import Books from '../components/Book';
import Footer from '../components/footer';

function Bookss() {
  return (
    <>
      <div className="min-h-screen dark:bg-slate-900 dark:text-white">
        <Navbar />
        <Books /> {/* Books component can now dispatch add-to-cart actions directly */}
        <Footer />
      </div>
    </>
  );
}

export default Bookss;
