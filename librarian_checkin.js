//input: findbook function (by title), customer object
//output: change book object due date, change checked out status on book object, remove from customer bookshelf
//if overdue, customer owes $5

const librarianCheckIn = (book) => {
	if (book.checkedOut === false) {
		console.log('this book is in the library')
		return false
	} else {
		book.checkedOut = false
		book.dueDate = ''
		console.log('book received. thank you!')
		return book
	}

}