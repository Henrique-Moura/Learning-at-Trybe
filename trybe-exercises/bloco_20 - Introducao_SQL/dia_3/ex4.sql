-- 4.Quantos clientes estão ativos e na loja 1 ?
SELECT COUNT(active) FROM sakila.customer
WHERE active IS TRUE AND store_id = 1; 