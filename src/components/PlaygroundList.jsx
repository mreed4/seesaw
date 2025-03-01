import { Link } from "react-router-dom";
import playgrounds from "../data/data";

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
          {playgrounds.map((playground) => {
            const { id, address, names, yearBuilt } = playground;
            // eslint-disable-next-line no-unused-vars
            const [street, city, state, zip] = address;
            const { official: name } = names;
            return (
              <tr key={id}>
                <td>
                  <Link to={`/playgrounds/${toKebabCase(city)}/${toKebabCase(name)}`} state={{ id }}>
                    {name}
                  </Link>
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
