import { type EntityId } from "@reduxjs/toolkit";

export const getUrl = () => "/hotels";

export type GetUrlByIdParams = {
  hotelId: EntityId;
};
export const getUrlById = ({ hotelId }: GetUrlByIdParams) =>
  `${getUrl()}/${hotelId}`;
