import axios from "axios";

export const todo = axios.create({
  baseURL: "http://localhost:5000/",
});
