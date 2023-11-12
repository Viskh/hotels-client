import { useAppSelector } from "shared/hooks";

import {
  selectAll,
  selectLoading,
  selectPageTotal,
  selectSearch,
} from "../selectors";

export const useSelectHotels = () => useAppSelector(selectAll);

export const useSelectSearch = () => useAppSelector(selectSearch);

export const useSelectLoading = () => useAppSelector(selectLoading);

export const useSelectPageTotal = () => useAppSelector(selectPageTotal);
