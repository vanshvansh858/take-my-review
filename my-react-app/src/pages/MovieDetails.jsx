import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useLoading from "../hooks/useLoading";
import LoadingSkeleton from "../comopents/loading";
import { Link } from "react-router-dom";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const { loading, setLoading } = useLoading();
  const [movies, setMovie] = useState();

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);

      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=cc2c5449ca6cedb1104dacd9a99edca5`
      );
      const data = await res.json();

      setMovie(data);
      setLoading(false);
    }

    fetchMovie();
  }, [id]);

  return (
    <div>
        <div className="movie-details">
        {loading ? (
        <>
          <LoadingSkeleton />
          <LoadingSkeleton />
        </>
      ) : (
        movies && (
          <div className="movie-wrapper">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`}
              alt={movies.title}
            />

            <div className="movie-info">
              <h1>{movies.title}</h1>

              <p className="movie-tag">
                {movies.adult ? "18+" : "Family Friendly"} * {movies.runtime} min
              </p>

              <p className="movie-overview">{movies.overview}</p>

              <div className="movie-genres">
                {movies.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>
              <Link key={movies.id} to={`/movie/${movies.id}/videos`}>
                <button className="trailer-btn">Watch Trailer</button>
              </Link>
            </div>
          </div>
        )
      )}
        </div>
    </div>
  );
}

export default MovieDetails;



