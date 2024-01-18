const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3003;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('Welcome to the Product Details API.');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
