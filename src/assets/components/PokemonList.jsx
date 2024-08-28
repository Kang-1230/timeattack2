// import PokemonCard from "./PokemonCard";

// const ListContainer = styled.div``;

const PokemonList = ({ MOCK_DATA, selectedPokemon, setSelectedPokemon }) => {
  function handleAddPokemon(pokemon) {
    const addPokemonArr = [...selectedPokemon];
    const addIndex = addPokemonArr.indexOf(null);
    addPokemonArr.splice(addIndex, 1, pokemon);
    setSelectedPokemon(addPokemonArr);
  }

  return (
    <div>
      {MOCK_DATA.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <h2>{pokemon.korean_name}</h2>
            <img src={pokemon.img_url} />
            <ul>
              <li>{pokemon.types}</li>
              <li>{pokemon.description}</li>
            </ul>
            <button onClick={() => handleAddPokemon(pokemon)}>추가</button>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
