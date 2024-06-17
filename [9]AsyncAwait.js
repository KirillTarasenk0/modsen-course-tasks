//Напишите функцию fetchUserData, которая
// использует async/await для загрузки данных
// о пользователе с сервера по его
// идентификатору. Функция должна
// принимать идентификатор пользователя в
//качестве аргумента и возвращать объект с
// данными о пользователе

async function fetchUserData(userName) {
    try {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        const userData = await response.json();
        return {
            name: userData.login,
            id: userData.id,
        };
    } catch (error) {
        console.error('Произошла ошибка при загрузке данных пользователя с GitHub:', error);
        throw error;
    }
}

fetchUserData('KirillTarasenk0')
    .then(userData => console.log(userData))
    .catch(error => console.error(error));

