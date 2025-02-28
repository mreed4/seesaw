/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useParkLogic = (parks, initialParkIndex) => {
  const [park, setPark] = useState(initialParkIndex);
  const navigate = useNavigate();

  const handleSpaceKey = (event) => {
    if (event.code === "Space" && event.ctrlKey) {
      const newRandomNumber = Math.floor(Math.random() * parks.length);
      setPark(newRandomNumber);
      navigate(`/parks/${toKebabCase(parks[newRandomNumber].address[1])}/${newRandomNumber}`);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleSpaceKey);

    return () => {
      window.removeEventListener("keyup", handleSpaceKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (parks[park]?.names?.official) {
      document.title = `Seesaw - ${parks[park].names.official}`;
    }
  }, [park, parks]);

  const ratings = Array.isArray(parks[park]?.ratings) ? parks[park].ratings : [];
  const totalRatings = ratings.reduce((n, acc) => (n += acc), 0);
  const [likes, dislikes] = ratings;
  const percentage = totalRatings ? ((likes / totalRatings) * 100).toFixed(0) : 0;

  // Extract city from the address array
  const address = parks[park]?.address ?? [];
  const [street, city, state, zip] = address;

  return {
    park,
    setPark,
    percentage,
    parkBuilt: parks[park]?.yearBuilt,
    features: parks[park]?.features ?? {},
    address,
    city,
    name: parks[park]?.names?.official ?? "",
    ageRange: parks[park]?.ageRange?.join(" to ") ?? "unknown",
    feedback: parks[park]?.feedback ?? [],
    getAgeOfPark: (yearBuilt) => {
      const currentYear = new Date().getFullYear();
      if (!yearBuilt) return "unknown year";
      if (yearBuilt === currentYear) return "(this year 🎉)";
      if (currentYear - yearBuilt === 1) return "(last year)";
      return `(${currentYear - yearBuilt} years ago)`;
    },
  };
};

const toKebabCase = (str) => {
  return str.toLowerCase().replace(/ /g, "-");
};
