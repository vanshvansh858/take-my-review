import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import useMovieList from "../hooks/useMovieList";
import useLoading from "../hooks/useLoading";
import LoadingSkeleton from "../comopents/loading";
import MovieCard from "../movieCard/MovieCard";
import useCategory from "../hooks/useCategory";
import "./Homepage.css"

function Home() {
  const { search } = useOutletContext();
  const { loading, setLoading } = useLoading();
  const { movies, setMovieList } = useMovieList([]);
  const {category, setCategory} = useCategory()
  console.log(category)
  const CATEGORY_URLS = {
  popular: "https://api.themoviedb.org/3/movie/popular",
  top_rated: "https://api.themoviedb.org/3/movie/top_rated",
  upcoming: "https://api.themoviedb.org/3/movie/upcoming",
  trending: "https://api.themoviedb.org/3/trending/movie/week",
  };
  const url = CATEGORY_URLS[category];
  console.log(url)

  useEffect(()=>{
    async function categoryRender() {
      try{
        const res = await fetch(url)
      }catch(e){
        console.log(e)
      }
    } categoryRender()
  },[category])
  useEffect(() => {
    if (!search) return;

    async function getMovies() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=cc2c5449ca6cedb1104dacd9a99edca5`
        );
        const data = await res.json();
        setMovieList(data.results);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, [search]);

  return (
    <div className="movie-list">
      {loading ? (
        <>
          <LoadingSkeleton />
          <LoadingSkeleton />
        </>
      ) : (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      )}
    </div>
  );
}

export default Home;
