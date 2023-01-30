const addBook = document.querySelector("button");
const libraryContent = document.querySelector(".content");

addBook.addEventListener("click", () => {
  const newBook = document.createElement("div");
  newBook.textContent = "Hello everybody";
  libraryContent.appendChild(newBook);
});

// let myLibrary = [];

// function Book(title, author, pages, read) {
//   //the constructor...
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// function addBookToLibrary() {
//   //do stuff here
//   this.title = prompt("What is the title of the book?");
//   this.author = prompt("Who is the author of the book?");
//   this.pages = prompt("How many pages is the book?");
//   this.read = prompt("Did you read the book?", "True/False");

//   const newBook = new Book(this.title, this.author, this.pages, this.read);

//   myLibrary.push(newBook);
// }

// addBookToLibrary.prototype = Object.create(Book.prototype);

// addBookToLibrary();

// console.log(myLibrary);
