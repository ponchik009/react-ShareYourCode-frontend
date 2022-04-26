import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_URL || "http://localhost:8001/api",
  timeout: 10000,
  withCredentials: true,
});

export default instance;
