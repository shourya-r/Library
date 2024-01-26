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

const book1 = new Book("Harry Potter", "JK Rowling", 295, "read");
const book2 = new Book("Lord of the Rings", "JRR Tolkien", 295, "read");
const book3 = new Book("Charlie and the Factory", "Roald Dahl", 295, "not read");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

// Getting reference to the book grid and adding a function to make cards and display all the books 
const bookGrid = document.querySelector(".book-grid");
function displayAllBooks(){
    for(let i = 0; i<myLib.length; i++){
        // Book Card div
        const bookDiv = document.createElement('div');
        bookDiv.classList.toggle("book-div");
        
        // Book Title
        const bookTitle = document.createElement('div');
        bookTitle.textContent = `"${myLib[i]["title"]}"`;
        bookTitle.classList.toggle("book-title");

        //Book Author
        const bookAuthor = document.createElement("div");
        bookAuthor.textContent = myLib[i]["author"];
        bookAuthor.classList.toggle("book-author");

        //Book Pages
        const bookPages = document.createElement("div");
        bookPages.textContent = `${myLib[i]["pages"]} pages`;
        bookPages.classList.toggle("book-pages");

        //Book Read Status
        //Creating a div to put the button in 
        const bookReadDiv = document.createElement("div");
        bookReadDiv.classList.toggle("book-read-div");

        const bookReadStatus = document.createElement("button");
        if(myLib[i]["readStatus"]==="read"){
            bookReadStatus.textContent = "Read";
            bookReadStatus.classList.toggle("book-read");
        }
        else{
            bookReadStatus.textContent = "Not read";
            bookReadStatus.classList.toggle("book-not-read");
        }

        // Remove book button
        const bookRemoveDiv = document.createElement("div");
        bookRemoveDiv.classList.toggle("book-remove-div");

        const bookRemove = document.createElement("button");
        bookRemove.textContent = "Remove";
        bookRemove.classList.toggle("book-remove");

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(bookReadDiv);
        bookReadDiv.appendChild(bookReadStatus);
        bookDiv.appendChild(bookRemoveDiv);
        bookRemoveDiv.appendChild(bookRemove);
        bookGrid.appendChild(bookDiv);
    }
}

displayAllBooks();

