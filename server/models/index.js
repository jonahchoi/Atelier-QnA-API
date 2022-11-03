const { pool } = require('../db');

let model = {
  getQuestions: async () => {
    try{
      const result = await pool.query('SELECT * FROM test');

      console.log(result);
    } catch(err) {
      console.error(err);
    }
  },

  addQuestion: async () => {
    try{
      const result = await pool.query('INSERT INTO questions (product_id, question_body, asker_name, asker_email) VALUES ($1, $2, $3, $4)', [1, 'Test Question body', 'TestName', 'email@email.com']);
      console.log('done');
    } catch(err) {
      console.error(err);
    }
  }
}

var s = new Date(1616168857762).toISOString();
console.log(s);

// model.getQuestions();

module.exports = model;