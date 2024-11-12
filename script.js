const library = [];
const bookCardMap = new Map();

function Book(author, title, pagesCount, releaseDate) {
    this.author = author;
    this.title = title;
    this.pagesCount = pagesCount;
    this.releaseDate = releaseDate;
}

function addBookToLibrary(book) {
    library.push(book);
}