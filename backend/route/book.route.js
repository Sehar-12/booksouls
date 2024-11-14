import express from 'express';
import path from 'path';
import { getBooks, getBookById } from '../controller/book.controller.js';

const router = express.Router();

// Route to get all books
router.get('/', getBooks);

// Route to get a single book by ID
router.get('/:id', getBookById);

// Serve the PDF file based on the filename stored in the database
router.get('/pdf/:pdfFilename', (req, res) => {
  const { pdfFilename } = req.params;

  // Define the path to the 'pdfs' directory
  const pdfPath = path.join(process.cwd(), 'public', 'pdfs', pdfFilename);
  
  // Check if the file exists and serve it
  res.sendFile(pdfPath, (err) => {
    if (err) {
      res.status(404).json({ message: "PDF not found" });
    }
  });
});

export default router;
