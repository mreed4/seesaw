/* eslint-disable react/prop-types */

import { useParkContext } from "./ParkContext";

export const ParkPage = () => {
  const { name, address, city, parkBuilt, getAgeOfPark, features, ageRange, percentage, feedback } = useParkContext();

  const [street, ...cityStateZipParts] = address;
  const cityStateZip = cityStateZipParts.join(", ");

  const uniqueKey = `${name}-${Date.now()}`;

  return (
    <div key={uniqueKey} className="fade-in">
      <section>
        <h1>{name}</h1>
        <h2>{city}</h2>
        <address>
          {street}
          <br />
          {cityStateZip}
        </address>
        <p>
          Built in {parkBuilt} {getAgeOfPark(parkBuilt)}
        </p>
        <p>For ages {ageRange}</p>
      </section>

      <section>
        <h3>Features</h3>
        <table>
          <caption className="sr-only">List of park features</caption>
          <tbody>
            {Object.entries(features).map(([key, value], i) => (
              <tr key={i}>
                <td>{key}</td>
                <td>{value ? <span>Yes</span> : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3>What do parents think?</h3>
        <p>{percentage}% of parents and kids like this park</p>
        <table>
          <caption className="sr-only">Feedback from parents</caption>
          <tbody>
            {feedback.map(({ id, userId, review, rating }) => (
              <tr key={`${id}_${userId}`}>
                <td>{rating === "Like" ? "👍" : "👎"}</td>
                <td>{review}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};
