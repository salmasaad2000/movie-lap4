import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
 })
 
 axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
        config.params = config.params || {};
        config.params["api_key"] = "0af8d11c53c0940e9821fa2bec353f72"; 
        return config;
      },
       function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
  
    return response;
  }, function (error) {
  
    return Promise.reject(error);
  });

 export default axiosInstance;