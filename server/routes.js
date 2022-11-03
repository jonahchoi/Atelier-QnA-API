const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

// own routes to controller here
router.get('/qa/questions', controllers.getQuestions);
router.get('/qa/questions/:question_id/answers', controllers.getAnswers);

module.exports = router;