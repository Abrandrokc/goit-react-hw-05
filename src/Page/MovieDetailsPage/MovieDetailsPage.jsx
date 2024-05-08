import { useLocation, useParams, } from "react-router-dom"
import css from "./MovieDetailsPage.module.css"
import {filmInfo} from "../../api"
import MovieInfo from "../../components/Movieinfo/MovieInfo"
import { useEffect, useState } from "react"
import Loader from "../../components/loader"
export default function MovieDetailsPage() {
    
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false)
    const ids = useParams()
    
    useEffect(() => {
        async function getInfo() {
            try {
                setLoader(true)
                const data = await  filmInfo(ids.movieId)
                setData(data)
            }
            catch {setError(true) }
            finally {
                setLoader(false)
                
            }
         }
        getInfo()
    }, [])
    
    return <>
        {loader && <Loader />}
        {error && <p>Error. Try agan</p>}
        
        {data.id && <MovieInfo info={data} />}
    </>
    
}