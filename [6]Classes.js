//Создайте класс Book со свойствами названия,
// автора и года публикации. Включите метод
// отображения сведений о книге. Создайте
// подкласс под названием «Ebook», который
// наследуется от класса «Book» и включает
// дополнительное свойство для цены книги.
// Переопределите метод отображения, чтобы
// включить цену книги. Создайте экземпляр
// класса «Электронная книга» и отобразите его
// сведения.

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    displayInfo() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
}

class Ebook extends Book {
    constructor(title, author, year, price) {
        super(title, author, year);
        this.price = price;
    }
    displayInfo() {
        return `${super.displayInfo()}, Price: ${this.price}`;
    }
}

const ebook = new Ebook('Title ebook', 'Author ebook', 2024, 100);
console.log(ebook.displayInfo());
