import axios, { AxiosError } from "axios";
import { BASE_URL } from "@env";
import reportError from "../utils/reportError";


// Set config defaults when creating the instance
export const network = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor
network.interceptors.request.use(
  (config) => {
    // intercept request and manipulate as the need be


   return config
  },
  (error: AxiosError) => {
    reportError(error?.response?.data as Error);
    return Promise.reject(error?.response?.data as Error);
  }
);
