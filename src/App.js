import "./App.css";
import { useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListBeersPage from "./pages/ListBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import NewBeerPage from "./pages/NewBeerPage";
import Navbar from "./components/NavBar";
import SingleBeerPage from "./pages/SingleBeerPage";

function App() {
  const [beers, setBeers] = useState([]);

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/beers"
          element={<ListBeersPage beers={beers} setBeers={setBeers} />}
        ></Route>
        <Route
          path="/beers/:beerId"
          element={<SingleBeerPage beers={beers} />}
        ></Route>
        <Route path="/random-beer" element={<RandomBeerPage />}></Route>
        <Route path="/new-beer" element={<NewBeerPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
