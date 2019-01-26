let myLibrary =[];


function Book(title,author,num_of_pages,read){    
    this.title = title;
    this.author = author;
    this.pages = num_of_pages;
    this.read = read;
}

Book.prototype.readTxt = function (){
    let read_txt = "NO";
    if (this.read){
        read_txt = "YES";
    }
    return read_txt;
}

Book.prototype.info = function(){
    return this.title + " by " + this.author + ", " + this.num_of_pages + " pages, " + this.readTxt();  
}

Book.prototype.tdBookTemplate = function(){
    let template = "<tr>" +
                    "<td>" + this.title + "</td>" +
                    "<td>" + this.author + "</td>" +
                    "<td>" + this.pages + "</td>" +
                    "<td>" + this.readTxt() + "</td>";
    return template;
}

function addBookToLibrary(title,author,num_of_pages,read) {
    let newBook = new Book(title,author,num_of_pages,read);
    myLibrary.push(newBook);
    renderBook(newBook.tdBookTemplate(), document.querySelector('#myLibraryTable'));

    return myLibrary;
}

function renderBook(template, node){
    if (!node) return;
    node.innerHTML += template;
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Hobbit2", "J.R.R. Tolkien", 295, true);



