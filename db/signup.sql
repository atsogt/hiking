INSERT INTO skills_4 (username, password)
VALUES ($1, $2)
RETURNING * ;