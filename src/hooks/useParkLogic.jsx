// src/hooks/useParkLogic.js

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toKebabCase, generateParkUrl } from "../utils/kebabCase";

export const useParkLogic = (parks) => {
  const [selectedPark, setSelectedPark] = useState(null);
  const navigate = useNavigate();
  const { city, name } = useParams();
  const [parkName, parkId] = name.split(/-(\d+)$/);
  const parkIdParsed = parseInt(parkId, 10);

  // Find the park based on city, name, and id
  const park = parks.find((p) => toKebabCase(p.address[1]) === city && toKebabCase(p.names.official) === parkName && p.id === parkIdParsed);

  const handleRandomPark = () => {
    if (parks.length > 0) {
      const filteredParks = parks.filter((p) => toKebabCase(p.address[1]) !== city);
      const randomPark = filteredParks[Math.floor(Math.random() * filteredParks.length)];
      const randomParkUrl = `/${generateParkUrl(randomPark.address[1], randomPark.names.official, randomPark.id)}`;

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

  return { park, handleRandomPark };
};
