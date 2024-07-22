import { ApiEndpoinst } from "@/constants/apiEndpoinst";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_HOST,
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
});

api.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('AccessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const statusError = error.response?.status;

    if (statusError === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const response = await api.get(ApiEndpoinst.Refresh, {
          withCredentials: true
        });
        const { accessToken, user } = response.data;

        

        sessionStorage.setItem('AccessToken', accessToken);
        sessionStorage.setItem('user', JSON.stringify(user));

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (error) {
        sessionStorage.clear();
        await api.get(ApiEndpoinst.Logout, { withCredentials: true });
      }
    }

    return Promise.reject(error);
  }
);

export default api;
