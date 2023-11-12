import { createAsyncThunk } from "@reduxjs/toolkit";

import { getHotels, GetHotelsParams } from "shared/api";

export const getHotelsAsync = createAsyncThunk(
  "hotels/fetch",
  async ({ query }: GetHotelsParams) => {
    return await getHotels({
      query,
    });
  },
);
