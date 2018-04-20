//Need random number generator for library card (6 digits)
//Input: customer object
//Output: update to customer object


const newLibraryCard = () => {
	return (Math.floor(Math.random() * (999999 - 100000)) + 100000)
}

const registerNewCard = (customerObject) => {
	//need to check the customer object for an existing library card
	if(!customerObject.libraryCard){
		console.log('no card for this customer. lets make one!')
		//need to generate new number if no existing card
		//need to add new number back to customer 
		customerObject.libraryCard = newLibraryCard()
		console.log('your new card number is: ' + customerObject.libraryCard)
	} else {
		//need to error if existing card found
		console.log('you already have a card!')
	}
}
