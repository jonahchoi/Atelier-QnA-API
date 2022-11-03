const model = require('../models');

let controllers = {
  getQuestions: async (req, res) => {
    let {product_id, page, count} = req.query;

    let data = await model.getQuestions(product_id, page, count);

    res.status(200).send(data);
  },
  addQuestion: (req, res) => {

  },

}

module.exports = controllers;