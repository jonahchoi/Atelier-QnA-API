const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

// own routes to controller here
router.get('/qa/questions', controllers.getQuestions);

module.exports = router;