import { NavLink, useLocation } from "react-router-dom"
import css from "./MovieList.module.css"
import { useRef } from "react";

export default function MovieList({list} ) {
   const location = useLocation()
   const BackLink= useRef(location)
    console.log(location)
    return (
        <ul >
            {list.map(({id, title}) => (
                <li key={id}>
                    <NavLink to={`/movies/${id}`} state={{id: id, BackLink}}>{title}</NavLink>
                </li>
            ))}
        </ul>
    );
}