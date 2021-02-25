// // Distinguish between synchronous and asynchronous code
// // Use fetch() to retrieve data from a server and display the results in the DOM
// // Understand promises
// // Be able to use the then() method to add handlers for promise resolution
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#pokeBtn').addEventListener('click', getPokemon)
})

//Fetch Function
const getPokemon = () => {
    document.querySelector('#pokemon-container').innerHTML = ""
    fetch('http://localhost:3000/pokemon')
        .then((res) => res.json() )
        .then(pokeData => pokeData.forEach(renderPokemon))
}


//Finished Render Function
const renderPokemon = (pokemon) => {
    let pokeBox = document.querySelector('#pokemon-container')
    let card = document.createElement('div')
        card.classList.add('card', 'm-2')
    let img = document.createElement('img')
        img.className = 'card-img-top'
        img.src = pokemon.sprite
    let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
    let cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.textContent = pokemon.name
    let commentList = document.createElement('ul')
        commentList.classList.add('list-group', 'list-group-flush')
    pokemon.comments.forEach(comment => {
        let newCom = document.createElement('li')
            newCom.innerText = comment
            newCom.classList.add('list-group-item')
        commentList.appendChild(newCom)
    })
    cardBody.append(cardTitle, commentList)
    card.append(img, cardBody)
    pokeBox.appendChild(card)
}




//// Reference for HTML Card
// // `<div class="card m-2">
// //       <img class="card-img-top" src=${pokemon.sprite} alt="Card image cap">
// //       <div class="card-body">
// //            <h5 class="card-title">${pokemon.name}</h5>
// //                 <ul class="list-group list-group-flush">
// //                     <li class="list-group-item">Cras justo odio</li>
// //                      <li class="list-group-item">Dapibus ac facilisis in</li>
// //                       <li class="list-group-item">Vestibulum at eros</li>
// //                         </ul>
// //                     </div>
// //                     <div class="card-footer">
// //                         <small class="text-muted">${pokemon.type}</small>
// //                     </div>
// //                 </div>`