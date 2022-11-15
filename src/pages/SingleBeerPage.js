import { useParams } from "react-router-dom";

function SingleBeerPage({ beers }) {
  const { beerId } = useParams();

  const beerDetail = beers.find((beer) => beer._id === beerId);

  return (
    <div>
      <h1 className="m-5">Beer Detail</h1>

      <div className="d-flex align-items-center justify-content-center">
        <div>
          <img src={beerDetail.image} alt="beer-detail" height="250px" />
        </div>
        <div className="d-flex flex-column align-items-start">
          <p>
            Name: <span className="fw-bold">{beerDetail.name}</span>
          </p>

          <p>First brewed in: {beerDetail.first_brewed}</p>
          <p>Attenuation Level: {beerDetail.attenuation_level}</p>
          <p>Description: {beerDetail.description}</p>
          <p>Contributed by: {beerDetail.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleBeerPage;
