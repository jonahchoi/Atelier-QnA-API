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
      const result = await pool.query('INSERT INTO test (id, name) VALUES ($1, $2)', [2, 'john']);
      console.log('done');
    } catch(err) {
      console.error(err);
    }
  }
}

// model.getQuestions();

module.exports = model;