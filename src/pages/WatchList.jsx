import { useSelector } from "react-redux";
import './../App.css';

const Watchlist = () => {
  const favoriteMovies = useSelector((state) => state.favoriteMovies); 

  return (
    <div className="watchlist-container">
      <h1>Your Watchlist</h1>
      <div className="movie-list">
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "default-image-url"} // Display the movie poster if available
                alt={movie.original_title}
                className="movie-card-img"
              />
              <h5>{movie.original_title}</h5>
              <p>{movie.release_date}</p>
            </div>
          ))
        ) : (
          <p>No movies in your watchlist yet!</p> 
        )}
      </div>
    </div>
  );
};

export default Watchlist;
