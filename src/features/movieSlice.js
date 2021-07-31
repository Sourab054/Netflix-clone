import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
  },
  reducers: {
    getMovies: (state, action) => {
      state.movies = [...state.movies, ...action.payload];
      //   state.movies.concat(action.payload);
    },
  },
});

export const { getMovies } = movieSlice.actions;

export const selectMovie = (state) => state.movies.movies;

export default movieSlice.reducer;
