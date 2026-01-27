import { Link } from "react-router-dom";
import './MovieCard.css'
function MovieCard({movie}){
    const posterUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
    return(
        <div className="movie-card">
            <img src={posterUrl} alt={movie.title} />
            <Link to={`/movie/${movie.id}`} className="card-link">
                <h3>{movie.title}</h3>
            </Link>
        </div>
    )
}

export default MovieCard