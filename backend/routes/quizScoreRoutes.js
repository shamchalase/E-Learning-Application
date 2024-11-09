const express = require('express');
const router = express.Router();
const { selectScore } = require('../controllers/quizController');

// Route to save selected course to the database
router.post('/quiz-score', selectScore);

module.exports = router;