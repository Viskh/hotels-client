import axios from "axios";

import { getErrorInterceptor } from "./get-error";

const getHeaders = () => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  return headers;
};

const getApiUrl = () => {
  return process.env.BACKEND_URL;
};

export const instance = axios.create({
  baseURL: getApiUrl(),
  responseType: "json",
  headers: getHeaders(),
});

getErrorInterceptor(instance);
