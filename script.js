let library = [];
let booksByCardMap = new Map();
let booksContainer = document.querySelector(".book-cards-container");

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
    const book = booksByCardMap.get(card);
    library = library.filter(item => item !== book);
    booksByCardMap.delete(card);
    booksContainer.removeChild(card);
}

function generateCardFromBook(book) {
    const card = document.createElement("div");
    card.classList.add("book-card");

    const author = document.createElement("h2");
    author.textContent = book.author;

    const title = document.createElement("p");
    title.textContent = book.title;

    const pagesCount = document.createElement("p");
    pagesCount.textContent = book.pagesCount;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        removeBookFromLibrary(card);
    });

    // apply style

    card.appendChild(author);
    card.appendChild(title);
    card.appendChild(pagesCount);
    card.appendChild(deleteButton);

    return card;
}