const express = require('express');
const exphbs = require('express-handlebars').create();
const path = require('path');

const app = express();
const port = 3003;

// Sample customer data
const customers = [
  {"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"},
  {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"},
  {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"},
  {"Name":"Around the Horn","City":"London","Country":"UK"},
  {"Name":"B's Beverages","City":"London","Country":"UK"},
  {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"},
  {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}
];

// Set Handlebars as the view engine
app.engine('hbs', exphbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Define a route to display customer details
app.get('/customers', (req, res) => {
  res.render('customerDetails', { customers, pageTitle: 'Customer Details' });
});

// Redirect to the /customers route when the server starts
app.get('/', (req, res) => {
  res.redirect('/customers');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
