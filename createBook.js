//creates book object and pushes it to the catalog
function createBook(title, author, genre, isbn) {
	catalog.push(Object.create({},{
			title:
			{
				value: title,
				enumerable:true
			},
			author:
			{
				value: author,
				enumerable:true
			},
			genre:
			{
				value: genre,
				enumerable:true
			},
			isbn:
			{
				value: isbn,
				enumerable:true
			},
			checkedOut:
			{
				value: false,
				enumerable:true,
				writable: true
			},
			dueDate:
			{
				value: new Date(1970,1 [1]),
				enumerable:true,
				writable: true
			},
		})
	)
}