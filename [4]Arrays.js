//Напишите функцию, которая принимает
// массив с числами и находит сумму тех
// элементов этого массива, которые больше
// нуля и меньше десяти.

function arrayNumbersSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] < 10) {
            sum += array[i];
        }
    }
    return sum;
}

console.log(arrayNumbersSum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))