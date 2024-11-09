const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  email: { type: String, required: true },
  courseTitle: { type: String, required: true },
  score: { type: Number, required: true }
});

module.exports = mongoose.model('Report', ReportSchema);
