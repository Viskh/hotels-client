import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { type AsyncThunk, unwrapResult } from "@reduxjs/toolkit";

import {
  type InferAsyncThunkParams,
  type InferAsyncThunkReturn,
  type ResponseErrorBody,
} from "../types";

export type UseThunkConfig<
  D,
  E extends ResponseErrorBody = ResponseErrorBody,
> = {
  onError: (error: E) => void;
  onSuccess?: (data: D) => void;
  onFinally?: () => void;
};

export const useThunk = <
  T extends AsyncThunk<any, any, any> = AsyncThunk<any, any, any>,
>(
  thunk: T,
) => {
  const dispatch = useDispatch<AppDispatch>();

  return useCallback(
    async (
      params: InferAsyncThunkParams<T>,
      {
        onError,
        onSuccess,
        onFinally,
      }: UseThunkConfig<InferAsyncThunkReturn<T>, ResponseErrorBody>,
    ): Promise<InferAsyncThunkReturn<T>> => {
      return await dispatch(thunk(params))
        .then((data) => {
          const result = unwrapResult(data);
          onSuccess?.(result);
          return result;
        })
        .catch((error: unknown) => {
          onError(error as ResponseErrorBody);
        })
        .finally(onFinally);
    },
    [],
  );
};
