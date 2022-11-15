import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    async function fetchRandomBeer() {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/random"
      );
      setRandomBeer(response.data);
    }

    fetchRandomBeer();
  }, []);

  return (
    <div>
      <h1 className="m-5">Random Beer</h1>

      <div className="d-flex align-items-center justify-content-center">
        <div>
          <img src={randomBeer.image} alt="beer-detail" height="250px" />
        </div>
        <div className="d-flex flex-column align-items-start">
          <p>
            Name: <span className="fw-bold">{randomBeer.name}</span>
          </p>
          <p>First brewed in: {randomBeer.first_brewed}</p>
          <p>Attenuation Level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
          <p>Contributed by: {randomBeer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomBeerPage;
