import css from "./MovieCast.module.css"
import { useLocation, } from "react-router-dom"
import {castInfo} from "../../api"
import { useEffect, useState } from "react"
import Loader from "../../components/loader"
import CastList from "../Castlist/CastList"
export default function MovieCast() {
      const location = useLocation()
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false)
  console.log(location)
    
    useEffect(() => {
        async function getInfo() {
            try {
                setLoader(true)
                const data = await  castInfo(location.state.id)
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
        {data.length && <CastList info={data} />}
       
    </>
}