/* eslint-disable react/prop-types */

import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ParkContext } from "../context/ParkContext";
import { toKebabCase } from "../utils/kebabCase";

const ParkDetails = ({ park }) => (
  <div>
    <h1>{park.name}</h1>
    <p>Location: {park.location}</p>
    <p>City: {park.city}</p>
  </div>
);

const ParkNotFound = () => <p>Park not found.</p>;

const Park = () => {
  const { parks } = useContext(ParkContext);
  const { city, name } = useParams();

  // Extract the park name and ID from the "name-id" parameter
  const [parkName, parkId] = name.split(/-(\d+)$/);
  const id = parseInt(parkId, 10);

  const park = parks.find((p) => toKebabCase(p.city) === city && toKebabCase(p.name) === parkName && p.id === id);

  return park ? <ParkDetails park={park} /> : <ParkNotFound />;
};

export default Park;
