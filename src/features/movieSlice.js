import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
  },
  reducers: {
    getMovies: (state, action) => {
      let arr = [...state.movies, ...action.payload];
      state.movies = arr.filter(
        (ele, ind) =>
          ind ===
          arr.findIndex((elem) => elem.id === ele.id && elem.id === ele.id)
      );
      //   state.movies.concat(action.payload);
    },
  },
});

export const { getMovies } = movieSlice.actions;

export const selectMovie = (state) => state.movies.movies;

export default movieSlice.reducer;
