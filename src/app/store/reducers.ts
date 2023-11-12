import { combineReducers } from "@reduxjs/toolkit";

import { hotelsModel } from "entities/hotels";
import { themeModel } from "features/change-theme";

export const reducers = combineReducers({
  themeReducer: themeModel.reducer,
  hotelReducer: hotelsModel.reducer,
});
