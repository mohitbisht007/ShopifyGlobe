import { useEffect, useState } from "react"

const useFetch = (api) => {
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

   useEffect(() => {

    const fetchData = async ()=> {
        try {
            const res = await fetch(api)
            if(!res.ok) throw new Error("Fetching Failed")
            const result = await res.json()
            setData(result)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    fetchData()

   }, [api])

   return {data, error , loading}
}

export default useFetch