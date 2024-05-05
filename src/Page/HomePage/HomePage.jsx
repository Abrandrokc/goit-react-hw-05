import { useEffect } from "react"
import css from "./HomePage.module.css"
import { useState } from "react"
import { popularFilmList } from "../../api"
import Loader from "../../components/loader"
import MovieList from "../../components/MovieList/MovieList"

export default function HomePage() {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        async function getList() {
            try {
                setLoader(true)
                const data = await popularFilmList()
                setData(data)
            }
            catch {setError(true) }
            finally {
                setLoader(false)
                
            }
         }
        getList()
    }, [])
    
    return <>
        {loader && <Loader />}
        {error && <p>Error. Try agan</p>}
        {data.length > 0 && <MovieList list={data} /> }
    </>
    
}