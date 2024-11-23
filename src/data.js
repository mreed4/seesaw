const parks = [
  {
    id: 1,
    names: {
      official: "Central Park",
      nick: [
        {
          name: "The Green Heart",
          userId: 1,
        },
        {
          name: "City Oasis",
          userId: 2,
        },
      ],
    },
    dateAdded: "2024-10-15T09:23:45Z",
    yearBuilt: 1903,
    coords: [40.785091, -73.968285],
    address: ["123 Park Ave", "New York", "NY", "10022"],
    ageRange: [2, 12],
    features: {
      shaded: true,
      waterPad: false,
      trees: true,
      grass: true,
      playground: true,
      restroom: true,
      gated: true,
    },
    ratings: [452, 78],
    feedback: [
      {
        id: 1,
        userId: 3,
        review: "Beautiful and relaxing park.",
        rating: "Like",
      },
      {
        id: 2,
        userId: 4,
        review: "Too crowded during weekends.",
        rating: "Dislike",
      },
    ],
    media: [
      {
        id: 1,
        userId: 5,
        dateUploaded: "2024-10-20T08:15:30Z",
        type: "image",
        uri: "/images/central_park.jpg",
        impressions: 500,
      },
    ],
  },
  {
    id: 2,
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
      {
        id: 1,
        userId: 6,
        review: "Great for kids but lacks shade.",
        rating: "Like",
      },
    ],
    media: [],
  },
  {
    id: 3,
    names: {
      official: "Sunset Park",
      nick: [
        {
          name: "Splash Heaven",
          userId: 7,
        },
      ],
    },
    dateAdded: "2024-11-05T15:10:00Z",
    yearBuilt: 2010,
    coords: [34.052235, -118.243683],
    address: ["789 Sunset Blvd", "Los Angeles", "CA", "90028"],
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
    ratings: [120, 10],
    feedback: [
      {
        id: 1,
        userId: 8,
        review: "Fantastic for water play!",
        rating: "Like",
      },
      {
        id: 2,
        userId: 9,
        review: "Restrooms need maintenance.",
        rating: "Dislike",
      },
    ],
    media: [
      {
        id: 1,
        userId: 10,
        dateUploaded: "2024-11-06T10:30:45Z",
        type: "video",
        uri: "/videos/sunset_splash.mp4",
        impressions: 300,
      },
    ],
  },
  {
    id: 4,
    names: {
      official: "Riverbend Park",
      nick: [
        {
          name: "The Bend",
          userId: 11,
        },
        {
          name: "Riverside Retreat",
          userId: 12,
        },
      ],
    },
    dateAdded: "2024-11-08T12:34:56Z",
    yearBuilt: 1985,
    coords: [38.907192, -77.036871],
    address: ["567 Riverbend Dr", "Washington (DC)", "DC", "20007"],
    ageRange: null,
    features: {
      shaded: true,
      waterPad: false,
      trees: true,
      grass: true,
      playground: false,
      restroom: true,
      gated: true,
    },
    ratings: [75, 10],
    feedback: [
      {
        id: 1,
        userId: 13,
        review: "Great place for a picnic.",
        rating: "Like",
      },
    ],
    media: [
      {
        id: 1,
        userId: 14,
        dateUploaded: "2024-11-10T14:20:00Z",
        type: "image",
        uri: "/images/riverbend.jpg",
        impressions: 120,
      },
    ],
  },
  {
    id: 5,
    names: {
      official: "Maple Grove Park",
      nick: null,
    },
    dateAdded: "2024-11-09T08:20:30Z",
    yearBuilt: 2023,
    coords: [42.360081, -71.058884],
    address: ["321 Maple St", "Boston", "MA", "02108"],
    ageRange: [4, 8],
    features: {
      shaded: false,
      waterPad: false,
      trees: true,
      grass: true,
      playground: true,
      restroom: false,
      gated: true,
    },
    ratings: [50, 5],
    feedback: [
      {
        id: 1,
        userId: 15,
        review: "Perfect for quiet play.",
        rating: "Like",
      },
    ],
    media: [],
  },
  {
    id: 6,
    names: {
      official: "Seaside Park",
      nick: [
        {
          name: "Ocean Breeze Park",
          userId: 16,
        },
      ],
    },
    dateAdded: "2024-11-12T16:45:00Z",
    yearBuilt: 1995,
    coords: [36.778259, -119.417931],
    address: ["654 Ocean Dr", "Santa Cruz", "CA", "95060"],
    ageRange: [3, 10],
    features: {
      shaded: true,
      waterPad: true,
      trees: true,
      grass: true,
      playground: true,
      restroom: true,
      gated: false,
    },
    ratings: [200, 15],
    feedback: [
      {
        id: 1,
        userId: 17,
        review: "Amazing views and facilities!",
        rating: "Like",
      },
      {
        id: 2,
        userId: 18,
        review: "Wish there were more benches.",
        rating: "Dislike",
      },
    ],
    media: [
      {
        id: 1,
        userId: 19,
        dateUploaded: "2024-11-13T11:10:25Z",
        type: "video",
        uri: "/videos/seaside_park.mp4",
        impressions: 250,
      },
    ],
  },
  {
    id: 7,
    names: {
      official: "Official Name",
      nick: [
        {
          name: "Nickname 1",
          userId: 1,
        },
        {
          name: "Nickname 2",
          userId: 2,
        },
      ],
    },
    dateAdded: "2024-11-18T00:00:00Z",
    yearBuilt: 2024,
    coords: [0.0, 0.0],
    address: ["Street Address", "City Name", "State Code", "ZIP Code"],
    ageRange: [1, 99],
    features: {
      shaded: true,
      waterPad: true,
      trees: true,
      grass: true,
      playground: true,
      restroom: true,
      gated: false,
    },
    ratings: [50, 75],
    feedback: [
      {
        id: 1,
        userId: 1,
        review: "User Feedback Text",
        rating: "Like",
      },
      {
        id: 2,
        userId: 2,
        review: "Another Feedback Example",
        rating: "Dislike",
      },
    ],
    media: [
      {
        id: 1,
        userId: 1,
        dateUploaded: "2024-11-18T12:00:00Z",
        type: "image",
        uri: "/path/to/media.jpg",
        impressions: 0,
      },
      {
        id: 2,
        userId: 2,
        dateUploaded: "2024-11-18T12:30:00Z",
        type: "video",
        uri: "/path/to/media.mp4",
        impressions: 0,
      },
    ],
  },
];

export default parks;
