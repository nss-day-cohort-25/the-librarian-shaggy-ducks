determineSave()

//give every customer a library card
registerNewCard(Levi)
registerNewCard(Erin)
registerNewCard(Hayley)
registerNewCard(Dan)
registerNewCard(Levi)

//do a genre search for 'Fiction'
genreSearch('Fiction')
genreSearch('monkeyButt')



//Hayley checks out a book
Hayley.checkout(catalog[12])

//Levi checks out a book
Levi.checkout(catalog[0])

//Daniel tries to check out the book Levi checked out
Dan.checkout(catalog[0])

//Erin checks out a book
Erin.checkout(catalog[15])

//Hayley checks in a book
Hayley.checkIn(catalog[12])

//Erin checks in a book she didn't check out
Erin.checkIn(catalog[1])


printStory()
