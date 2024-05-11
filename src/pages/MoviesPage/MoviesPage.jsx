import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import { searchFilmList } from "../../api";
import Loader from "../../components/loader";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import MovieInput from "../../components/MovieInput/MovieInput";

export default function MoviesPage() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(false);
    const [params, setParams] = useSearchParams()

    const query = params.get("query") ?? "";
    const changeQuery = (newQuery) => {
        setParams({query: newQuery})
    }
    
   
    
    useEffect(() => {
        async function fetchData() {
            if(query === "") {return}
            try {
                setLoader(true);
                const searchData = await searchFilmList(query);
                setData(searchData);
            } catch {
                setError(true);
            } finally {
                setLoader(false);
            }
        }
        fetchData()
    }, [query]);
console.log(params)
   
    return (
        <div>
          < MovieInput onSumbit={changeQuery} />
            {loader && <Loader />}
            {error && <p>Error. Please try again.</p>}
            {data.length > 0 && <MovieList list={data} />}
        </div>
    );
}
