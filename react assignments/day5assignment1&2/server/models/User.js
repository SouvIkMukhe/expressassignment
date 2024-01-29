// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uid: String,
  pwd: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
