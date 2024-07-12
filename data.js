//   Library creation
class Library {
    //  books Collection
    constructor() {
        this.books = [];
    }

    //   book adding function
    addBook(book) {
        this.books.push(book)
    }

    getBook() {
        return this.books;
    }
    getBookCount() {
        return this.books.length
    }

    remove(index){
        this.books.splice(index,1)
        getLibrarydata()
    }
}
////////////////////////////////////////////////////////
// book creation

class Book {
    constructor(title, author) {
        this.bookTitle = title;
        this.bookAuthor = author;
    }
};
// Library calling variable
const lib = new Library();
//////////////////////////////////////////////////////////

// form submit function and adding input and etc..

const formEl = document.querySelector("form");
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleIN = document.querySelector("#booktitle").value;
    const authorIN = document.querySelector("#bookauthor").value;

    if (titleIN && authorIN) {
        const book = new Book(titleIN, authorIN); 
        lib.addBook(book);
    }

    // geting books and list outin ui
    getLibrarydata() 

    document.querySelector("#booktitle").value = "";
    document.querySelector("#bookauthor").value = "";
    
});
//////////////////////////////////////////////////////////////
///  adding function Mark As Read
const resultEL = document.querySelector(".result");

function markAsRead(index) {
    
    const read = resultEL.children[index];
    read.style.textDecoration = "line-through solid gray";
}
////////////////////////////////////////////////////////////

// Removeing function

function remove(index) {
    lib.remove(index)
}
///////////////////////////////////////////////////////////

// Adding list in ui

function getLibrarydata() {
    const resultEL = document.querySelector(".result");
    const countEl = document.querySelector(".bookCount");
    const viewEl = document.querySelector(".footer")
    
    
    countEl.textContent = lib.getBookCount();
    if(lib.getBookCount() === 0){
         viewEl.style.display = "none"
    }else{
        viewEl.style.display = "block";
    }

    resultEL.innerHTML =""
    
    lib.getBook().forEach((book,index) => {
        resultEL.innerHTML += `<li>${book.bookTitle} by ${book.bookAuthor} <button class="Read" onClick="markAsRead(${index})">Mark as Read</button><button class="Remove" onClick="remove(${index})">Remove</button></li>`
    }) 
}
//////////////////////////xxxxxxx///////////////////////////////