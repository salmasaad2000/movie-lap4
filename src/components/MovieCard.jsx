import React from "react";
import { useNavigate } from "react-router";

export default function MovieCard(props) {
  const navigate = useNavigate();
  const { movieItem } = props;

  const handleRedirectToDetails = (id) => {
    navigate(`/movie-details/${id}`);
  };

  return (
    <div className="card h-100">
      <img
        src={movieItem.poster_path ? `https://image.tmdb.org/t/p/w500${movieItem.poster_path}` : "default-image-url"}
        className="card-img-top"
        alt={movieItem.title || "No Image"}
      />
      <img/>
 

      <div className="card-body">
        <h5 className="card-title">{movieItem.original_title }</h5>
        <p className="card-text">{movieItem.release_date }</p>
        {movieItem.vote_average > 4.5 && <p>Rating: {movieItem.vote_average}</p>}
        <button className="btn btn-light" style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <i className="bi bi-heart"></i>
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleRedirectToDetails(movieItem.id)}
        >
          View
        </button>
      </div>
    </div>
  );
}