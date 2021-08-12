-- 6. Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título.
SELECT * FROM sakila.film
WHERE rating = 'NC-17'  
ORDER BY rental_rate DESC, title
LIMIT 50;