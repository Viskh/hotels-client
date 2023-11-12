import { type AsyncThunk } from "@reduxjs/toolkit";

export type InferAsyncThunkReturn<T extends AsyncThunk<any, any, any>> =
  T extends AsyncThunk<infer R, any, any> ? R : Promise<void>;

export type InferAsyncThunkParams<T extends AsyncThunk<any, any, any>> =
  T extends AsyncThunk<any, infer P, any> ? P : Promise<void>;

export type ResponseErrorBody = {
  message: string;
};

export type MergeElementProps<
  T extends React.ElementType,
  P extends object = {},
> = Omit<React.ComponentPropsWithRef<T>, keyof P> & P;

export type Loading = "loading" | "success";
