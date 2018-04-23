//input: findbook function (by title), customer object
//output: change book object due date, change checked out status on book object, remove from customer bookshelf
//if overdue, customer owes $5

const librarianCheckIn = (book) => {
	if (book.checkedOut === false) {
		storyArray.push('Librarian could not check in ' + book.title + ' because it was already checked in.')
		return false
	} else {
		book.checkedOut = false
		book.dueDate = ''
		storyArray.push('Librarian checked in ' + book.title)
		return book
	}
}