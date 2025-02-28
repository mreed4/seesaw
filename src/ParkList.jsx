import { Link } from "react-router-dom";
import parks from "./data";

const toKebabCase = (str) => {
  return str.toLowerCase().replace(/ /g, "-");
};

const ParkList = () => {
  return (
    <section>
      <h1>Park List</h1>
      <ul>
        {parks.map((park, index) => (
          <li key={index}>
            <Link to={`/parks/${toKebabCase(park.address[1])}/${index}`}>{park.names.official}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ParkList;
