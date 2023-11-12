import { apiGet } from "../../../methods";
import { getUrl } from "../get-url";

import { Hotel } from "../types";

type GetHotelsQuery = {
  name?: string;
  country?: string;
  city?: string;
  stars?: string;
  page?: number;
  limit?: number;
};

export type GetHotelsParams = {
  query: GetHotelsQuery;
};

export type GetHotelsParamsResponse = {
  data: Hotel[];
  pageTotal: number;
};

export const getHotels = async ({ query }: GetHotelsParams) => {
  return await apiGet<GetHotelsParamsResponse>({
    url: getUrl(),
    params: query,
  });
};
