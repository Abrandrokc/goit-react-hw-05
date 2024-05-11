import { Link, Outlet, NavLink, useLocation } from "react-router-dom"
import css from "./MovieInfo.module.css"
import { useRef } from "react"
import clsx from "clsx";


export default function MovieInfo({ info }) {
       const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
}
    const location = useLocation()
     const backPath = useRef(location.state)
    console.log(location)
    
    
     const { genres, title, vote_average, overview, tagline, poster_path } = info;
    return <div >
        
        {backPath.current  && <Link to={`${backPath.current.pathname}${backPath.current.search}`} className={css.goBack} >Go back</Link> }
       
           
       <div className={css.div}>
          
           
            <div className={css.list}>
                <div> <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} /></div>
               <div className={css.info}> <h2>{title}</h2>
               <h3>{tagline}</h3>
               <p> Rating: { vote_average}</p>
                <h3>overview</h3>
                <p>{overview}</p>
                <h3>genres</h3>
                <ul>
                   {genres.map(({ id, name }) => {
                    return   <li key={id}>{name}</li>
                   })}
                </ul></div>
            </div>
            <p>Additional information</p>
            <ul>
                <li>
                    <NavLink to="reviews" state={  backPath } className={buildLinkClass}>Reviews</NavLink>
                    
               </li>
               <li><NavLink to="cast" state={  backPath   } className={buildLinkClass}>Cast</NavLink></li>
            </ul>
            <Outlet />
        </div>
        

    </div>
}