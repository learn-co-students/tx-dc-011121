import PokemonItem from './PokemonItem'

const TrainerCard = (props) => {

  const { name, id, pokemons } = props.trainer

  return (
    <div className="card" data-id={id}><p>{name}</p>
      <button data-trainer-id={id}>Add Pokemon</button>
      <ul>
        {
            pokemons.map(pokemon => {
              return <PokemonItem key={pokemon.id} pokemon={pokemon} />
            })
        }
      </ul>
    </div>
  )
}

export default TrainerCard;
