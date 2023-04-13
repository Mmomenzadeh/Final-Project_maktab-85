import axios from "axios";
import { BASE_URL } from "Config";

export const HttpService = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

const refreshTokenFunc = async () => {
  try {
    HttpService.defaults.headers.refreshToken =
      localStorage.getItem("refreshToken");
    const response = await HttpService.post("/auth/refresh-token");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

HttpService.interceptors.request.use((req) => {

  if (req.url === "/auth/refresh-token") {
    
    const token = localStorage.getItem("refreshToken");
    req.headers.refreshToken = token;
  } else if (req.url !== "/auth/login") {
    console.log(req.url);
    const token = localStorage.getItem("accessToken");
    req.headers.token = token;
  }
  return req;
});

// instance.interceptors.request.use(
//   config => {
//       const authToken = localStorage.getItem('token');
//       ///اگر توکن داشتیم
//       if (authToken !== undefined) {
//           // همون accesstoken
//           config.headers.token = authToken;
//           config.timeout = 800000;
//       }
//       return config;
//   }, (err) => {
//       return Promise.reject(err);
//   }
// );

HttpService.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    const originalRequest = error.config;
    console.log(originalRequest);

    /// اینجا باید دوباره لاگین انجام بدیم
    if (
      error.response.status === 401 &&
      originalRequest.url === "/auth/refresh-token"
    ) {
      return Promise.reject(error);
    }


    console.log("originalRequest._retry");

    if (!originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await refreshTokenFunc()
          .then((res) => {
            localStorage.setItem("accessToken", res.accessToken);
            return res;
          })
          .catch((err) => console.log(err));

        const res = await axios.request(originalRequest);
        return Promise.resolve(res);
      } catch (error) {
        return error.message;
      }
    }
  }
);

// try {
//   // const res = await axios.request(originalRequest);
//   return Promise.resolve(res);
// } catch (e) {}
