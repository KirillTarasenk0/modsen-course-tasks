//Напишите функцию, которая принимает
// число и выводит количество цифр в этом
// числе.

function defineNumbersCount(number) {
    let numbersCount = 0;
    const arrayFromNumber = number.toString().split('').map(Number);
    for (let i = 0; i < arrayFromNumber.length; i++) {
        numbersCount++;
    }
    console.log(numbersCount);
}

defineNumbersCount(12345);