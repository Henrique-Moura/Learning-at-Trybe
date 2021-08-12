-- 2.Precisamos de um relatório dos nomes dos clientes, em ordem alfabética , que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2 , e não inclua o cliente KENNETH no resultado.
SELECT 
    *
FROM
    sakila.customer
WHERE
    active IS FALSE AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name;