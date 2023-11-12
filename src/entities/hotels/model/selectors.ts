import { adapter } from "./slice";

export const selectState = ({ hotelReducer }: GlobalState) => hotelReducer;

export const selectHotels = (state: GlobalState) => selectState(state).hotels;

export const selectSearch = (state: GlobalState) => selectState(state).search;

export const selectLoading = (state: GlobalState) => selectState(state).loading;

export const selectPageTotal = (state: GlobalState) =>
  selectState(state).pageTotal;

export const { selectAll, selectById } = adapter.getSelectors(selectState);
