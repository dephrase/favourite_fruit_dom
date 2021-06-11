document.addEventListener('DOMContentLoaded', ()=> {
    const fruitList = document.querySelector('#fruit-list')
    document.querySelector('#new-fruit-form').addEventListener('submit', addNewFruit)

})

function addNewFruit(event){
    event.preventDefault();

    const fruitName = event.target.name.value;
    const fruitColour = event.target.colour.value;
    const favouriteFruit = event.target.favourite.value;

    const newListItem = document.createElement('ul')
    const newListName = document.createElement('li')
    newListName.textContent = fruitName
    const newListColour = document.createElement('li')
    newListColour.textContent = fruitColour
    const newListFavourite = document.createElement('li')
    newListFavourite.textContent = favouriteFruit

    newListItem.append(newListName)
    newListItem.append(newListColour)
    newListItem.append(newListFavourite)

    document.querySelector('#new-fruit-form').append(newListItem)


}


