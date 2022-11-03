const { pool } = require('../db');

const answersArrayToObject = (answers) => {
  let result = {};

  answers.forEach(row => {
    //Rename answer_id to id to follow format of old API
    row.id = row.answer_id;
    row.answer_id = undefined;
    result[row.id] = row;
  });

  return result;
};

let model = {
  getQuestions: async (product_id, page=1, count=5) => {
    let pageRows = (page - 1) * count;

    try{
      const result = await pool.query(`
        SELECT id AS question_id, question_body, question_date, asker_name, question_helpfulness, reported
        FROM questions
        WHERE product_id=$1
        AND reported=false
        ORDER BY question_helpfulness DESC
        OFFSET $2 ROWS
        FETCH NEXT $3 ROWS ONLY
      `, [product_id, pageRows, count]);

      //Probably modify later to use join table
      let modifiedQs = await Promise.all(result.rows.map(async (row) => {
        let answers = await model.getAnswers(row.question_id);
        answers = answersArrayToObject(answers.results);

        row.question_date = new Date(+row.question_date).toISOString();
        row.answers = answers;

        return row;
      }));

      let questionResults = {
        product_id: product_id,
        results: modifiedQs
      };

      return questionResults;
    } catch(err) {
      console.error(err);
      return err;
    }
  },

  getAnswers: async (question_id, page=1, count=5) => {
    let pageRows = (+page - 1) * +count;

    try{
      const answerList = await pool.query(`
        SELECT id AS answer_id, body, date, answerer_name, helpfulness
        FROM answers
        WHERE question_id=$1
        AND reported=false
        ORDER BY helpfulness DESC
        OFFSET $2 ROWS
        FETCH NEXT $3 ROWS ONLY
      `, [question_id, pageRows, count]);

      let finalList = await Promise.all(answerList.rows.map(async (row) => {
        const photos = await model.getPhotos(row.answer_id);
        row.photos = photos;
        row.date = new Date(+row.date).toISOString();
        return row;
      }));

      let results = {
        question: question_id,
        page: +page,
        count: +count,
        results: finalList
      }

      return results;
    } catch(err) {
      console.error(err);
      return err;
    }
  },

  getPhotos: async (answer_id) => {
    try{
      const answerList = await pool.query(`
        SELECT id, url FROM photos
        WHERE answer_id=$1
      `, [answer_id]);

      return answerList.rows;
    } catch(err) {
      console.error(err);
      return err;
    }
  },

  addQuestion: async (body, name, email, product_id) => {
    try{
      const result = await pool.query(`
        INSERT INTO questions
        (product_id, question_body, asker_name, asker_email)
        VALUES ($1, $2, $3, $4)
      `, [product_id, body, name, email]);

    } catch(err) {
      console.error(err);
      return err;
    }
  },

  addAnswer: async (body, name, email, question_id, photos) => {
    try{
      const result = await pool.query(`
        INSERT INTO answers
        (question_id, body, answerer_name, answerer_email)
        VALUES ($1, $2, $3, $4)
        RETURNING id
      `, [question_id, body, name, email]);

      let insertedId = result.rows[0].id;

      await Promise.all(photos.map( async (url) => {
        await pool.query(`
          INSERT INTO photos
          (answer_id, url)
          VALUES ($1, $2)
        `, [insertedId, url]);
      }));

    } catch(err) {
      console.error(err);
      return err;
    }
  },

  helpQuestion: async (question_id) => {
    try{
      await pool.query(`
        UPDATE questions
        SET question_helpfulness=question_helpfulness+1
        WHERE id=$1
      `, [question_id]);
    } catch(err) {
      console.error(err);
      return err;
    }
  },

  reportQuestion: async (question_id) => {
    try{
      await pool.query(`
        UPDATE questions
        SET reported=true
        WHERE id=$1
      `, [question_id]);
    } catch(err) {
      console.error(err);
      return err;
    }
  },

  helpAnswer: async (answer_id) => {
    try{
      await pool.query(`
        UPDATE answers
        SET helpfulness=helpfulness+1
        WHERE id=$1
      `, [answer_id]);
    } catch(err) {
      console.error(err);
      return err;
    }
  },

  reportAnswer: async (answer_id) => {
    try{
      await pool.query(`
        UPDATE answers
        SET reported=true
        WHERE id=$1
      `, [answer_id]);
    } catch(err) {
      console.error(err);
      return err;
    }
  },
}

/* var s = new Date( 1667512487794).toISOString();
console.log(s); */

// model.getQuestions();

module.exports = model;