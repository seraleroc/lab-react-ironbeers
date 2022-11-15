import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function ListBeersPage({ beers, setBeers }) {
  useEffect(() => {
    async function fetchBeers() {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    }

    fetchBeers();
  }, [setBeers]);

  return (
    <div>
      <h1 className="m-5">Beers</h1>
      {beers.map((beer) => {
        return (
          <div
            className="d-flex align-items-center justify-content-center"
            key={beer._id}
          >
            <div className="w-25">
              <div className="border-2 bgc-white my-2 py-3 shadow-sm">
                <div className="row align-items-center">
                  <div className="col-12 col-md-4">
                    <img src={beer.image} height="120px" alt="beer-img" />
                  </div>

                  <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
                    <li className="fw-bolder">{beer.name}</li>

                    <li>{beer.contributed_by}</li>
                  </ul>

                  <div className="col-12 col-md-4 text-center">
                    <Link to={`/beers/${beer._id}`}>+Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListBeersPage;
