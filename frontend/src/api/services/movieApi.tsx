import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GenreOption, IMovie } from "../../config/interfaces";

export const movieApi = createApi({
  reducerPath: "movieApiPath",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://advanced-movie-search.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "b624eea4b3mshe20b387c3288c67p14b985jsnf4b50758b273"
      );
      headers.set("x-rapidapi-host", "advanced-movie-search.p.rapidapi.com");
      headers.set("useQueryString", "true");
      return headers;
    },
  }),
  tagTypes: ["Movies"],
  endpoints: (build) => {
    return {
      movie: build.query<IMovie, string>({
        query: (movieId) => `movies/getdetails?movie_id=${movieId}`,
        providesTags: (result) => [{ type: "Movies", id: result?.id }],
      }),
      movieByName: build.query<IMovie[], { name: string; page?: string }>({
        query: ({ name, page = "1" }) =>
          `search/movie?query=${name}&page=${page}`,
        providesTags: (result) =>
          result
            ? result.map((m) => ({ type: "Movies", id: m.id }))
            : ["Movies"],
      }),
      movieByGenre: build.query<
        IMovie[],
        { genre: GenreOption; page?: string }
      >({
        query: ({ genre, page = "1" }) =>
          `discover/movie?with_genres=${genre}&page=${page}`,
        providesTags: (result) =>
          result
            ? result.map((m) => ({ type: "Movies", id: m.id }))
            : ["Movies"],
      }),
    };
  },
});

export const { useMovieQuery, useMovieByGenreQuery, useMovieByNameQuery } =
  movieApi;
