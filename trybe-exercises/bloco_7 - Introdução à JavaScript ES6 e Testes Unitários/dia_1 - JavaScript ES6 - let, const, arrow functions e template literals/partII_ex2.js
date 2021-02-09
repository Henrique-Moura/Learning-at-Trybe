const biggestWord = string => {
  let contador = '';
  let array = string.split(' ');
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > contador.length) {
      contador =  array[index]
    }
  }
  return contador
}
console.log(biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))