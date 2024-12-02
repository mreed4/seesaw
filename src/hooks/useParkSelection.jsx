import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toKebabCase, generateParkUrl } from "../utils/kebabCase";

export const useParkSelection = (parks, city) => {
  const [selectedPark, setSelectedPark] = useState(null);
  const navigate = useNavigate();
  const { name } = useParams();
  const [parkName, parkId] = name.split(/-(\d+)$/);
  const parkIdParsed = parseInt(parkId, 10);

  // Find the park based on the city, name, and id
  const park = parks.find((p) => toKebabCase(p.city) === city && toKebabCase(p.name) === parkName && p.id === parkIdParsed);

  const handleRandomPark = () => {
    if (parks.length > 0) {
      const filteredParks = parks.filter((p) => toKebabCase(p.city) !== city);
      const randomPark = filteredParks[Math.floor(Math.random() * filteredParks.length)];
      const randomParkUrl = `/${generateParkUrl(randomPark.city, randomPark.name, randomPark.id)}`;

      // Update selected park to trigger re-render (via key change)
      setSelectedPark(randomPark);
      // setTimeout(() => navigate(randomParkUrl), 300);
      navigate(randomParkUrl);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        handleRandomPark();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [parks, city]);

  return { park, selectedPark, handleRandomPark };
};
