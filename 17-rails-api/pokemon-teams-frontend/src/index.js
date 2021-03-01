const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const init = () => {
  fetch(TRAINERS_URL)
  .then(res => res.json())
  .then(trainers => {
    trainers.forEach(trainer => renderCard(trainer))
  })
}

const renderCard = (trainer) => {
  const main = document.querySelector('main')

  const trainerCard = document.createElement('div')
  trainerCard.className = "card"
  trainerCard.dataset.id = trainer.id

  const trainerName = document.createElement('p')
  trainerName.innerText = trainer.name

  const addNewPokemonBtn = document.createElement('button')
  addNewPokemonBtn.dataset.trainerId = trainer.id
  addNewPokemonBtn.innerText = "Add Pokemon"
  addNewPokemonBtn.addEventListener('click',addNewPokemon)

  const pokemonList = document.createElement('ul')
  trainer.pokemons.forEach(pokemon => {
    const listItem = renderPokemonListItem(pokemon)
    pokemonList.append(listItem)
  })

  trainerCard.append(trainerName,addNewPokemonBtn,pokemonList)
  main.append(trainerCard)
}

const addNewPokemon = (e) => {
  const trainerId = e.target.dataset.trainerId

  fetch(POKEMONS_URL,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ trainer_id: trainerId })
  }).then(res => res.json())
  .then(newPokemon => {
    const pokemonList = e.target.parentElement.querySelector('ul')
    const newPokemonItem = renderPokemonListItem(newPokemon)

    pokemonList.append(newPokemonItem)
  })
}

const renderPokemonListItem = (pokemon) => {
  const pokemonItem = document.createElement('li')
  pokemonItem.innerText = `${pokemon.nickname} (${pokemon.species})`

  const releaseBtn = document.createElement('button')
  releaseBtn.className = "release"
  releaseBtn.dataset.pokemonId = pokemon.id
  releaseBtn.innerText = "Release"
  releaseBtn.addEventListener('click',removePokemon)

  pokemonItem.append(releaseBtn)
  return pokemonItem
}

const removePokemon = (e) => {
  const pokemonId = e.target.dataset.pokemonId
  e.target.parentElement.remove()

  fetch(POKEMONS_URL+`/${pokemonId}`,{
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(err => alert('It failed.'))
}

init()
