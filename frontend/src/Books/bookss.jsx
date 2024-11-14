import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Books from "../components/Book";
import Footer from "../components/footer";

function Bookss() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (term) => {
    setSearchTerm(term); // Updating the search term
  };
  return (
    <>
      <div className="min-h-screen dark:bg-slate-900 dark:text-white">
        <Navbar onSearchChange={handleSearchChange} />
        <Books searchTerm={searchTerm} />
        {/* Books component can now dispatch add-to-cart actions directly */}
        <Footer />
      </div>
    </>
  );
}

export default Bookss;