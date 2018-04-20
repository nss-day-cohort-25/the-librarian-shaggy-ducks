function findBook(title){
	let index = 0 //variable for tracking index of book in catalog
	let found = false
	catalog.forEach(currentBook => { //search catalog for book
		if(currentBook.title === title){ //if book is found mark found true
			found = true
		}
		if(!found){ //if book not found yet update index to currentBook for next comparison
			index += 1
		}
	});
	if(found){ //if book is found return the book object
		return catalog[index]
	}
	
	return false //if book isn't in the catalog return false
}