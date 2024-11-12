const library = [];
const booksByCardMap = new Map();
const booksContainer = document.querySelector(".book-cards-container");

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

function removeBookFromLibrary(card) {
    library.removeChild(booksByCardMap.get(card));
    booksContainer.removeChild(card);
}

function generateCardFromBook(book) {
    const card = document.createElement("div");

    const author = document.createElement("div");
    author.textContent = book.author;

    const title = document.createElement("div");
    title.textContent = book.title;

    const pagesCount = document.createElement("div");
    pagesCount.textContent = book.pagesCount;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // apply style

    card.appendChild(author);
    card.appendChild(title);
    card.appendChild(pagesCount);
    card.appendChild(deleteButton);

    return card;
}