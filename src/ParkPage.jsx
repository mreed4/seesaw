/* eslint-disable react/prop-types */

export const ParkPage = ({ name, address, city, parkBuilt, getAgeOfPark, features, ageRange, percentage, feedback }) => (
  <>
    <h1>{name}</h1>
    <h2>{city}</h2> {/* Display the city */}
    <p>{address.join(", ")}</p>
    <p>
      Built in {parkBuilt} {getAgeOfPark(parkBuilt)}
    </p>
    <p>For ages {ageRange}</p>
    <h3>Features</h3>
    <table>
      <tbody>
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
        {feedback.map(({ id, userId, review, rating }, i) => (
          <tr key={`${id}_${userId}`}>
            <td>{`${i + 1}. `}</td>
            <td>{review}</td>
            <td>{rating === "Like" ? "👍" : "👎"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
