const { pool } = require('../db');

let model = {
  getQuestions: async (product_id, page=1, count=5) => {
    let pageRows = (page - 1) * count;

    try{
      const result = await pool.query(`
        SELECT * FROM questions
        WHERE product_id=$1
        ORDER BY question_helpfulness DESC
        OFFSET $2 ROWS
        FETCH NEXT $3 ROWS ONLY
      `, [product_id, pageRows, count]);

      return result.rows;
    } catch(err) {
      console.error(err);
    }
  },

  addQuestion: async (question) => {
    try{
      const result = await pool.query('INSERT INTO questions (product_id, question_body, asker_name, asker_email) VALUES ($1, $2, $3, $4)', [1, 'Test Question body', 'TestName', 'email@email.com']);
      console.log('done');
    } catch(err) {
      console.error(err);
    }
  }
}

/* var s = new Date(1616168857762).toISOString();
console.log(s); */

// model.getQuestions();

module.exports = model;