// Making an array to store the book objects
const myLib = [];

// Making a constructor for the book object
function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

// Adding a created object to the library
function addBookToLibrary(book){
    myLib.push(book);
}

const book1 = new Book("harry potter", "jk rowling", 295, "read");
const book2 = new Book("lord of the rings", "jrr tolkien", 295, "read");
const book3 = new Book("charlie and the factory", "roald dahl", 295, "read");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

console.log(myLib);
