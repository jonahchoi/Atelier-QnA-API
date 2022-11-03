const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

// own routes to controller here
router.get('/qa/questions', controllers.getQuestions);
router.get('/qa/questions/:question_id/answers', controllers.getAnswers);
router.post('/qa/questions', controllers.postQuestion);
router.post('/qa/questions/:question_id/answers', controllers.postAnswer);
// router.put('/qa/questions/:question_id/helpful', controllers.helpQuestion);
// router.put('/qa/questions/:question_id/report', controllers.reportQuestion);
// router.put('/qa/answers/:answer_id/helpful', controllers.helpAnswer);
// router.put('/qa/answers/:answer_id/report', controllers.reportAnswer);

module.exports = router;