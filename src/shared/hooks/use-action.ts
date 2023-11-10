import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { type ActionCreatorWithPayload } from "@reduxjs/toolkit";

export const useAction = <P>(action: ActionCreatorWithPayload<P>) => {
  const dispatch = useDispatch();

  return useCallback((payload?: P) => {
    dispatch(action(payload as P));
  }, []);
};
