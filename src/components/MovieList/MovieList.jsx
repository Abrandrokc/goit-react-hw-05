import { NavLink, useLocation } from "react-router-dom"
import css from "./MovieList.module.css"
import { useRef } from "react";

export default function MovieList({list} ) {
   const location = useLocation()
   
   
    console.log(location)
    return (
        <ul >
            {list.map(({id, title}) => (
                <li key={id}>
                    <NavLink to={`/movies/${id}`} state={ location}>{title}</NavLink>
                </li>
            ))}
        </ul>
    );
}