//Напишите функцию, которая принимает
// массив в качестве параметра и выдает
// пользовательскую ошибку, если массив пуст.

function checkArrayNotEmpty(array) {
    if (array.length === 0) {
        throw new Error("Array is empty");
    }
}

try {
    checkArrayNotEmpty([1]);
    console.log('test');
    checkArrayNotEmpty([]);
    console.log('test1')
} catch (error) {
    console.error(error.message);
}