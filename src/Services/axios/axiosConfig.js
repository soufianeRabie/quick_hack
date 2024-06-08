import axios from "axios";
import {TOKEN_NAME} from "@/Library/index.jsx";


 const axiosConfig = axios.create(
  {
    baseURL : import.meta.env.VITE_BACKEND_URL
  })
axiosConfig.interceptors.request.use(function (config) {
  const token = localStorage.getItem(TOKEN_NAME);
  // console.log(token)
  if (token) {
    // console.log(token)
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
})

export default axiosConfig
