import { Link } from "react-router-dom";
import parks from "./data";

const ParkList = () => {
  return (
    <section>
      <h1>Park List</h1>
      <ul>
        {parks.map((park, index) => (
          <li key={index}>
            <Link to={`/park/${index}`}>{park.names.official}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ParkList;
