import { Link } from "react-router-dom";
import parks from "./data";

const toKebabCase = (str) => {
  return str.toLowerCase().replace(/ /g, "-");
};

const ParkList = () => {
  return (
    <section>
      <h1>Park List</h1>
      <table>
        <thead>
          <tr>
            <th>Park Name</th>
            <th>City</th>
            <th>Year Built</th>
          </tr>
        </thead>
        <tbody>
          {parks.map((park, index) => {
            const { address, names, yearBuilt } = park;
            const [street, city, state, zip] = address;
            const { official: name } = names;
            return (
              <tr key={index}>
                <td>
                  <Link to={`/parks/${toKebabCase(city)}/${index}`}>{name}</Link>
                </td>
                <td>{city}</td>
                <td>{yearBuilt || "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default ParkList;
