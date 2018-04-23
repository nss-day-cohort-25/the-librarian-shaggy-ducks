//the array the catalog of books will be stored in
let catalog = []

//saves the current catalog to local storage
function saveCatalog(){
	const stringifiedDatabase = JSON.stringify(catalog)
	localStorage.setItem('Library Catalog', stringifiedDatabase)
}

//loads the catalog version saved in local storage
function loadCatalog(){
	const databaseString = localStorage.getItem('Library Catalog')
	catalog = JSON.parse(databaseString)
}

function determineSave(){
	//loads from storage
	loadCatalog()

	//if not found in storage initializes and saves the catalog
	if(catalog == null){
		catalog = []
		initializeCatalog()
		saveCatalog()
	}else{
		//if the catalog isn't empty but contains less than th initialed amount of books,
		//initializes and saves the catalog
		if(catalog.length < 20){
			catalog = []
			initializeCatalog()
			saveCatalog()
		}else{
			//if it contains more than the initial amount, saves the catalog with no other changes
			saveCatalog()
		}
	}
}