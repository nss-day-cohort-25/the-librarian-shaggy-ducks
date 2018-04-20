//the array the catalog of books will be stored in
const catalog = []

//saves the current catalog to local storage
function saveCatalog(){
	const stringifiedDatabase = JSON.stringify(catalog)
	localStorage.setItem("Library Catalog", stringifiedDatabase)
}

//loads the catalog version saved in local storage
function loadCatalog(){
	const databaseString = localStorage.getItem("Library Catalog")
	catalog = JSON.parse(databaseString)
}