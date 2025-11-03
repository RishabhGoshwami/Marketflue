import axios from "axios";

const api = axios.create({
  baseURL: "https://marketflue-1.onrender.com/api", // 👈 Render backend ka URL
});

export default api;
