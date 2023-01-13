import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://json-server-tvsv.onrender.com",
});

export default axiosInstance;
