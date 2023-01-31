const addBook = document.querySelector("button");
const libraryContent = document.querySelector(".content");

let myLibrary = [];

function Book(title, author, pages, read) {
  //the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  //do stuff here
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function getFormData() {
  const title = document.getElementById("book_title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read_book").checked;
  if (title === "" || author === "" || pages === "") {
    alert("Please complete book information!");
    return 1;
  } else {
    addBookToLibrary(title, author, pages, read);
  }
}

function displayBook(library) {
  removeBooks(libraryContent);
  for (let i = 0; i < library.length; i++) {
    const bookCard = document.createElement("div");
    bookCard.classList.toggle(`book${i}`);
    const title = document.createElement("div");
    title.textContent = `Book Title: ${library[i].title}`;
    bookCard.appendChild(title);
    const author = document.createElement("div");
    author.textContent = `Author: ${library[i].author}`;
    bookCard.appendChild(author);
    const pages = document.createElement("div");
    pages.textContent = `Pages: ${library[i].pages}`;
    bookCard.appendChild(pages);
    const read = document.createElement("div");
    if (library[i].read === true) {
      read.textContent = "Read?: Yes!";
    } else {
      read.textContent = "Read?: Currently reading.";
    }
    bookCard.appendChild(read);
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      const currentBook = document.querySelector(`.book${i}`);
      libraryContent.removeChild(currentBook);
      myLibrary.splice(i, 1);
      displayBook(myLibrary);
    });
    bookCard.appendChild(removeButton);
    const changeStatus = document.createElement("button");
    changeStatus.textContent = "Change Status";
    changeStatus.addEventListener("click", () => {
      if (library[i].read === true) {
        library[i].read = false;
        displayBook(myLibrary);
      } else if (library[i].read === false) {
        library[i].read = true;
        displayBook(myLibrary);
      }
    });
    bookCard.appendChild(changeStatus);
    libraryContent.appendChild(bookCard);
  }
}

function clearForm() {
  document.getElementById("form1").reset();
}

function removeBooks(libraryContent) {
  while (libraryContent.firstChild) {
    libraryContent.removeChild(libraryContent.lastChild);
  }
}

addBook.addEventListener("click", (event) => {
  event.preventDefault();
  if (getFormData() !== 1) {
    displayBook(myLibrary);
    clearForm();
  }
});
