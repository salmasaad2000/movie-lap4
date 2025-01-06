import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Accessing base URL from env file
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.params = config.params || {};
    config.params["api_key"] = import.meta.env.VITE_API_KEY; // Accessing API key from env file
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
