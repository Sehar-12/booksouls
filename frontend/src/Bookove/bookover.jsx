import React from 'react';
import Navbar from '../components/Navbar';
import BookoverContent from '../components/bookover';
import Footer from '../components/footer';

function Bookover() {
  return (
    <div className="min-h-screen dark:bg-slate-900 dark:text-white">
      <Navbar />
      <BookoverContent />
      <Footer />
    </div>
  );
}

export default Bookover;
