import { useThunk } from "shared/hooks";

import { getHotelsAsync } from "../thunks";

export const useGetHotels = () => useThunk(getHotelsAsync);
