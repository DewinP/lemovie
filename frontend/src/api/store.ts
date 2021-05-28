import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { movieApi } from "./services/movieApi";
import { api } from "./services/api";
export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, movieApi.middleware, api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
