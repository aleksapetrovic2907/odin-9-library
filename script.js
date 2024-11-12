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

function generateCardFromBook(book) {
    const card = document.createElement("div");
    const author = document.createElement("div");
    const title = document.createElement("div");
    const pagesCount = document.createElement("div");
    const releaseDate = document.createElement("div");

    // apply style

    card.appendChild(author);
    card.appendChild(title);
    card.appendChild(pagesCount);
    card.appendChild(releaseDate);

    return card;
}