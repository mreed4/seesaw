/* eslint-disable react/prop-types */

import { useParkContext } from "./ParkContext";

export const ParkPage = () => {
  const { name, address, city, parkBuilt, getAgeOfPark, features, ageRange, percentage, feedback } = useParkContext();

  return (
    <>
      <h1>{name}</h1>
      <p>{city}</p>
      <p>{address.join(", ")}</p>
      <p>
        Built in {parkBuilt} {getAgeOfPark(parkBuilt)}
      </p>
      <h3>Features</h3>
      <table>
        <tbody>
          <tr>
            <td>Age range:</td>
            <td>{ageRange}</td>
          </tr>
          {Object.entries(features).map(([key, value], i) => (
            <tr key={i}>
              <td>{key}</td>
              <td>{value ? <span>Yes</span> : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>What do parents think?</h3>
      <p>{percentage}% of parents and kids like this park</p>
      <table>
        <tbody>
          {feedback.map(({ id, userId, review, rating }) => (
            <tr key={`${id}_${userId}`}>
              <td>{review}</td>
              <td>{rating ? "👍" : "👎"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
