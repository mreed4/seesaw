/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const usePlaygroundLogic = (playgrounds, initialPlaygroundId) => {
  const [playground, setPlayground] = useState(() => {
    // Retrieve the selected playground ID from local storage
    const savedPlaygroundId = localStorage.getItem("selectedPlaygroundId");
    return savedPlaygroundId ? parseInt(savedPlaygroundId, 10) : initialPlaygroundId;
  });
  const [lastRandomNumber, setLastRandomNumber] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSpaceKey = (event) => {
    if (event.code === "Space" && event.ctrlKey) {
      const newRandomNumber = generateUniqueRandomNumber(playgrounds.length, lastRandomNumber);
      setLastRandomNumber(newRandomNumber);
      setPlayground(playgrounds[newRandomNumber].id);
      navigateToPlayground(playgrounds[newRandomNumber]);
    }
  };

  const generateUniqueRandomNumber = (max, lastNumber) => {
    let newRandomNumber;
    do {
      newRandomNumber = Math.floor(Math.random() * max);
    } while (newRandomNumber === lastNumber);
    return newRandomNumber;
  };

  const navigateToPlayground = (playground) => {
    const { address, names } = playground;
    navigate(`/playgrounds/${toKebabCase(address[1])}/${toKebabCase(names.official)}`);
  };

  useEffect(() => {
    window.addEventListener("keyup", handleSpaceKey);
    return () => {
      window.removeEventListener("keyup", handleSpaceKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const selectedPlayground = playgrounds.find((p) => p.id === playground);
    if (location.pathname.includes("/playgrounds/") && selectedPlayground?.names?.official) {
      document.title = `Seesaw - ${selectedPlayground.names.official}`;
    } else if (location.pathname === "/playgrounds") {
      document.title = "Seesaw - All Playgrounds"; // Title for playgrounds route
    } else {
      document.title = "Seesaw - All Parks"; // Default title
    }
    // Store the selected playground ID in local storage
    localStorage.setItem("selectedPlaygroundId", playground);
  }, [playground, playgrounds, location.pathname]);

  const selectedPlayground = playgrounds.find((p) => p.id === playground) || {};
  const ratings = Array.isArray(selectedPlayground.ratings) ? selectedPlayground.ratings : [];
  const totalRatings = ratings.reduce((n, acc) => (n += acc), 0);
  const [likes, dislikes] = ratings;
  const percentage = totalRatings ? ((likes / totalRatings) * 100).toFixed(0) : 0;

  const address = selectedPlayground.address ?? [];
  const [street, city, state, zip] = address;

  return {
    playground,
    setPlayground,
    percentage,
    playgroundBuilt: selectedPlayground.yearBuilt,
    features: selectedPlayground.features ?? {},
    address,
    city,
    name: selectedPlayground.names?.official ?? "",
    ageRange: selectedPlayground.ageRange?.join(" to ") ?? "unknown",
    feedback: selectedPlayground.feedback ?? [],
    getAgeOfPlayground,
  };
};

const getAgeOfPlayground = (yearBuilt) => {
  const currentYear = new Date().getFullYear();
  if (!yearBuilt) return "unknown year";
  if (yearBuilt === currentYear) return "(this year 🎉)";
  if (currentYear - yearBuilt === 1) return "(last year)";
  return `(${currentYear - yearBuilt} years ago)`;
};

const toKebabCase = (str) => {
  return str.toLowerCase().replace(/ /g, "-");
};
