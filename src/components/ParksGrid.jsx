// ParksGrid.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import "./ParksGrid.css";

const ParksGrid = ({ parks }) => {
  const [adjustedParks, setAdjustedParks] = useState(parks);
  const gridRef = useRef(null);

  // Adjust grid items based on the number of items in the grid
  const adjustGridItems = () => {
    const grid = gridRef.current;
    if (!grid) return;

    const totalItems = grid.children.length;
    const gridTemplateColumns = window.getComputedStyle(grid).getPropertyValue("grid-template-columns");
    const columns = gridTemplateColumns.split(" ").length;

    // Calculate the number of rows
    const rows = Math.ceil(totalItems / columns);

    // If the grid is not full, add a placeholder item
    if (rows * columns > totalItems) {
      if (!grid.querySelector(".placeholder")) {
        const placeholder = document.createElement("li");
        placeholder.classList.add("placeholder");
        grid.appendChild(placeholder);
      }
    } else {
      const placeholder = grid.querySelector(".placeholder");
      if (placeholder) {
        grid.removeChild(placeholder);
      }
    }
  };

  useEffect(() => {
    setAdjustedParks(parks); // Update the parks in the state
  }, [parks]);

  useEffect(() => {
    adjustGridItems();
    window.addEventListener("resize", adjustGridItems);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", adjustGridItems);
    };
  }, [adjustedParks]);

  return (
    <ul className="parks-grid" ref={gridRef}>
      {adjustedParks.map((park) => (
        <li key={park.id}>
          <Link to={`/${park.url}`}>
            {park.name} ({park.address})
          </Link>{" "}
          {/* Using Link instead of <a> */}
        </li>
      ))}
    </ul>
  );
};

export default ParksGrid;
