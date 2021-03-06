document.addEventListener('DOMContentLoaded', ()=> {
    document.querySelector('#new-fruit-form').addEventListener('submit', addNewFruit)
    document.querySelector('#fruitsSection').addEventListener('submit', deleteFruit)

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

    appendItems(newListItem, newListName, newListColour, newListFavourite)

    document.querySelector('#fruit-list').append(newListItem);
    const fruitList = document.querySelector('#fruit-list')
    document.querySelector('#numberOfFruits').textContent = getNumberOfFruits(fruitList);

    event.target.reset();
}

function appendItems(list, name, colour, favourite){
    list.append(name)
    list.append(colour)
    list.append(favourite)
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

function getNumberOfFruits(fruitList){
    let numOfFruits;
    if(fruitList.children.length == 1){
        numOfFruits = "You like 1 fruit so far"
    } else if(fruitList.children.length == 15){
        numOfFruits = "15 KINDS OF FRUIT"
    } else {
        numOfFruits = `You like ${fruitList.children.length} fruits so far`
    }
    return numOfFruits;
}

function deleteFruit(){
    //Clicking on this button resets the DOM, so acts as a delete button
}



