-- Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
SELECT * FROM sakila.film
WHERE title LIKE '%ace%';