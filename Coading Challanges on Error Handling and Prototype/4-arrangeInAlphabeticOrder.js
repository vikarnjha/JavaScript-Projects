const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  ];
  
  function logBookTitlesInAlphabeticalOrder(bookTitles) {
    const sortedTitles = bookTitles.sort();
    console.log(sortedTitles);
  }
  
  function getBookTitlesInAlphabeticalOrder(books, callback) {
    const bookTitles = books.map((book) => book.title);
    callback(bookTitles);
  }
  
  getBookTitlesInAlphabeticalOrder(books, logBookTitlesInAlphabeticalOrder);
  