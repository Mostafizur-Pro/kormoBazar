import axios from "axios";

// Create an Axios instance
const TokenAPI = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

// Add a request interceptor
TokenAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default TokenAPI;
