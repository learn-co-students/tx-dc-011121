// console.log("First");
// setTimeout(function(){console.log("Second")}, 0)
// console.log("Third ");
document.addEventListener('DOMContentLoaded', init)
function init(){
    // handleSayHi()
    // addAPokemon("safsa", "sadfasdf", "sadfsafd", "asdfsafdfdsa")
    handleFormSubmit()
}
function handleSayHi(){
    document.querySelector('#poke-table').addEventListener('click', function(event){
        event.target.innerText = "new val"
    })  
}
function addAPokemon(pokeName, pokeType, pokeWeight, pokeImg) {
    let newRow = document.createElement('tr')
    let tHead = document.createElement('th')
        tHead.innerText =  pokeName
    let pokeTypeTd = document.createElement('td')
        pokeTypeTd.innerText = pokeType
    let pokeWeightTd = document.createElement('td')
        pokeWeightTd.innerText = pokeWeight
    let imageData = document.createElement('td')
    let img = document.createElement('img')
        img.src = pokeImg
        imageData.appendChild(img)
    newRow.append(tHead, pokeTypeTd, pokeWeightTd, imageData)
    document.getElementById("table").appendChild(newRow)
}
function handleFormSubmit(){
   let form = document.getElementById("poke-form")
   form.addEventListener('submit', function(event){
        event.preventDefault()
        let newName = event.target.pokeName.value
        let newType = event.target.pokeType.value
        let newWeight = event.target.pokeWeight.value
        let newImg = event.target.pokeImg.value
        addAPokemon(newName, newType, newWeight, newImg);
        form.reset()
    })
}
//Add a new pokemon review
//DOMContentLoaded
//Read Click Event
//Delete Click Event
//Sumbit (create) Event
//Bubble listener