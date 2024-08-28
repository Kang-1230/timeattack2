// Dex.jsx

import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../../mock";

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  return (
    <>
      <Dashboard
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      <PokemonList
        MOCK_DATA={MOCK_DATA}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </>
  );
}

export default Dex;
