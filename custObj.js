// creates function named customer that created customer objects
function customer (firstName, lastName, favGenre,address) {
	// these are the fields/object values that the function populates
	return Object.create({},{
		first:
			{
				value: firstName,
				enumerable: true,
				
			},
		last:
			{
				value: lastName,
				enumerable:true,
			
            },
        genre:
			{
				value: favGenre,
				enumerable:true,
			
            },
        address:
			{
				value: address,
				enumerable:true,
			
			},
		libraryCard:
			{
				value: "",
                enumerable: true,
                writable: true
				
			},
        bookshelf:
			{
                value: [],
				enumerable:false,
				writable:true,
            },
            // this creates a function that checks out a book
        checkout:
            {
                value: 
                // this creates a local function called by the customer object once title paramater is filled
					function (title){
// this creates variable book that if it's available the librarian designates by title otherwise false
                        let book = librarianCheckout(title)
// if the book is not false then it populates the bookshelf.                         
                        if(!(book === false)) {
                            this.bookshelf.push(book)
                        }

						
			
                    },
                writable: false,
                enumerable: false,
            },
        checkIn: 
            {
                value: 
                    function (title){
                        
                        let index = 0   // this creates a variable that notes the possition in an array
                        let found = false   //this indicates that the book has not been yet found
                        this.bookshelf.forEach(current => { // this looks for each book in the shelf for the title to return
                            if(current.title === title){
                                found = true  // this indicates that the book has now been found

                            }

                            if(!found){ // if not found it increases the index possition by 1
                                index += 1
                            }

                        
                        });
                        splice.this.bookshelf(index,1)
                        librarianCheckin(title)
                    
                    }
            }
        })
    }