\timing
SELECT id AS question_id, question_body, question_date, asker_name, question_helpfulness, reported
FROM questions
WHERE product_id=1
AND reported=false
ORDER BY question_helpfulness DESC
OFFSET 0 ROWS
FETCH NEXT 5 ROWS ONLY;
/* \timing

\timing */
-- EXPLAIN ANALYZE
SELECT id AS answer_id, body, date, answerer_name, helpfulness
FROM answers
WHERE question_id=3518962
AND reported=false
ORDER BY helpfulness DESC
OFFSET 0 ROWS
FETCH NEXT 5 ROWS ONLY;
/* \timing


\timing */
-- EXPLAIN ANALYZE
SELECT id, url FROM photos
WHERE answer_id=6879310;
\timing





