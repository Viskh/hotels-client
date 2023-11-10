import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: "",
};

const slice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {},
});

export const { reducer, actions } = slice;
