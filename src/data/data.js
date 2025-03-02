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
  {
    id: 3,
    names: {
      official: "Trolley Barn Park",
      nick: null,
    },
    dateAdded: "2025-02-10T14:00:00Z",
    yearBuilt: 1990,
    coords: [32.758091, -117.145817],
    address: ["1943 Adams Ave", "San Diego", "CA", "92116"],
    ageRange: [2, 12],
    features: {
      shaded: true,
      waterPad: false,
      trees: true,
      grass: true,
      playground: true,
      restroom: false,
      gated: false,
    },
    ratings: [45, 7],
    feedback: [
      { id: 13, userId: 38, review: "Lovely park with a great playground.", rating: "Like" },
      { id: 14, userId: 39, review: "Perfect for family picnics.", rating: "Like" },
      { id: 15, userId: 40, review: "Could use more parking.", rating: "Dislike" },
      { id: 16, userId: 41, review: "Well-maintained and clean.", rating: "Like" },
    ],
    media: [],
  },
  {
    id: 4,
    names: {
      official: "Sunset Park",
      nick: "Sunset Playground",
    },
    dateAdded: "2025-03-20T09:30:00Z",
    yearBuilt: 2015,
    coords: [36.778259, -119.417931],
    address: ["123 Sunset Blvd", "Fresno", "CA", "93722"],
    ageRange: [4, 14],
    features: {
      shaded: true,
      waterPad: true,
      trees: true,
      grass: true,
      playground: true,
      restroom: true,
      gated: true,
    },
    ratings: [60, 8],
    feedback: [
      { id: 17, userId: 42, review: "Fantastic playground with lots of activities.", rating: "Like" },
      { id: 18, userId: 43, review: "Kids had a blast!", rating: "Like" },
      { id: 19, userId: 44, review: "Very clean and well-maintained.", rating: "Like" },
      { id: 20, userId: 45, review: "Can get crowded during weekends.", rating: "Dislike" },
    ],
    media: [],
  },
];

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    dateJoined: "2024-01-15T10:00:00Z",
    favorites: [1, 2], // Array of favorite playground IDs
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    dateJoined: "2024-02-20T14:30:00Z",
    favorites: [3],
  },
  // ...more users...
];

export { playgrounds, users };
