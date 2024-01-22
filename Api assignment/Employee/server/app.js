const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const Employee = require('./models/employee');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

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
  res.send('Hello, this is the Employee CRUD App!');
});

// Get all employees
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Add an employee
app.post('/employees', async (req, res) => {
  try {
    const { firstName, lastName, position, salary } = req.body;
    const newEmployee = new Employee({ firstName, lastName, position, salary });
    const savedEmployee = await newEmployee.save();
    res.json(savedEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Update an employee by ID
app.put('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, position, salary } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Invalid employee ID.' });
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { firstName, lastName, position, salary },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found.' });
    }

    res.json(updatedEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete an employee by ID
app.delete('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status  (404).json({ message: 'Invalid employee ID.' });
    }

    const deletedEmployee = await Employee.findByIdAndRemove(id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found.' });
    }

    res.json({ message: 'Employee deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
