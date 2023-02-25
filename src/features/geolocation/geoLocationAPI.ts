import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GeoLocation } from "common/interfaces";

export const geoLocationAPI = createApi({
  reducerPath: "geoLocation",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.ipgeolocation.io",
  }),
  endpoints: (builder) => ({
    getGeoLocation: builder.query<GeoLocation, void>({
      query: () => `/ipgeo?apiKey=67c3fcf9b74b43249039daf555266348`,
    }),
  }),
});

export const { useGetGeoLocationQuery } = geoLocationAPI;
