import { useState, useEffect, useRef } from "react";
import "./App.css";
import parks from "./data";

const randomNumber = Math.floor(Math.random() * parks.length);

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

function App() {
  const previousIndex = useRef(null);
  const [park, setPark] = useState(randomNumber);

  function getNewRandomNumber() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * parks.length);
    } while (newIndex === previousIndex.current);

    previousIndex.current = newIndex; // Update ref with the new index
    return newIndex;
  }

  function handleSpaceKey(event) {
    if (event.code === "Space") {
      const newRandomNumber = getNewRandomNumber();
      console.log(newRandomNumber);
      setPark(newRandomNumber); // Update the state with the new item
    }
  }

  useEffect(() => {
    window.addEventListener("keyup", handleSpaceKey);

    // Cleanup the listener on unmount
    return () => window.removeEventListener("keyup", handleSpaceKey);
  }, []);

  useEffect(() => {
    // Initialize with a random item when the component mounts
    const initialItem = getNewRandomNumber();
    setPark(initialItem);
  }, []); // Run only on initial mount

  const ratings = parks[park]?.ratings ?? 0;
  const totalRatings = ratings?.reduce((n, acc) => (n += acc), 0) ?? 0;
  const [likes, dislikes] = ratings;
  const percentage = ((likes / totalRatings) * 100).toFixed(0);

  const parkBuilt = parks[park].yearBuilt ?? "unknown year";

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
              <td>{parks[park].ageRange?.join("–") ?? "Unknown"}</td>
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
        {/* <button onClick={() => setPark(Math.round(Math.random() * parks.length))}>New park</button> */}
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
