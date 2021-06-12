-- Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito .

SELECT * FROM sakila.film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';