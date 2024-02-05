// Making an array to store the book objects
const myLib = [];

// Defining a book class
class Book{
    constructor(title, author, pages, readStatus){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

// Adding a created object to the library
function addBookToLibrary(book){
    myLib.push(book);
}

// Getting reference to the book grid and adding a function to make cards and display all the books 
const bookGrid = document.querySelector(".book-grid");
function displayAllBooks(){
    // Removing all the book divs first before iterating through all the divs
    const bookDivs = document.querySelectorAll(".book-div");
    for(let book of bookDivs){
        bookGrid.removeChild(book);
    }
    for(let i = 0; i<myLib.length; i++){
        // Book Card div
        const bookDiv = document.createElement('div');
        bookDiv.classList.toggle("book-div");
        
        // Giving index data attribute to all the cards
        bookDiv.dataset.index = i;

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

        // Adding an event listener to the bookReadStatus button
        bookReadStatus.addEventListener("click", ()=>{
            bookReadStatus.classList.toggle("book-read");
            bookReadStatus.classList.toggle("book-not-read");
            if(bookReadStatus.textContent==="Read"){
                bookReadStatus.textContent = "Not read";
            }
            else{
                bookReadStatus.textContent = "Read";
            }
            // Need to change the read status in lib array
            if(myLib[bookReadStatus.parentNode.parentNode.dataset.index]["readStatus"]==="read"){
                myLib[bookReadStatus.parentNode.parentNode.dataset.index]["readStatus"]="not read";
            }
            else{
                myLib[bookReadStatus.parentNode.parentNode.dataset.index]["readStatus"]="read";
            }
        });
        // Remove book button
        const bookRemoveDiv = document.createElement("div");
        bookRemoveDiv.classList.toggle("book-remove-div");

        const bookRemove = document.createElement("button");
        bookRemove.textContent = "Remove";
        bookRemove.classList.toggle("book-remove");

        // Adding an event listener to the remove book button
        bookRemove.addEventListener("click", ()=>{
            myLib.splice(bookRemove.parentNode.parentNode.dataset.index,1);
            displayAllBooks();
        });

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
const addBookModal = document.querySelector(".add-book-modal");


//Getting references to the elements of the input modal
const submitButton = document.querySelector(".submit-book-button");
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const pagesInput = document.querySelector(".pages-input");
const readCheck = document.querySelector(".check-mark");

submitButton.addEventListener("click",()=>{
    let readStatus;
    if(readCheck.checked){
        readStatus = "read";
    }
    else{
        readStatus = "not read";
    }
    const newBook = new Book(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        readStatus
    )
    addBookToLibrary(newBook);
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readCheck.checked = false;
    displayAllBooks();
    addBookModal.close();
});

// Adding reference to the add book button 
const addBookButton = document.querySelector(".add-book");

// Adding an event listener to the add book button
addBookButton.addEventListener("click", ()=>{
    addBookModal.showModal();
})
