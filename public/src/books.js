function findAuthorById(authors, id) {
  const match = authors.find((each) => each.id === id);
  console.log(match)
  return match
}

function findBookById(books, id) {
  const match = books.find((each) => each.id === id);
  console.log(match)
  return match
}

function partitionBooksByBorrowedStatus(books) {
 let array = [];
 const returned = books.filter((each) => each.borrows[0].returned === true );
  const borrowed = books.filter((each) => each.borrows[0].returned === false );
  
 return [borrowed,returned]

}

function getBorrowersForBook(book, accounts) {
  // for each book, check borrows
   let borrowers = book.borrows.map((each) => {
    // for each id in borrows, check which account it matches
    let account =  findAuthorById(accounts, each.id)
    account.returned = each.returned
    console.log(account)
    return account
  })
 
  return borrowers.splice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
