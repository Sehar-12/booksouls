import Book from '../model/book.model.js';

// Function to get all books
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.log("Error fetching books:", error);
        res.status(500).json({ message: "Error fetching books" });
    }
};

// Function to get a single book by ID
export const getBookById = async (req, res) => {
    try {
        const { id } = req.params; // Get the book ID from request parameters
        const book = await Book.findById(id); // Fetch book by ID
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.status(200).json(book);
    } catch (error) {
        console.log("Error fetching book details:", error);
        res.status(500).json({ message: "Error fetching book details" });
    }
};
