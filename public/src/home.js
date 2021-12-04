function getTotalBooksCount(books) {
  let total = 0
  for (let i = 0; i < books.length; i++) {
    total++
  }
  return total
}

function getTotalAccountsCount(accounts) {
    let total = 0
    for (let i = 0; i < accounts.length; i++) {
    total++
  }
  return total
}

function getBooksBorrowedCount(books) {
  const borrowed = books.filter((each) => each.borrows[0].returned === false);
  return getTotalBooksCount(borrowed);
}

function getMostCommonGenres(books) {
  const obj = books.reduce((acc, each) => {
  
    const {genre} = each
  if (acc[genre]) {
    acc[genre].count++
  }
  else {
    acc[genre] = {name: genre, count: 1}
    }
  return acc;
    }, {})
  
  return Object.values(obj).sort((a,b) => b.count - a.count).splice(0,5);
 
}

function getMostPopularBooks(books) {
  const obj = books.reduce((acc, each) => {
  
    // returns # of borrows
    const borrows = getTotalBooksCount(each.borrows)
    
    acc[each.title] = {name: each.title, count: borrows}
    return acc
        }, {})
  console.log(obj)
  
  return Object.values(obj).sort((a,b) => b.count - a.count).splice(0,5);
   
}


function returnAuthorById(authors, id) {
  const match = authors.filter((each) => each.id === id);
  return match[0].name.first + " " + match[0].name.last
}


function getMostPopularAuthors(books, authors) {
    const obj = books.reduce((acc, each) => {
  // returns # of borrows
  const borrows = getTotalBooksCount(each.borrows)
  // look up author by id
  const author = returnAuthorById(authors, each.authorId) 
  
  acc[each.title] = {name: author, count: borrows}
    return acc
        }, {})

  return Object.values(obj).sort((a,b) => b.count - a.count).splice(0,5);
   
  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
