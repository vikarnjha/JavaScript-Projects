function filterAndCapitalize(books) {
  const filteredBooks = books.filter((book) => book.year >= 2010);
  return filteredBooks.map((book) => ({
    title: book.title,
    author: book.author.charAt(0).toUpperCase() + book.author.slice(1),
    year: book.year,
  }));
}

// Example
const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "stieg Larsson",
    year: 2015,
  },
];

console.log(filterAndCapitalize(books));
