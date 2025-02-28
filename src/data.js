const playgrounds = [
  {
    id: 1,
    names: {
      official: "Elmwood Playground",
      nick: null,
    },
    dateAdded: "2024-11-01T13:22:18Z",
    yearBuilt: null,
    coords: [37.774929, -122.419418],
    address: ["456 Elm St", "San Francisco", "CA", "94102"],
    ageRange: [5, 10],
    features: {
      shaded: false,
      waterPad: false,
      trees: true,
      grass: false,
      playground: true,
      restroom: false,
      gated: false,
    },
    ratings: [30, 5],
    feedback: [
      { id: 1, userId: 6, review: "Great for kids but lacks shade.", rating: "Like" },
      { id: 2, userId: 23, review: "Clean and well-maintained.", rating: "Like" },
      { id: 3, userId: 24, review: "Not enough parking spots.", rating: "Dislike" },
      { id: 4, userId: 25, review: "Good place for a quick playtime.", rating: "Like" },
    ],
    media: [],
  },
  {
    id: 2,
    names: {
      official: "Maple Park",
      nick: "Maple Playground",
    },
    dateAdded: "2024-12-15T10:45:00Z",
    yearBuilt: 2010,
    coords: [34.052235, -118.243683],
    address: ["789 Maple Ave", "Los Angeles", "CA", "90001"],
    ageRange: [3, 12],
    features: {
      shaded: true,
      waterPad: true,
      trees: true,
      grass: true,
      playground: true,
      restroom: true,
      gated: true,
    },
    ratings: [50, 10],
    feedback: [
      { id: 5, userId: 30, review: "Amazing playground with lots of shade.", rating: "Like" },
      { id: 6, userId: 31, review: "Kids love the water pad!", rating: "Like" },
      { id: 7, userId: 32, review: "Very clean and safe.", rating: "Like" },
      { id: 8, userId: 33, review: "A bit crowded on weekends.", rating: "Dislike" },
    ],
    media: [],
  },
];

export default playgrounds;
