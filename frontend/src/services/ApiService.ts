import axios from "axios";

export const ApiService = axios.create({
  baseURL: "/api",
  maxContentLength: 5 * 1024 * 1024,
});
