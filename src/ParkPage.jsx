import { useParkContext } from "./ParkContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ParkHeader = () => {
  const { name, address, city, parkBuilt, getAgeOfPark, ageRange } = useParkContext();
  const [street, ...cityStateZipParts] = address;
  const cityStateZip = cityStateZipParts.join(", ");

  return (
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
  );
};

const ParkFeatures = () => {
  const { features } = useParkContext();

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

const ParkFeedback = () => {
  const { percentage, feedback } = useParkContext();

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

const ParkPage = () => {
  const { id } = useParams();
  const { setPark } = useParkContext();

  useEffect(() => {
    setPark(Number(id));
  }, [id, setPark]);

  const { name } = useParkContext();
  const uniqueKey = `${name}-${Date.now()}`;

  // uniqueKey will force React to reapply the fade-in transition
  return (
    <div key={uniqueKey} className="fade-in">
      <ParkHeader />
      <ParkFeatures />
      <ParkFeedback />
    </div>
  );
};

export default ParkPage;
// Note: The `fade-in` class is assumed to be defined in your CSS for the transition effect.
