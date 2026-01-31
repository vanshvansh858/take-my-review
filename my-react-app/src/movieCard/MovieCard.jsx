import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.png"
import "./MovieCard.css";

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : placeholder;

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <div className="poster-wrapper">
        <img src={posterUrl} alt={movie.title} />
        <div className="rating-badge">
          ⭐ {movie.vote_average?.toFixed(1)}
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.slice(0, 4)}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
