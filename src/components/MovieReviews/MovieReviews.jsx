import { reviewsInfo } from "../../api"
import css from "./MovieReviews.module.css"

import { Outlet, useLocation, } from "react-router-dom"
import { useEffect, useState } from "react"
import Loader from "../../components/loader"
import ReviewsList from "../reviewsList/reviews"
export default function MovieReviews() {
    const location = useLocation()
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false)
    console.log(location)
    useEffect(() => {
        async function getInfo() {
            try {
                setLoader(true)
                const data = await  reviewsInfo(location.state.id)
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
        {data.length && <ReviewsList info={data} /> }
       <Outlet />
    </>
}