/* eslint-disable react/prop-types */

import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ParkContext } from "../context/ParkContext";
import { useParkSelection } from "../hooks/useParkSelection";

const Park = () => {
  const { parks } = useContext(ParkContext);
  const { city } = useParams();

  // Use custom hook for park selection and random park functionality
  const { park } = useParkSelection(parks, city);

  if (!park) {
    return <ParkNotFound />;
  }

  return <ParkDetails park={park} />;
};

function ParkDetails({ park }) {
  const uniqueKey = `${park.name}-${Date.now()}`;

  return (
    <div key={uniqueKey} className="fade-in">
      <h1>{park.name}</h1>
      <p>Location: {park.location}</p>
      <p>City: {park.city}</p>
    </div>
  );
}

function ParkNotFound() {
  return <p>Park not found.</p>;
}

export default Park;
