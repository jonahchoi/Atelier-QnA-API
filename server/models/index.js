const pool = require('../db');
const coalesce = require('pg-coalesce');

let model = {
  getQuestions: async (product_id, page=1, count=5) => {
    let pageRows = (page - 1) * count;

    try{
      const questionList = await pool.query(`
        SELECT json_build_object(
          'product_id', $1::int,
          'results', (SELECT COALESCE(json_agg(row_to_json(results)), '[]'::json) FROM (
            SELECT id AS question_id, question_body, question_date, asker_name, question_helpfulness, reported, (
              SELECT COALESCE(json_object_agg(results.id, row_to_json(results)), '{}'::json) FROM (
                SELECT id, body, date, answerer_name, helpfulness, (
                  SELECT COALESCE(json_agg(row_to_json(photo_res)), '[]'::json) FROM (
                    SELECT id, url
                    FROM photos
                    WHERE photos.answer_id=answers.id
                  )photo_res
                ) photos
                FROM answers
                WHERE answers.question_id=questions.id
                AND reported=false
                ORDER BY helpfulness DESC
                LIMIT 2
              ) results
            ) answers
            FROM questions
            WHERE product_id=$1
            AND reported=false
            ORDER BY question_helpfulness DESC
            OFFSET $2 ROWS
            FETCH NEXT $3 ROWS ONLY
          ) results)
        )
      `, [product_id, pageRows, count]);
      return questionList.rows[0].json_build_object;

    } catch(err) {
      console.error(err);
      return err;
    }
  },

  getAnswers: async (question_id, page=1, count=5) => {
    let pageRows = (+page - 1) * +count;

    try{
      const answerList = await pool.query(`
        SELECT json_build_object(
          'question', $1::int,
          'page', $2::int,
          'count', $3::int,
          'results', (SELECT COALESCE(json_agg(row_to_json(results)), '[]'::json) FROM (
            SELECT id as answer_id, body, date, answerer_name, helpfulness, (
              SELECT COALESCE(json_agg(row_to_json(photo_res)), '[]'::json) FROM (
                SELECT id, url
                FROM photos
                WHERE photos.answer_id=answers.id
              )photo_res
            ) photos
            FROM answers
            WHERE question_id=$1
            AND reported=false
            ORDER BY helpfulness DESC
            OFFSET $3 ROWS
            FETCH NEXT $4 ROWS ONLY
          ) results)
        )
      `, [question_id, page, pageRows, count]);
      return answerList.rows[0].json_build_object;

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