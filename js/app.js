document.addEventListener('DOMContentLoaded', ()=> {
    const fruitList = document.querySelector('#fruit-list')
    const submitButton = document.querySelector('#save')
    submitButton.addEventListener('click', addNewFruit(event))

})

function addNewFruit(event){
    console.log(event)
}
