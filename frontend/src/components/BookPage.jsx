import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookPage() {
  const { id } = useParams(); // Get the book id from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch book details from your backend API using the id
    fetch(`/api/book/${id}`)
      .then(response => response.json())
      .then(data => {
        setBook(data); // Set the fetched book details into the state
      })
      .catch(error => {
        console.error("Error fetching book:", error);
      });
  }, [id]);

  if (!book) {
    return <div>Loading...</div>; // Show loading until book data is fetched
  }

  const { title, image, price, pdfFilename } = book;

  const handleReadNowClick = () => {
    // Open the PDF in a new browser tab
    window.open(`/pdfs/${pdfFilename}`, "_blank");
  };

  return (
    <div className="book">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>${price}</p>
      <button onClick={handleReadNowClick}>Read Now</button>
    </div>
  );
}

export default BookPage;
