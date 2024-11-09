const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  videos: [{ title: String, url: String }]
});

module.exports = mongoose.model('Course', CourseSchema);
