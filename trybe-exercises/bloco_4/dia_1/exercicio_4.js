// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let numbers = [5, 9, 0, 19, 70, 8, 100, -1, 35, 27];
    for(let index = 0; index < numbers.length; index+=1){
        if(numbers[index] > 0) {
            console.log('positive');
        } else if (numbers[index] < 0) {
            console.log('negative');
        } else {
            console.log('zero');
        }
    }
