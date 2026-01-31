import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSkeleton from "../comopents/loading";
import useLoading from "../hooks/useLoading";
import "./Trailer.css";

function Trailer() {
  const { id } = useParams();
  const [trailerKey, setTrailerKey] = useState(null);
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    async function getTrailer() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=cc2c5449ca6cedb1104dacd9a99edca5`
        );
        const data = await res.json();
        console.log(data)

        const trailer = data.results.find(
          video => video.type === "Trailer" && video.site === "YouTube"
        );
        setTrailerKey(trailer ? trailer.key : null);
      } catch (err) {
        console.error(err);
        setTrailerKey(null);
      } finally {
        setLoading(false);
      }
    }

    getTrailer();
  }, [id]);

  return (
    <div className="trailer-page">
      {loading ? (
        <>
          <LoadingSkeleton />
          <LoadingSkeleton />
        </>
      ) : trailerKey ? (
        <iframe
          className="trailer-frame"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Movie Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
}

export default Trailer;
