import axios from "axios";

const instance = axios.create({
  baseURL: "https://syc.tucana.org/api",
  timeout: 10000,
});

export default instance;
