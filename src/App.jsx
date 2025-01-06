import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react';
import { useSelector } from "react-redux";
import './App.css'
// import Movies from './pages/MovieList'
// import MovieDetails from './pages/MovieDetails'
// import WatchList from './pages/WatchList'
// import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
// import Register from './components/Register'
// import Settings from "./pages/setting";

const Movies = React.lazy(() => import("./pages/MovieList"));
const MovieDetails = React.lazy(() => import("./pages/MovieDetails"));
const WatchList = React.lazy(() => import("./pages/WatchList"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Register = React.lazy(() => import("./components/Register"));
const Settings = React.lazy(() => import("./pages/Settings.jsx"));

function App() {
  const language = useSelector((state) => state.language.currentLanguage);

  return (
    <>
     <BrowserRouter>
     <div
        dir={language === "ar" ? "rtl" : "ltr"}
        className={language === "ar" ? "text-right" : "tet-left"}
      >
      <Navbar />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie-details/:id" element={<MovieDetails/>} />
          <Route path="/watch-list" element={<WatchList />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;