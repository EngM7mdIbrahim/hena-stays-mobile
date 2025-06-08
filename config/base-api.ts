import axios from "axios";
import env from "@config/env";

export const axiosApi = axios.create({
  baseURL: env.EXPO_PUBLIC_API_URL,
});

// axiosApi.interceptors.request.use(
//   (config) => {
//     const newConfig = { ...config }
//     const token = Cookies.get(COOKIE_KEYS.ACCESS_TOKEN)
//     if (token) {
//       newConfig.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => Promise.reject(error)
// )
