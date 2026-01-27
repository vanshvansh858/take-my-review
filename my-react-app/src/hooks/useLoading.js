import { useState } from "react";

function useLoading(initial){
    const [loading, setLoading] = useState(initial)
    return {loading, setLoading}
}

export default useLoading