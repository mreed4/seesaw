/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const usePlaygroundLogic = (playgrounds, initialPlaygroundIndex) => {
  const [playground, setPlayground] = useState(initialPlaygroundIndex);
  const navigate = useNavigate();

  const handleSpaceKey = (event) => {
    if (event.code === "Space" && event.ctrlKey) {
      const newRandomNumber = Math.floor(Math.random() * playgrounds.length);
      setPlayground(newRandomNumber);
      navigate(`/playgrounds/${toKebabCase(playgrounds[newRandomNumber].address[1])}/${newRandomNumber}`);
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
    if (playgrounds[playground]?.names?.official) {
      document.title = `Seesaw - ${playgrounds[playground].names.official}`;
    }
  }, [playground, playgrounds]);

  const ratings = Array.isArray(playgrounds[playground]?.ratings) ? playgrounds[playground].ratings : [];
  const totalRatings = ratings.reduce((n, acc) => (n += acc), 0);
  const [likes, dislikes] = ratings;
  const percentage = totalRatings ? ((likes / totalRatings) * 100).toFixed(0) : 0;

  // Extract city from the address array
  const address = playgrounds[playground]?.address ?? [];
  const [street, city, state, zip] = address;

  return {
    playground,
    setPlayground,
    percentage,
    playgroundBuilt: playgrounds[playground]?.yearBuilt,
    features: playgrounds[playground]?.features ?? {},
    address,
    city,
    name: playgrounds[playground]?.names?.official ?? "",
    ageRange: playgrounds[playground]?.ageRange?.join(" to ") ?? "unknown",
    feedback: playgrounds[playground]?.feedback ?? [],
    getAgeOfPlayground: (yearBuilt) => {
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
