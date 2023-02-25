import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ArtistDetails, SearchResponse, Song, Track } from "common/interfaces";

export const shazamCoreAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key","7212f97d63mshc5f502f527e713cp133503jsne058b7a2ed29"        
      );
      headers.set("X-RapidAPI-Host", "shazam-core.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWorldCharts: builder.query<Array<Track>, void>({
      query: () => "/charts/world",
    }),
    getSongsByGenre: builder.query<Array<Track>, string>({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongsBySearch: builder.query<SearchResponse, string>({
      query: (searchTerm) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
    getArtistDetails: builder.query<ArtistDetails, string>({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
    getSongsByCountry: builder.query<Array<Track>, string>({
      query: (countryCode) => `/charts/country?country_code=${countryCode}`,
    }),
    getSongDetails: builder.query<Track, string>({
      query: (songId) => `/tracks/details?track_id=${songId}`,
    }),
    getRelatedSongs: builder.query<Array<Song>, string>({
      query: (songId) => `/tracks/related?track_id=${songId}`,
    }),
  }),
});

export const {
  useGetWorldChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
} = shazamCoreAPI;
