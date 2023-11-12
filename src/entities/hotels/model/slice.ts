import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { Hotel } from "shared/api";

import { getHotelsAsync } from "./thunks";

type InitialState = {
  search: string;
  loading: boolean;
  pageTotal: number;
  hotels: Hotel[];
};

export const adapter = createEntityAdapter<Hotel>({
  selectId: (hotel) => hotel._id,
});

const initialState = adapter.getInitialState<InitialState>({
  search: "",
  loading: false,
  pageTotal: 1,
  hotels: [],
});

const slice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setSearch: (state, { payload }: PayloadAction<InitialState["search"]>) => {
      state.search = payload;
    },

    setPageTotal: (
      state,
      { payload }: PayloadAction<InitialState["pageTotal"]>,
    ) => {
      state.pageTotal = payload;
    },

    resetState: () => initialState,
  },
  extraReducers(builder) {
    builder.addCase(getHotelsAsync.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      getHotelsAsync.fulfilled,
      (
        state,
        {
          payload: { data, pageTotal },
          meta: {
            arg: {
              query: { page },
            },
          },
        },
      ) => {
        if (page === 1) {
          adapter.setAll(state, data);
        } else {
          adapter.addMany(state, data);
        }

        state.pageTotal = pageTotal;
        state.loading = false;
      },
    );
  },
});

export const { reducer, actions } = slice;
