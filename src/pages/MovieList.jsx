import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import axiosInstance from "../api/config";

export default function Movies() {
  const [movies, setMovies] = useState();
  const [searchMovie, setSearchMovie] = useState(""); 

  useEffect(() => {
    getMovies();
  }, []);
 
  const getMovies = (original_title = "") => {
    const data = original_title
      ? `/search/movie?query=${original_title}`
      : "/movie/popular"; 
    axiosInstance
      .get(data)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

  const handleSearch = () => { 
    if (searchMovie.trim() === "") {
      alert("Please enter vaild name");
    getMovies();
  } else {
    getMovies(searchMovie.trim());
  }
};
const handleReset=()=>{
  setSearchMovie("");
  getMovies();
};

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Welcome To Our Movies App</h1>
          <div className="col-12 mb-3 g-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
            />
            <button className="btn btn-primary mt-2" onClick={handleSearch}>
              Search
            </button>
            <button className="btn btn-secondary mt-2" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <h1>Popular Movies</h1>
      <div className="row row-cols-1 row-cols-md-4 g-1">
        {movies?.map((movie) => (
          <div className="col" key={movie.id}>
            <MovieCard movieItem={movie} searchMovie={searchMovie}/>
          </div>
        ))}
      </div>
    </>
  );
}