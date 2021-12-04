function findAccountById(accounts, id) {
  const match = accounts.find((each) => each.id === id);
  console.log(match);
  return match;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  books.forEach((book) => {
    // for each book, get the array in borrows
    let { borrows } = book;
    borrows.forEach((id) => {
      console.log(id.id, account.id);
      if (id.id === account.id) {
        count++;
      }
    });
  });
  return count;
}

function findAuthorById(authors, id) {
  const match = authors.find((each) => each.id === id);
  return match;
}

function getBooksPossessedByAccount(account, books, authors) {
  let bookArray = [];
  books.forEach((book) => {
    // for each book, get the array in borrows
    let { borrows } = book;
    borrows.forEach((id) => {
      // check whether the book is borrowed by the account
      if (id.id === account.id && id.returned === false) {
        let author = findAuthorById(authors, book.authorId);
        //book["author"] = author
        //console.log(book)
        //console.log('-----------')
        const newBook = { ...book, author: author };
        console.log(newBook);
        bookArray.push(newBook);
        return bookArray;
      }
    });
  });
  console.log(bookArray);
  return bookArray;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
