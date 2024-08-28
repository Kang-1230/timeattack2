import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Dex from "./assets/pages/Dex";
import PokemonDetail from "./assets/pages/PokemonDetail";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/dex/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
