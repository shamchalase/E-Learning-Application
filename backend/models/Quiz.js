const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Assuming you want to track scores by user
  score: { type: Number, required: true },
  successFulQuizCount: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quiz', quizSchema);
