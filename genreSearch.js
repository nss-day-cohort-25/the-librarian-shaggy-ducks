//need to be able to search catalog.genre for a specified input
let searchResults = []

const genreSearch = (genre) => {
	searchResults = []
	searchResults.push('These books in the catalog are of the ' + genre + ' genre.')
	catalog.forEach(book => {
		if (genre === book.genre){
			searchResults.push(book.title)
		}
	})
	if (searchResults.length === 1) {
		searchResults.push('No results to display.')
	}
	return searchResults
}