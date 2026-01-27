import { useState } from "react";

function useSearch (initial=""){
    const [search , setSearch] = useState(initial)
    function find (movie){
        setSearch(movie)
    }
    return{find,search}
}

export default useSearch