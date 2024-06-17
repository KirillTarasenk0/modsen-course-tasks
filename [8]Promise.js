//Напишите функцию, которая конвертирует
// функцию, основанную на callbacks, в
// функцию, основанную на Promises

function convertToPromise(func) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            func(...args, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    };
}

function callbackFunction(arg1, arg2, callback) {
    setTimeout(() => {
        const result = arg1 + arg2;
        callback(null, result);
    }, 1000);
}

const promiseFunction = convertToPromise(callbackFunction);

promiseFunction(10, 20)
    .then(result => console.log('Результат:', result))
    .catch(error => console.error('Ошибка:', error));
