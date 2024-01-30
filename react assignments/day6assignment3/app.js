// app.js
const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

const users = [];

// Define a route for handling GET request to the root path
app.get('/', (req, res) => {
  res.send('Welcome to the User API!');
});

app.post('/api/register', (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username is already taken
    if (users.some(user => user.username === username)) {
      return res.status(400).json({ error: 'Username is taken' });
    }

    const newUser = { username, password };
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/login', (req, res) => {
  try {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
