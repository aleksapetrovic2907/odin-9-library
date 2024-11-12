let library = [];
let booksByCardMap = new Map();
let booksContainer = document.querySelector(".book-cards-container");
let bookEntryForm = document.querySelector(".book-entry");

bookEntryForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const book = new Book
    (
        document.querySelector("#author").value,
        document.querySelector("#title").value,
        document.querySelector("#pages-count").value
    );

    addBookToLibrary(book);
})

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

    const title = document.createElement("h2");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const pagesCount = document.createElement("p");
    pagesCount.textContent = `${book.pagesCount} pages.`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        removeBookFromLibrary(card);
    });

    // apply style

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pagesCount);
    card.appendChild(deleteButton);

    return card;
}