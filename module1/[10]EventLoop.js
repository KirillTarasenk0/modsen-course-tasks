//Используя Promise, выведите числа от 1 до
// 10 через секунду каждый раз.
// Ограничения: setTimeout и new Promise() мы
// можно вызывать только один раз.

function printNumbers(from, to) {
    let current = from;
    return new Promise(resolve => {
        setTimeout(function go() {
            console.log(current);
            if (current < to) {
                setTimeout(go, 1000);
                current++;
            } else {
                resolve();
            }
        }, 1000);
    });
}

printNumbers(1, 10);
