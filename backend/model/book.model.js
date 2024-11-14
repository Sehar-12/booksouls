import mongoose from "mongoose";

// Define the book schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  genre: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  pdfFilename: { type: String, required: true },
});

// Create the book model
const Book = mongoose.model("Book", bookSchema);

export default Book;

