// src/redux/favoriteMoviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      return state.filter(movie => movie.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;
