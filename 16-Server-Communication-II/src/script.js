const BASE_URL = 'http://localhost:3000/pokemon/'

// When a user clicks on the monsters button:
    // Fetch all of the monster data
    // Render a card for each monster

// When a user submits a name and img URL on the form
    // Make a POST request to /pokemon
    // Render the new pokemon on the DOM

// When a user clicks the like button on a card
    // Make a PATCH request to /pokemon/:id
    // Increment that pokemons likes on the DOM 

// When a user clicks the "LET GO" Btn
    // Make a DELETE request to /pokemon/:id
    // Remove that pokemon from the DOM

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#pokeBtn').addEventListener('click', getPokemon)
    document.querySelector('form').addEventListener('submit', handleSubmit)
})

//Fetch Function
const getPokemon = () => {
    document.querySelector('#pokemon-container').innerHTML = ""
    fetch(BASE_URL)
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
        likeBtn.id = pokemon.id
        likeBtn.addEventListener('click', likePokemon)

    let delBtn = document.createElement('button')
        delBtn.innerText = "Let Go"
        delBtn.classList.add('btn', 'btn-danger')
        delBtn.addEventListener('click', () => {
            delPokemon(pokemon, card)
          
        })
    // pokemon.comments.forEach(comment => {
    //     let newCom = document.createElement('li')
    //         newCom.innerText = comment
    //         newCom.classList.add('list-group-item')
    //     commentList.appendChild(newCom)
    // })

    cardBody.append(cardTitle, commentList, likeBtn, delBtn)
    card.append(img, cardBody)

    document.querySelector('#pokemon-container').appendChild(card)
}

// Like a pokemon
function likePokemon(event){
 
    let newLikes = {
        likes: +event.target.innerText.split(" ")[1] + 1
    }

    let reqObj = {
        headers: {"Content-Type": "application/json"},
        method: "PATCH",
        body: JSON.stringify(newLikes)
    }
    fetch(BASE_URL + event.target.id, reqObj)
        .then(r => r.json())
        .then(updatedPokemon => {
            document.getElementById(updatedPokemon.id).innerText = `Likes: ${updatedPokemon.likes}`
        })
}

// Create a new pokemon
function handleSubmit(e){
    e.preventDefault()
    let newPokemon = {
        name: e.target.pokeName.value,
        likes: 0,
        sprite: e.target.pokeImg.value,
        comments: []
    }
    let reqObj = {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(newPokemon)
    }
    fetch(BASE_URL, reqObj)
        .then(r => r.json())
        .then(renderPokemon)
}

// delete a pokemon
function delPokemon(pokemon, card){
    fetch(BASE_URL+pokemon.id, {method: "DELETE"})
        .then(() => card.remove())
}