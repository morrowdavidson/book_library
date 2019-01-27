let myLibrary =[];
let addBookButton = document.querySelector('#addBookButton');
let addBookForm = document.querySelector('#addBookForm');
let addBookFormButton = document.querySelector('#addBookFormButton');
let cancelFormButton = document.querySelector('#cancelFormButton');

addBookButton.onclick = function() {addBookForm.classList.remove("hidden")};
cancelFormButton.onclick = function() {
    addBookForm.classList.add("hidden")
    addBookForm.reset();
};
addBookFormButton.onclick = function() {
    let title = document.querySelector("input[name='book_title']").value;
    let author = document.querySelector("input[name='book_author']").value;
    let num_of_pages = document.querySelector("input[name='book_pages']").value;
    let read = document.querySelector("input[name='book_read']").checked;

    addBookToLibrary(title,author,num_of_pages,read);

    addBookForm.classList.add("hidden");

    addBookForm.reset();
};


function Book(title,author,num_of_pages,read){    
    this.title = title;
    this.author = author;
    this.pages = num_of_pages;
    this.read = read;
}

Book.prototype.readTxt = function (){
    let read_html = "<input type='checkbox'>";
    if (this.read){
        read_html = "<input type='checkbox' checked='true'>";
    }
    return read_html;
}

Book.prototype.info = function(){
    return this.title + " by " + this.author + ", " + this.num_of_pages + " pages, " + this.readTxt();  
}

Book.prototype.tdBookTemplate = function(bookIndex){
    let deleteIcon = "<button onclick='bookDelete(" + bookIndex + ")' data-attribute=" + bookIndex + "class='btn'><i class='fa fa-trash'></i></button>" 
    
    let template = "<tr data-attribute=" + bookIndex + ">" +
                    "<td>" + this.title + "</td>" +
                    "<td>" + this.author + "</td>" +
                    "<td>" + this.pages + "</td>" +
                    "<td>" + this.readTxt() + "</td>" +
                    "<td>" + deleteIcon + "</td>"
                    "</tr>";
    return template;
}

function addBookToLibrary(title,author,num_of_pages,read) {
    let newBook = new Book(title,author,num_of_pages,read);
    myLibrary.push(newBook);

    let bookIndex = myLibrary.length - 1;
    renderBook(newBook.tdBookTemplate(bookIndex), document.querySelector('#myLibraryTable'));

    return myLibrary;
}

function renderBook(template, node){
    if (!node) return;
    node.innerHTML += template;
}

function bookDelete(bookIndex){
    delete myLibrary[bookIndex];
    let bookToDelete = document.querySelector("tr[data-attribute='"+bookIndex+"']");
    bookToDelete.classList.add("hidden");
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Hobbit2", "J.R.R. Tolkien", 295, true);
