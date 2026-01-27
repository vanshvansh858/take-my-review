import { useState } from "react";

function useCategory(){
    const [category, setCategory] = useState("")
    function fetch (input){
        setCategory(input)
    }
    return{fetch,category}
}

export default useCategory