import { useState } from "react";
import "./App.css";
import parks from "./data";

function App() {
  const [count, setCount] = useState(0);

  const randomPark = Math.round(Math.random() * parks.length);
  const placeholder = 6;
  let park = randomPark;
  park = placeholder;

  // console.log(parks[park].names.official);

  const ratings = parks[park].ratings;
  const totalRatings = ratings.reduce((n, acc) => (n += acc), 0);
  const [likes, dislikes] = ratings;
  const percentage = ((likes / totalRatings) * 100).toFixed(0);

  const parkBuilt = parks[park].yearBuilt ?? "unknown year";

  const getAgeOfPark = (yearBuilt) => {
    const currentYear = new Date().getFullYear();
    if (!yearBuilt) {
      return "";
    }
    if (yearBuilt === currentYear) {
      return "(this year 🎉)";
    }
    if (currentYear - yearBuilt === 1) {
      return "(last year)";
    }
    return `(${currentYear - yearBuilt} years ago)`;
  };

  function ParkPage() {
    return (
      <>
        <h1>{parks[park].names.official}</h1>
        {/* <h2>{parks[park].names.nick?.[0].name ?? ""}</h2> */}
        <p>{parks[park].address.join(", ")}</p>
        <p>
          Built in {parkBuilt} {getAgeOfPark(parks[park].yearBuilt)}
        </p>
        <h3>Features</h3>
        <table>
          <tbody>
            <tr>
              <td>Age range:</td>
              <td>{parks[park].ageRange.join("–")}</td>
            </tr>
            {Object.entries(parks[park].features).map(([key, value], i) => (
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
            {parks[park].feedback.map(({ id, userId, review, rating }) => (
              <tr key={`${id}_${userId}`}>
                <td>{review}</td>
                <td>{rating ? "👍" : "👎"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <>
      <ParkPage></ParkPage>
    </>
  );
}

export default App;
