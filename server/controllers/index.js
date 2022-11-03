const model = require('../models');

let controllers = {
  getQuestions: async (req, res) => {
    let {product_id, page, count} = req.query;

    try{
      let data = await model.getQuestions(product_id, page, count);

      res.status(200).send(data);
    } catch(err) {
      res.sendStatus(404);
    }
  },
  getAnswers: async (req, res) => {
    let {question_id} = req.params;
    let {page, count} = req.query;

    try{
      let data = await model.getAnswers(question_id, page, count);

      res.status(200).send(data);
    } catch(err) {
      res.sendStatus(404);
    }
  },
  postQuestion: async (req, res) => {
    let {body, name, email, product_id} = req.body;

    try{
      await model.addQuestion(body, name, email, product_id);

      res.sendStatus(201);
    } catch(err) {
      res.sendStatus(404);
    }
  },
  postAnswer: async (req, res) => {
    let {question_id} = req.params;
    let {body, name, email, photos} = req.body;

    try{
      await model.addAnswer(body, name, email, question_id, photos);

      res.sendStatus(201);
    } catch(err) {
      res.sendStatus(404);
    }
  },

  helpQuestion: async (req, res) => {
    let {question_id} = req.params;

    try{
      await model.helpQuestion(question_id);

      res.sendStatus(204);
    } catch(err) {
      res.sendStatus(404);
    }
  },

  reportQuestion: async (req, res) => {
    let {question_id} = req.params;

    try{
      await model.reportQuestion(question_id);

      res.sendStatus(204);
    } catch(err) {
      res.sendStatus(404);
    }
  },

  helpAnswer: async (req, res) => {
    let {answer_id} = req.params;

    try{
      await model.helpAnswer(answer_id);

      res.sendStatus(204);
    } catch(err) {
      res.sendStatus(404);
    }
  },

  reportAnswer: async (req, res) => {
    let {answer_id} = req.params;

    try{
      await model.reportAnswer(answer_id);

      res.sendStatus(204);
    } catch(err) {
      res.sendStatus(404);
    }
  }

}

module.exports = controllers;