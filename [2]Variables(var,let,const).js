//Создайте функцию и внутри неё объявите
// переменные с использованием var, let и
// const. Попробуйте обратиться к этим
// переменным вне функции. Какие
// переменные будут видны снаружи функции,
// а какие нет?

function defineVariablesVisible() {
    var first = 'first';
    let second = 'second';
    const third = 'third';
}

//ни одна не будет видна
console.log(first);
console.log(second);
console.log(third);