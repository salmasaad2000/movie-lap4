import { configureStore } from "@reduxjs/toolkit";
import favoriteMoviesSlice from './slice/addtofev';
import languageSlice from "./slice/language";


export default configureStore({
  reducer:{
    favoriteMovies : favoriteMoviesSlice,
    language : languageSlice,
  }
})
