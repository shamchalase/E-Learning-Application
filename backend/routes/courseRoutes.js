const express = require('express');
const router = express.Router();
const { selectCourse } = require('../controllers/courseController');

// Route to save selected course to the database
router.post('/select', selectCourse);

module.exports = router;
