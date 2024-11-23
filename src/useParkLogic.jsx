import { useState, useEffect, useRef } from "react";

export const useParkLogic = (parks) => {
  const previousIndex = useRef(null);
  const [park, setPark] = useState(() => Math.floor(Math.random() * parks.length));

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
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleSpaceKey);

    return () => {
      window.removeEventListener("keyup", handleSpaceKey);
    };
  }, []);

  useEffect(() => {
    const initialItem = getNewRandomNumber();
    setPark(initialItem);
  }, []);

  const ratings = parks[park]?.ratings ?? 0;
  const totalRatings = ratings?.reduce((n, acc) => (n += acc), 0) ?? 0;
  const [likes, dislikes] = ratings;
  const percentage = totalRatings ? ((likes / totalRatings) * 100).toFixed(0) : 0;

  // Extract city from the address array
  const address = parks[park]?.address ?? [];
  const city = address[1];

  return {
    park,
    setPark,
    percentage,
    parkBuilt: parks[park]?.yearBuilt ?? "unknown year",
    features: parks[park]?.features ?? {},
    address,
    city,
    name: parks[park]?.names?.official ?? "",
    ageRange: parks[park]?.ageRange?.join(" to ") ?? "Unknown",
    feedback: parks[park]?.feedback ?? [],
    getAgeOfPark: (yearBuilt) => {
      const currentYear = new Date().getFullYear();
      if (!yearBuilt) return "";
      if (yearBuilt === currentYear) return "(this year 🎉)";
      if (currentYear - yearBuilt === 1) return "(last year)";
      return `(${currentYear - yearBuilt} years ago)`;
    },
  };
};
