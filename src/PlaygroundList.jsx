import { Link } from "react-router-dom";
import playgrounds from "./data";

const toKebabCase = (str) => {
  return str.toLowerCase().replace(/ /g, "-");
};

const PlaygroundList = () => {
  return (
    <section>
      <h1>Playground List</h1>
      <table>
        <thead>
          <tr>
            <th>Playground Name</th>
            <th>City</th>
            <th>Year Built</th>
          </tr>
        </thead>
        <tbody>
          {playgrounds.map((playground, index) => {
            const { address, names, yearBuilt } = playground;
            const [street, city, state, zip] = address;
            const { official: name } = names;
            return (
              <tr key={index}>
                <td>
                  <Link to={`/playgrounds/${toKebabCase(city)}/${index}`}>{name}</Link>
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

export default PlaygroundList;
