import { combineReducers } from "@reduxjs/toolkit";

import { themeModel } from "features/change-theme";

export const reducers = combineReducers({
  themeReducer: themeModel.reducer,
});
