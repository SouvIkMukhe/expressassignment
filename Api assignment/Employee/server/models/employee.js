const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
