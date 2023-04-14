import axios from "axios";
import { BASE_URL } from "Config";

export const HttpService = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});


HttpService.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken !== undefined) {
      config.headers.token = accessToken;
      config.timeout = 800000;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

/////--------------------------------------------

let isSent = false;

HttpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {
      response: { status },
    } = error;

    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest.url === "/auth/refresh-token"
    ) {
      return Promise.reject(error);
    }


    if (status === 401) {
      if(!isSent && error.config.url !== "/auth/refresh-token"){
        isSent = true      
        HttpService.defaults.headers.refreshToken = localStorage.getItem("refreshToken");
        HttpService.post("/auth/refresh-token").then(({ data }) => {
          const { accessToken } = data;
          localStorage.setItem("accessToken", accessToken);
        });
      }
    } else {
      return Promise.reject(error);
    }
  }
);




