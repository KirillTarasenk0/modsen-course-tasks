//Напишите функцию, которая принимает
// массив и возвращает true, если в массиве
// есть дубликаты, и false, если нет.
// Используйте строгий режим

'use strict'

const array1 = [1, 2, 3, 2, 4, 5, 6];
const array2 = [1, 2, 3, 4, 5, 6];

function arrayHasDuplicates(array) {
    const set = new Set(array);
    return set.size !== array.length;
}

console.log(arrayHasDuplicates(array1));
console.log(arrayHasDuplicates(array2));