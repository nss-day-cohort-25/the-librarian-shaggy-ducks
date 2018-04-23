//if returning false, customer object will update
//if return true, will also return the due date and mark book checked out

//need function to calculate due date one week from today
const calcDueDate = () => {
	let bookDueDate = new Date()
	bookDueDate.setDate(bookDueDate.getDate() + 7)
	return new Date(bookDueDate)
}



const librarianCheckout = (book) => {
	//need to reference find book function to see if book is available

	//if book is available, return true & change book object by setting "checkedOut" property to "true" and setting "dueDate" to one week into the future
	//if book is not available, return false
	if (book.checkedOut === false) {
		book.checkedOut = true
		book.dueDate = calcDueDate()
		storyArray.push('Librarian checked out ' + book.title + '. It will be due back on ' + book.dueDate + '. Enjoy!')
		return book
	} else {
		storyArray.push('Librarian could not check out ' + book.title + ' because it is not available now.')
		return false
	}

}

