import axios from "axios";

const client = axios.create({
  baseURL: "https://playto-ljc5.onrender.com/api/,
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
