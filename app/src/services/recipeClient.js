import axios from "axios";

// Create axios instance with base URL for development
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:4001' : '',
  timeout: 10000,
});

export default {
  list: () => api.get("/api/recipes").then((r) => r.data),
  generate: (ingredients, userId) =>
    api
      .post("/api/recipes/generate", { ingredients, userId })
      .then((r) => r.data),
};
