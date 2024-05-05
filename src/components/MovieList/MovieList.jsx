import { NavLink } from "react-router-dom"
import css from "./MovieList.module.css"

export default function MovieList({list} ) {
    

    return (
        <ul >
            {list.map(({id, title}) => (
                <li key={id}>
                    <NavLink to={`/movies/${id}`} state={id}>{title}</NavLink>
                </li>
            ))}
        </ul>
    );
}