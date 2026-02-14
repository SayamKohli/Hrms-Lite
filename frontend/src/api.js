import axios from "axios";

export const api = axios.create({
  baseURL: "https://hrms-backend-lowj.onrender.com/api",
});
