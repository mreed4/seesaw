/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { debounce, kebabCase } from "lodash";
import { playgrounds } from "../data/data";

// Custom hook to manage playground logic
export const usePlaygroundLogic = (initialPlaygroundId) => {
  // State management
  const [playground, setPlayground] = useState(() => {
    const savedPlaygroundId = localStorage.getItem("selectedPlaygroundId");
    return savedPlaygroundId ? parseInt(savedPlaygroundId, 10) : initialPlaygroundId;
  });
  const [lastRandomNumber, setLastRandomNumber] = useState(null);

  // Navigation hooks
  const navigate = useNavigate();
  const location = useLocation();

  // Debounced event handler for space key
  const handleSpaceKey = debounce((event) => {
    if (event.code === "Space" && event.ctrlKey) {
      const newRandomNumber = generateUniqueRandomNumber(playgrounds.length, lastRandomNumber);
      setLastRandomNumber(newRandomNumber);
      setPlayground(playgrounds[newRandomNumber].id);
      navigateToPlayground(playgrounds[newRandomNumber]);
    } else {
      console.log("Debounced: Excessive call blocked");
    }
  }, 300);

  // Generate a unique random number
  const generateUniqueRandomNumber = (max, lastNumber) => {
    let newRandomNumber;
    do {
      newRandomNumber = Math.floor(Math.random() * max);
    } while (newRandomNumber === lastNumber);
    return newRandomNumber;
  };

  // Navigate to a specific playground
  const navigateToPlayground = (playground) => {
    const { address, names } = playground;
    navigate(`/playground/${kebabCase(address[1])}/${kebabCase(names.official)}`);
  };

  // Effect to handle keyup event
  useEffect(() => {
    window.addEventListener("keyup", handleSpaceKey);
    return () => {
      window.removeEventListener("keyup", handleSpaceKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Effect to update document title and local storage
  useEffect(() => {
    const selectedPlayground = playgrounds.find((p) => p.id === playground);
    if (location.pathname.includes("/playground/") && selectedPlayground?.names?.official) {
      document.title = `Seesaw - ${selectedPlayground.names.official}`;
    } else if (location.pathname === "/playgrounds") {
      document.title = "Seesaw - All Playgrounds";
    } else {
      document.title = "Seesaw - All Playgrounds";
    }
    localStorage.setItem("selectedPlaygroundId", playground);
  }, [playground, location.pathname]);

  // Calculate ratings and other playground details
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

// Helper function to get the age of the playground
const getAgeOfPlayground = (yearBuilt) => {
  const currentYear = new Date().getFullYear();
  if (!yearBuilt) return "unknown year";
  if (yearBuilt === currentYear) return "(this year 🎉)";
  if (currentYear - yearBuilt === 1) return "(last year)";
  return `(${currentYear - yearBuilt} years ago)`;
};
