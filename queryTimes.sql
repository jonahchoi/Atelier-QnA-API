\timing
SELECT json_build_object(
  'product_id', 1,
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
    WHERE product_id=1
    AND reported=false
    ORDER BY question_helpfulness DESC
    OFFSET 0 ROWS
    FETCH NEXT 5 ROWS ONLY
  ) results)
);

SELECT json_build_object(
  'question', 1,
  'page', 1,
  'count', 5,
  'results', (SELECT COALESCE(json_agg(row_to_json(results)), '[]'::json) FROM (
    SELECT id as answer_id, body, date, answerer_name, helpfulness, (
      SELECT COALESCE(json_agg(row_to_json(photo_res)), '[]'::json) FROM (
        SELECT id, url
        FROM photos
        WHERE photos.answer_id=answers.id
      )photo_res
    ) photos
    FROM answers
    WHERE question_id=1
    AND reported=false
    ORDER BY helpfulness DESC
    OFFSET 0 ROWS
    FETCH NEXT 5 ROWS ONLY
  ) results)
);

INSERT INTO questions (product_id, asker_name, asker_email, question_body)
VALUES (1, 'Test', 'test@email.com', 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum');

INSERT INTO answers (question_id, answerer_name, answerer_email, body)
VALUES (1, 'Test',  'test@email.com', 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum');
\timing





