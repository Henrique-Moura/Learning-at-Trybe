//Exercício 11 : Utilizando uma única operação, crie um campo chamado sequels e atribua a ele o valor 0 em todos os documentos.
db.movies.updateMany({}, { $mul: { sequels: 100 } });

