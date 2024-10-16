const books = [
    {
        title: "Гарри Поттер",
        author: "Джоан Кэтлин Роулинг",
        year: 1997,
        pages: 309,
    },
    {
        title: "Властелин колец",
        author: "Джон Р.Р. Толкин",
        year: 1954,
        pages: 423,
    },
    {
        title: "Маленький принц",
        author: "Антуан де Сент-Экзюпери",
        year: 1943,
        pages: 96,
    },
];

console.log(books);

const BookTitle = prompt("Какую книгу вы хотите добавить ?");

const newBookTitle = {
    title: BookTitle,
    author: null,
    year: null,
    pages: null
};
books.push(newBook);
console.log(books);
