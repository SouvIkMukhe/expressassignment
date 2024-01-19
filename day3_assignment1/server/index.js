// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3003;

// Sample product data
const products = [
  { pid: 1, pname: 'Laptop', price: 800, category: 'Electronics' },
  { pid: 2, pname: 'Smartphone', price: 500, category: 'Electronics' },
  { pid: 3, pname: 'Tablet', price: 300, category: 'Electronics' },
  { pid: 4, pname: 'Almonds', price: 12, category: 'Dry Fruits' },
  { pid: 5, pname: 'Cashews', price: 10, category: 'Dry Fruits' },
  { pid: 6, pname: 'Dates', price: 8, category: 'Dry Fruits' },
];

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware for styling
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Route to display all products
app.get('/products', (req, res) => {
  res.render('allProducts', { products });
});

// Route to display selected product based on id
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const selectedProduct = products.find(product => product.pid === productId);
  res.render('selectedProduct', { selectedProduct });
});

// Route to display products based on selected category
app.get('/category', (req, res) => {
  const category = req.query.category;
  const categoryProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
  res.render('categoryProducts', { categoryProducts, category });
});

// POST route to add a new product
app.post('/products', (req, res) => {
  const { newProductName, newProductPrice, newProductCategory } = req.body;
  
  // Simple validation
  if (!newProductName || !newProductPrice || !newProductCategory) {
    return res.status(400).send('Please provide all details.');
  }

  const newProduct = {
    pid: products.length + 1,
    pname: newProductName,
    price: parseFloat(newProductPrice),
    category: newProductCategory,
  };

  products.push(newProduct);

  res.redirect('/products');
});

// Home page with hyperlinks and form for adding items
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
