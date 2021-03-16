const PokemonItem = (props) => {

  const { nickname, id, species } = props.pokemon

  return (
    <li>
      {nickname} ({species})
      <button className="release" data-pokemon-id={id}>
        Release
      </button>
    </li>
  )
}

export default PokemonItem
