const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/*
1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */
function addTurn(obj, chave, valor) {
  obj[chave] = valor;
}
addTurn(lesson2, 'turno', 'manhã')
console.log(lesson2)

/*2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */
function listObjKeys(obj){
  return Object.keys(obj)
}
console.log(listObjKeys(lesson3))


// 3 - Crie uma função para mostrar o tamanho de um objeto.
function objLegnth(obj) {
  return Object.keys(obj).length
}
console.log(objLegnth(lesson1))

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listObjValues(obj){
  return Object.values(obj)
}
console.log(listObjValues(lesson3))

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
console.log(allLessons);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
function studentsNumber(obj) {
  let counter = 0;
  const array = Object.values(obj)
  for (let index = 0; index < array.length ; index += 1) {
    counter += array[index].numeroEstudantes;
  }
  return counter;
}
console.log(studentsNumber(allLessons))

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
// Gabarito
const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));