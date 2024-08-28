// import PokemonCard from "./PokemonCard";

import { useNavigate } from "react-router-dom";

// const ListContainer = styled.div``;

const PokemonList = ({ MOCK_DATA, selectedPokemon, setSelectedPokemon }) => {
  const navigate = useNavigate();

  function handleAddPokemon(pokemon) {
    const findSamePokemon = selectedPokemon.find(
      (c) => c?.korean_name === pokemon.korean_name
    );
    if (findSamePokemon) {
      return alert("포켓몬 중복 선택 불가");
    }
    const addPokemonArr = [...selectedPokemon];
    const addIndex = addPokemonArr.indexOf(null);
    if (addIndex === -1) {
      return alert("포켓몬은 6개까지만 선택 가능");
    }

    addPokemonArr.splice(addIndex, 1, pokemon);
    setSelectedPokemon(addPokemonArr);
  }

  return (
    <div>
      {MOCK_DATA.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <div onClick={() => navigate(`/dex?id=${pokemon.id}`)}>
              <h2>{pokemon.korean_name}</h2>
              <img src={pokemon.img_url} />
              <ul>
                <li>{pokemon.types}</li>
                <li>{pokemon.description}</li>
              </ul>
            </div>
            <button onClick={() => handleAddPokemon(pokemon)}>추가</button>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
