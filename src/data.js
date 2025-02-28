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
];

export default playgrounds;
