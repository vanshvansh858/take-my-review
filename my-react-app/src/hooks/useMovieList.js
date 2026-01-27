import { useState } from "react";

function useMovieList(initial=[]){
    const [movies , setMovies] = useState(initial)
    function setMovieList(movie){
        setMovies(movie)
    }
    return {movies,setMovieList}
}

export default useMovieList