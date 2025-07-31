import axios from "axios";

export const login = (email) =>
  axios.post("/api/auth/login", { email }).then((res) => res.data);

export const logout = () =>
  axios.post("/api/auth/logout").then((res) => res.data);
