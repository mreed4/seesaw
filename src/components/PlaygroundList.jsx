import { playgrounds } from "../data/data";

import PlaygroundLink from "./PlaygroundLink";

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
          {playgrounds.map(({ id, address, names, yearBuilt }) => {
            // const { id, address, names, yearBuilt } = playground;
            // eslint-disable-next-line no-unused-vars
            const [street, city, state, zip] = address;
            return (
              <tr key={id}>
                <td>
                  <PlaygroundLink playground={{ id, names, address }} />
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
