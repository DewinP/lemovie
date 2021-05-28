import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IVote } from "../../config/interfaces";

export const api = createApi({
  reducerPath: "apiPath",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
  }),
  tagTypes: ["Vote"],
  endpoints: (build) => {
    return {
      getVotes: build.query<IVote, string>({
        query: (movieId) => `movie/${movieId}`,
        providesTags: (result, error, args) => {
          console.log(
            "=============++++++=============",
            result?.movieId,
            args
          );
          return [{ type: "Vote", id: args }];
        },
      }),
      createVotes: build.mutation<IVote, string>({
        query: (movieId) => ({
          url: `add/${movieId}`,
          method: "POST",
          body: { movieId },
        }),
        invalidatesTags: (result) => [{ type: "Vote", id: result!.movieId }],
      }),
      upvoteVotes: build.mutation<IVote, string>({
        query: (movieId) => ({
          url: `upvote`,
          method: "PATCH",
          body: { movieId },
        }),
        invalidatesTags: (result) => [{ type: "Vote", id: result!.movieId }],
      }),
      downvoteVotes: build.mutation<IVote, string>({
        query: (movieId) => ({
          url: "downvote",
          method: "PATCH",
          body: { movieId },
        }),
        invalidatesTags: (result) => [{ type: "Vote", id: result?.movieId }],
      }),
    };
  },
});

export const {
  useCreateVotesMutation,
  useDownvoteVotesMutation,
  useUpvoteVotesMutation,
  useGetVotesQuery,
} = api;
