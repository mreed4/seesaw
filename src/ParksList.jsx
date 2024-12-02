import parks from "./data";

const calculatePercentage = (ratings) => {
  if (!ratings || ratings.length === 0) return 0;

  const [likes, dislikes] = ratings;
  const totalRatings = likes + dislikes;
  if (totalRatings === 0) return 0;

  return ((likes / totalRatings) * 100).toFixed(0);
};

export const ParksList = () => {
  const parkData = parks.map((park) => ({
    id: park.id,
    name: park.names.official,
    city: park.address[1], // Assuming the city is the second item in the address array
    percentage: calculatePercentage(park.ratings),
  }));

  return (
    <ol>
      {parkData.map((park) => {
        const { id, name, city, percentage } = park;

        return (
          <li key={id}>
            <h1>{name}</h1>
          </li>
        );
      })}
    </ol>
  );
};
