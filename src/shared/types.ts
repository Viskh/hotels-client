import { type AsyncThunk } from "@reduxjs/toolkit";

export type InferAsyncThunkReturn<T extends AsyncThunk<any, any, any>> =
  T extends AsyncThunk<infer R, any, any> ? R : Promise<void>;

export type InferAsyncThunkParams<T extends AsyncThunk<any, any, any>> =
  T extends AsyncThunk<any, infer P, any> ? P : Promise<void>;

export type ResponseErrorBody = {
  message: string;
};
