/*
Problem Statement: Library Book Management System
Objective: Create a Book class and use it to manage a collection of books in a library.
*/

class Book {
  constructor(title, author, pages, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }

  borrow() {
    this.isAvailable = false;
  }

  returnBook() {
    this.isAvailable = true;
  }

  getInfo() {
    return `${this.title} by ${this.author} (${this.pages} pages)`;
  }

  isLongBook() {
    return this.pages > 300;
  }
}


// Creating 5 book objects
const library = [
  new Book("Harry Potter", "J.K. Rowling", 350),
  new Book("1984", "George Orwell", 328),
  new Book("The Hobbit", "J.R.R. Tolkien", 310),
  new Book("The Alchemist", "Paulo Coelho", 208),
  new Book("Wings of Fire", "A.P.J. Abdul Kalam", 180)
];


// i. Display info of all books
console.log("All Books:");
library.forEach(book => console.log(book.getInfo()));


// ii. Borrow 2 books and show availability
library[0].borrow();
library[2].borrow();

console.log("\nAfter Borrowing Two Books:");
console.log(library[0].title + " Available: " + library[0].isAvailable);
console.log(library[2].title + " Available: " + library[2].isAvailable);


// iii. Return 1 book and show updated status
library[0].returnBook();

console.log("\nAfter Returning One Book:");
console.log(library[0].title + " Available: " + library[0].isAvailable);


// iv. Count long books (pages > 300)
const longBooksCount = library.filter(book => book.isLongBook()).length;
console.log("\nNumber of Long Books:", longBooksCount);


// v. List all available books
const availableBooks = library.filter(book => book.isAvailable);

console.log("\nAvailable Books:");
availableBooks.forEach(book => console.log(book.getInfo()));