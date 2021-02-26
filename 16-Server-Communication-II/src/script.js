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

    let likeBtn = document.createElement('button')
        likeBtn.innerText = `Likes: ${pokemon.likes}`
        likeBtn.classList.add('btn', 'btn-primary')

    let delBtn = document.createElement('button')
        delBtn.innerText = "Let Go"
        delBtn.classList.add('btn', 'btn-danger')
    pokemon.comments.forEach(comment => {
        let newCom = document.createElement('li')
            newCom.innerText = comment
            newCom.classList.add('list-group-item')
        commentList.appendChild(newCom)
    })

    cardBody.append(cardTitle, commentList, likeBtn, delBtn)
    card.append(img, cardBody)

    document.querySelector('#pokemon-container').appendChild(card)
}








data = [{}, {}]




data = {
    message: [1, 2, 3],
    status: "success"
}