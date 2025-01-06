import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/slice/addtofev"; // Import actions

export default function MovieCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Use the dispatch hook
  const { movieItem } = props;
  const favoriteMovies = useSelector((state) => state.favoriteMovies); // Access favorite movies from Redux state

  const isFavorite = favoriteMovies.some((movie) => movie.id === movieItem.id); 

  const handleRedirectToDetails = (id) => {
    navigate(`/movie-details/${id}`);
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movieItem.id)); 
    } else {
      dispatch(addToFavorites(movieItem)); 
    }
  };

  return (
    <div className="card h-100">
      <img
        src={movieItem.poster_path ? `https://image.tmdb.org/t/p/w500${movieItem.poster_path}` : "default-image-url"}
        className="card-img-top"
        alt={movieItem.title || "No Image"}
      />

      <div className="card-body">
        <h5 className="card-title">{movieItem.original_title}</h5>
        <p className="card-text">{movieItem.release_date}</p>
        {movieItem.vote_average > 4.5 && <p>Rating: {movieItem.vote_average}</p>}

        <button
          className={`btn ${isFavorite ? "btn-danger" : "btn-light"}`} // Change button color based on favorite status
          style={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleToggleFavorite} // Toggle favorite on click
        >
          <i className={`bi bi-heart${isFavorite ? "-fill" : ""}`}></i> {/* Change icon to filled if favorite */}
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
