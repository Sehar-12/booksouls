// route/book.route.js
import express from 'express';
import { getBooks, getBookById } from '../controller/book.controller.js';

const router = express.Router();

// Route to get all books
router.get('/', getBooks);

// Route to get a single book by ID
router.get('/:id', getBookById);

export default router;
