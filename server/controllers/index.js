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

    let data = await model.getAnswers(question_id, page, count);

    res.status(200).send(data);
  },
  addQuestion: (req, res) => {

  },

}

module.exports = controllers;