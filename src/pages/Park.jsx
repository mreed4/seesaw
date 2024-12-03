/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { ParkContext } from "../context/ParkContext";
import { useParkLogic } from "../hooks/useParkLogic";
import { ParkDetailsProvider, useParkDetails } from "../context/ParkDetailsContext";

const Park = () => {
  const { parks } = useContext(ParkContext);
  const { park } = useParkLogic(parks); // Use custom hook for park selection

  if (!park) {
    return <ParkNotFound />;
  }

  return (
    <ParkDetailsProvider park={park}>
      <ParkDetails />
    </ParkDetailsProvider>
  );
};

const ParkDetails = () => {
  return (
    <div key={`${Date.now()}`} className="fade-in">
      <ParkHeader />
      <ParkFeatures />
      <ParkFeedback />
    </div>
  );
};

// Component for park header
const ParkHeader = () => {
  const { names, address, ageRange } = useParkDetails();
  const { official: name, nick } = names;
  const [street, city, state, zip] = address;

  return (
    <section>
      <Link to="/">
        <span className="material-symbols-outlined">home</span>
      </Link>
      <h1>{name}</h1>
      <h2>{city}</h2>
      <address>
        {street}
        <br />
        {`${city} ${state}`}
        <br />
        {zip}
      </address>
      <p>For ages {ageRange?.join(" to ") ?? "unknown"}</p>
    </section>
  );
};

// Component for park features
const ParkFeatures = () => {
  const { features } = useParkDetails();

  return (
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
  );
};

// Component for park feedback
const ParkFeedback = () => {
  const { feedback, ratings } = useParkDetails();
  const percentage = Math.round((ratings[0] / ratings.reduce((acc, n) => acc + n, 0)) * 100);

  return (
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
  );
};

// Component for park not found message
const ParkNotFound = () => <p>Park not found.</p>;

export default Park;
