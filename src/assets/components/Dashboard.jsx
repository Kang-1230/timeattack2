// const DashboardContainer = styled.div``;

const Dashboard = ({ selectedPokemon, setSelectedPokemon }) => {
  function deletePokemon(pokemon) {
    const deletePokemonArr = [...selectedPokemon];
    const deletePokemonIndex = deletePokemonArr.findIndex((c) => {
      return c?.korean_name === pokemon.korean_name;
    });
    deletePokemonArr.splice(deletePokemonIndex, 1, null);
    // deletePokemonArr.sort((a, b) => {
    //   (a === null) - (b === null);
    // });
    setSelectedPokemon(deletePokemonArr);
  }

  return selectedPokemon.map((pokemon) => {
    if (pokemon === null) {
      return (
        <>
          <div>pokeball</div>
        </>
      );
    } else {
      return (
        <div key={pokemon.id}>
          <h2>{pokemon.korean_name}</h2>
          <img src={pokemon.img_url} />
          <ul>
            <li>{pokemon.types}</li>
            <li>{pokemon.description}</li>
          </ul>
          <button onClick={() => deletePokemon(pokemon)}>삭제</button>
        </div>
      );
    }
  });
};

export default Dashboard;
