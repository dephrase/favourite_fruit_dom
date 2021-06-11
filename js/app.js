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
    newListColour.textContent = `Colour: ${event.target.colour.value}`;
    newListColour.className = "subListColour"
    const newListFavourite = document.createElement('li')
    newListFavourite.textContent = `Favourite? ${event.target.favourite.value}`;
    newListFavourite.className = "subListFavourite"

    newListItem.append(newListName)
    newListItem.append(newListColour)
    newListItem.append(newListFavourite)

    document.querySelector('#fruit-list').append(newListItem)

    event.target.reset();
}


