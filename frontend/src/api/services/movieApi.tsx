import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "../../config/constants";
import { GenreOption, IMovie } from "../../config/interfaces";

export const movieApi = createApi({
  reducerPath: "movieApiPath",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  tagTypes: ["Movies"],
  endpoints: (build) => {
    return {
      movie: build.query<IMovie, string>({
        query: (movieId) => `movie/${movieId}?api_key=${API_KEY}`,
        providesTags: (result) => [{ type: "Movies", id: result?.id }],
      }),
      searchMovie: build.query<IMovie[], { name: string; page?: string }>({
        query: ({ name, page = "1" }) =>
          `search/movie?api_key=${API_KEY}&query=${name}&page=${page}&include_adult=false`,
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
          `discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=${page}`,
        providesTags: (result) =>
          result
            ? result.map((m) => ({ type: "Movies", id: m.id }))
            : ["Movies"],
      }),
    };
  },
});

export const { useMovieQuery, useMovieByGenreQuery, useSearchMovieQuery } =
  movieApi;
