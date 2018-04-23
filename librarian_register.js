//Need random number generator for library card (6 digits)
//Input: customer object
//Output: update to customer object


const newLibraryCard = () => {
	return (Math.floor(Math.random() * (999999 - 100000)) + 100000)
}

const registerNewCard = (customerObject) => {
	//need to check the customer object for an existing library card
	if(!customerObject.libraryCard){
		//need to generate new number if no existing card
		//need to add new number back to customer 
		customerObject.libraryCard = newLibraryCard()
		storyArray.push(customerObject.first + ' ' + customerObject.last + ' got a new library card, number ' + customerObject.libraryCard + '.')
	} else {
		//need to error if existing card found
		storyArray.push(customerObject.first + ' ' + customerObject.last + ' couldn\'t get a new library card because they already have one.')
	}
}
