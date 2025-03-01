import { usePlaygroundContext } from "../context/PlaygroundContext";
import { useParams, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const PlaygroundHeader = () => {
  const { name, address, city, playgroundBuilt, getAgeOfPlayground, ageRange } = usePlaygroundContext();
  const [street, ...cityStateZipParts] = address;
  const cityStateZip = cityStateZipParts.join(", ");

  return (
    <section>
      <Link to="/">All Playgrounds</Link>
      <h1>{name}</h1>
      <h2>{city}</h2>
      <address>
        {street}
        <br />
        {cityStateZip}
      </address>
      <p>
        Built in {playgroundBuilt} {getAgeOfPlayground(playgroundBuilt)}
      </p>
      <p>For ages {ageRange}</p>
    </section>
  );
};

const PlaygroundFeatures = () => {
  const { features } = usePlaygroundContext();

  return (
    <section>
      <h3>Features</h3>
      <table>
        <caption className="sr-only">List of playground features</caption>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(features).map(([key, value], i) => (
            <tr key={i}>
              <td>{key}</td>
              {/* <td>{value ? <span>Yes</span> : "No"}</td> */}
              <td>{String(value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const PlaygroundFeedback = () => {
  const { percentage, feedback } = usePlaygroundContext();

  return (
    <section>
      <h3>What do parents think?</h3>
      <p>{percentage}% of parents and kids like this playground</p>
      <table>
        <caption className="sr-only">Feedback from parents</caption>
        <thead>
          <tr>
            <th>Rating</th>
            <th>Review</th>
          </tr>
        </thead>
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

const PlaygroundPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { city, name } = useParams();
  const location = useLocation();
  const { setPlayground } = usePlaygroundContext();

  useEffect(() => {
    const { id } = location.state || {};
    if (id) {
      setPlayground(id);
    } else {
      // Retrieve the selected playground ID from local storage
      const savedPlaygroundId = localStorage.getItem("selectedPlaygroundId");
      if (savedPlaygroundId) {
        setPlayground(parseInt(savedPlaygroundId, 10));
      }
    }
  }, [location.state, setPlayground]);

  const { name: playgroundName } = usePlaygroundContext();
  const uniqueKey = `${playgroundName}-${Date.now()}`;

  // uniqueKey will force React to reapply the fade-in transition
  return (
    <div key={uniqueKey} className="fade-in">
      <PlaygroundHeader />
      <PlaygroundFeatures />
      <PlaygroundFeedback />
    </div>
  );
};

export default PlaygroundPage;
