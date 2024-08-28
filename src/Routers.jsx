import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Dex from "./assets/pages/Dex";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
