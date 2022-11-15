import { Link } from "react-router-dom";

import beersImage from "../assets/beers.png";
import randomImage from "../assets/random-beer.png";
import newbeerImage from "../assets/new-beer.png";

function HomePage() {
  return (
    <div>
      <h1 className="m-5">Beers</h1>

      <div className="d-flex justify-content-center gap-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={beersImage} className="card-img-top" alt="beers" />
          <div className="card-body">
            <h5 className="card-title">All Beers</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/beers" className="btn btn-primary">
              All Beers
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={randomImage} className="card-img-top" alt="beers" />
          <div className="card-body">
            <h5 className="card-title">Random Beer</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/random-beer" className="btn btn-primary">
              Random Beers
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={newbeerImage} className="card-img-top" alt="beers" />
          <div className="card-body">
            <h5 className="card-title">New Beer</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/new-beer" className="btn btn-primary">
              New Beer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
