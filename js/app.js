document.addEventListener('DOMContentLoaded', ()=> {
    const fruitList = document.querySelector('#fruit-list')
    document.querySelector('#new-fruit-form').addEventListener('submit', addNewFruit)

})

function addNewFruit(event){
    event.preventDefault();

    const newListItem = document.createElement('ul')
    newListItem.className = "newListItem"
    const newListName = document.createElement('li')
    newListName.textContent = event.target.name.value;
    newListName.className = "subListName"
    const newListColour = document.createElement('li')
    newListColour.className = "subListColour"
    const newListFavourite = document.createElement('li')
    newListFavourite.textContent = getFavouriteText(event.target.favourite.value)
    newListFavourite.className = "subListFavourite"

    newListItem.classList.add(getColour(event.target.colour.value))

    newListItem.append(newListName)
    newListItem.append(newListColour)
    newListItem.append(newListFavourite)

    document.querySelector('#fruit-list').append(newListItem)

    event.target.reset();
}

function getColour(colour){
    let backgroundColour

    if(colour === "red"){
        backgroundColour = "red"
    } else if(colour === "yellow"){
        backgroundColour = "yellow"
    } else if(colour === "blue"){
        backgroundColour = "blue"
    } else if(colour === "green"){
        backgroundColour = "green"
    } else if(colour === "orange"){
        backgroundColour = "orange"
    } else if(colour === "purple"){
        backgroundColour = "purple"
    } else if(colour === "pink"){
        backgroundColour = "pink"
    } else if(colour == "brown"){
        backgroundColour = "brown"
    } else {
        backgroundColour = "white"
    }
    return backgroundColour;
}

function getFavouriteText(favourite){
    let favouriteText

    if(favourite === "yes"){
        favouriteText = "This is your favourite fruit!"
    } else {
        favouriteText = "Not quite a favourite"
    }

    return favouriteText
}



