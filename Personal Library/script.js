function Book(title, author, yearPublished, readStatus) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.readStatus = readStatus;

  this.getSummary = function() {
    return this.title + ' by ' + this.author + ', published in ' + this.yearPublished + '. Status: ' + (this.readStatus ? 'Read' : 'Unread');
  };

  this.toggleReadStatus = function() {
    if (this.readStatus === true) {
      this.readStatus = false;
    } else {
      this.readStatus = true;
    }
  };
}

const Arrlib = [];

function addBook(book) {
  Arrlib.push(book);
}

function removeLastBook() {
 Arrlib.pop();
}

function addBookToFront(book) {
 Arrlib.unshift(book);
}

function removeFirstBook() {
  Arrlib.shift();
}

function getAllTitles() {
  return Arrlib.map(book => book.title);
}

function getBooksByAuthor(author) {
  return Arrlib.filter(book => book.author === author);
}

function getTotalBooksPublishedBefore(year) {
  return Arrlib
    .filter(book => book.yearPublished < year)
    .reduce((count, book) => count + 1, 0);
}

function removeBookByTitle(title) {
  const indexToRemove = Arrlib.findIndex(book => book.title === title);
  if (indexToRemove !== -1) {
   Arrlib.splice(indexToRemove, 1);
  }
}

function getBooksByReadStatus(status) {
  return Arrlib.filter(book => book.readStatus === status);
}

function getSubLibrary(start, end) {
  return Arrlib.slice(start, end);
}

// Usage examples
const book1 = new Book("Alice’s Adventures in Wonderland", "Lewis Carroll", 1865, false);
const book2 = new Book("Rabbit Redux", "John Updike", 1971, true);

addBook(book1);
addBook(book2);

console.log(getAllTitles());
console.log(getBooksByAuthor("Lewis Carroll")); 
console.log(getTotalBooksPublishedBefore(2000));
removeBookByTitle("Alice’s Adventures in Wonderland");
console.log(getBooksByReadStatus(true)); 
console.log(getSubLibrary(0, 1)); 