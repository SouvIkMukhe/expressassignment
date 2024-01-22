const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const Book = require('./models/book');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello, this is the Book CRUD App!');
});

// Get all books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Add a book
app.post('/books', async (req, res) => {
  try {
    const { title, author } = req.body;
    const newBook = new Book({ title, author });
    const savedBook = await newBook.save();
    res.json(savedBook);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Update a book by ID
app.put('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Invalid book ID.' });
    }

    const updatedBook = await Book.findByIdAndUpdate(id, { title, author }, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found.' });
    }

    res.json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete a book by ID
app.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Invalid book ID.' });
    }

    const deletedBook = await Book.findByIdAndRemove(id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found.' });
    }

    res.json({ message: 'Book deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
