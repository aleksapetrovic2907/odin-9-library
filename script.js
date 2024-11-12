const library = [];
const bookCards = [];

function Book(author, title, pagesCount, releaseDate) {
    this.author = author;
    this.title = title;
    this.pagesCount = pagesCount;
    this.releaseDate = releaseDate;
}

function BookCard(book, card) {
    this.book = book;
    this.card = card;
}

function addBookToLibrary(book) {
    library.push(book);
}