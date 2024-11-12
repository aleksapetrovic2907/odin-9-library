const myLibrary = [];

function Book(author, title, releaseDate) {
    this.author = author;
    this.title = title;
    this.releaseDate = releaseDate;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}