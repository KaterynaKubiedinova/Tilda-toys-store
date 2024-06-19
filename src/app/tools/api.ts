import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_HOST,
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
});

export default api;
