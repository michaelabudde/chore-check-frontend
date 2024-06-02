export const link = URL;
export const headers = {
  authorization: "",
  "Content-Type": "application/json",
};
export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://chorecheckapi.azurewebsites.net/api/iconfinder" // changed to backend
    : "http://localhost:3001";

export const fetchedMembers = [
  {
    id: 1,
    member: "James",
    avatar: "👤",
  },
  {
    id: 2,
    member: "Jas",
    avatar: "👤",
  },
  {
    id: 3,
    member: "Queen",
    avatar: "👤",
  },
  {
    id: 4,
    member: "Jayden",
    avatar: "👤",
  },
];

export const fetchedChores = [
  {
    id: 1,
    name: "Clean Kitchen",
    icon: "🧽",
  },
  {
    id: 2,
    name: "Laundry",
    icon: "🧺",
  },
  {
    id: 3,
    name: "Sweep Bedroom",
    icon: "🧹",
  },
  {
    id: 4,
    name: "Clean Bathroom",
    icon: "🛁",
  },
];
