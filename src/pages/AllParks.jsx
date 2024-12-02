import { useContext } from "react";
import { Link } from "react-router-dom";
import { ParkContext } from "../context/ParkContext";
import { generateParkUrl } from "../utils/kebabCase";

const AllParks = () => {
  const { parks } = useContext(ParkContext);

  return (
    <div>
      <h1>All Parks</h1>
      <ul>
        {parks.map((park) => (
          <li key={park.id}>
            <Link to={`/park/${generateParkUrl(park.city, park.name, park.id)}`}>
              {park.name} ({park.city})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllParks;
