const library = [];
const booksByCardMap = new Map();
const booksContainer = document.querySelector("books-container");

function Book(author, title, pagesCount) {
    this.author = author;
    this.title = title;
    this.pagesCount = pagesCount;
}

function addBookToLibrary(book) {
    const card = generateCardFromBook(book);
    booksContainer.appendChild(card);
    
    library.push(book);
    booksByCardMap.set(card, book);
}

function generateCardFromBook(book) {
    const card = document.createElement("div");
    const author = document.createElement("div");
    const title = document.createElement("div");
    const pagesCount = document.createElement("div");
    const deleteButton = document.createElement("button");

    // apply style

    card.appendChild(author);
    card.appendChild(title);
    card.appendChild(pagesCount);
    card.appendChild(deleteButton);

    return card;
}