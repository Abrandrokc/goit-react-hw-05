import { Link, Outlet, NavLink, useLocation } from "react-router-dom"
import css from "./MovieInfo.module.css"
import { useRef } from "react"


export default function MovieInfo({ info }) {
   
    const location = useLocation()
     const backPath = useRef(location)
    console.log(location.state)
    
    
     const { genres, title, vote_average, overview, tagline, poster_path,id } = info;
    return <div>
       
       <Link to={`${location.state?.BackLink?.current?.pathname}?${location.state?.BackLink?.current?.search}`} >Go back</Link>
           
       <div>
          
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
            <div>
                <h2>{title}</h2>
               <h3>{tagline}</h3>
               <p> Rating: { vote_average}</p>
                <h3>overview</h3>
                <p>{overview}</p>
                <h3>genres</h3>
                <ul>
                   {genres.map(({ id, name }) => {
                    return   <li key={id}>{name}</li>
                   })}
                </ul>
            </div>
            <p>Additional information</p>
            <ul>
                <li>
                    <NavLink to="reviews" state={{ id, backPath }}>Reviews</NavLink>
                    <NavLink to="cast" state={ { id, backPath   }}>Cast</NavLink>
               </li>
               
            </ul>
            <Outlet />
        </div>
        

    </div>
}