document.addEventListener('DOMContentLoaded', ()=> {
    const fruitList = document.querySelector('#fruit-list')
    document.querySelector('#new-fruit-form').addEventListener('submit', addNewFruit)

})

function addNewFruit(event){
    event.preventDefault();

    const newListItem = document.createElement('ul')
    const newListName = document.createElement('li')
    newListName.textContent = event.target.name.value;
    newListName.className = "subListItem"
    const newListColour = document.createElement('li')
    newListColour.textContent = event.target.colour.value;
    newListColour.className = "subListItem"
    const newListFavourite = document.createElement('li')
    newListFavourite.textContent = event.target.favourite.value;
    newListFavourite.className = "subListItem"

    newListItem.append(newListName)
    newListItem.append(newListColour)
    newListItem.append(newListFavourite)

    document.querySelector('#fruit-list').append(newListItem)

    event.target.reset();
}


