/* eslint-disable no-unused-vars */

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const useParkLogic = (parks) => {
  const previousIndex = useRef(null);
  const [park, setPark] = useState(() => Math.floor(Math.random() * parks.length));
  const navigate = useNavigate();

  const getNewRandomNumber = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * parks.length);
    } while (newIndex === previousIndex.current);

    previousIndex.current = newIndex;
    return newIndex;
  };

  const handleSpaceKey = (event) => {
    if (event.code === "Space") {
      const newRandomNumber = getNewRandomNumber();
      setPark(newRandomNumber);
      navigate(`/park/${newRandomNumber}`);
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
    const initialItem = getNewRandomNumber();
    setPark(initialItem);
    navigate(`/park/${initialItem}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
