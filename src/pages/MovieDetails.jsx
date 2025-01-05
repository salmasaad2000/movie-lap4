import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../api/config";

export default function MovieDetails() {
  const [movie, setMovies] = useState();
  const params = useParams();
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  const genreColors = {
    Action: "#FF5733",
    Adventure: "#4CAF50",
    Drama: "#2196F3",
    Comedy: "#FFEB3B",
    Romance: "#E91E63",
    Horror: "#9C27B0",
    Animation: "#9C27B0",
    Thriller: "#8B0000",  
    Fantasy: "#800080",   
    'Science Fiction': "#00BFFF", 
  };
    return (
    <>
      {movie ? (
        <div className="row ">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              className="img-fluid rounded"
              style={{
                width: "100%",
                marginRight: "20px",
                borderRadius: "10px",
              }}
            />
          </div>

          <div className="col-md-8 align-items-center">
            <h2>{movie.original_title}</h2>
            <div className="genres">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  style={{
                    backgroundColor: genreColors[genre.name] || "#888",
                    color: "#fff",
                    padding: "5px 10px",
                    marginRight: "10px",
                    borderRadius: "20px",
                    fontSize: "14px",
                  }}
                >
                  {genre.name}
                </span>
              ))}
            </div> 
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
                     </div>
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </>
    
  );
}