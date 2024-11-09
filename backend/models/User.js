const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
  isAuthenticated: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);
