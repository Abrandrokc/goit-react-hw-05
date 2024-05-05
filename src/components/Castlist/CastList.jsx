import { Outlet } from "react-router-dom"
import css from "./CastList.module.css"
export default function CastList({ info }) {
    console.log(info)
    return (
        <ul>
            {info.map(({ name, character, profile_path, id }) => (
                <li key={id}>
                    <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} />
                    <h2>{name}</h2>
                    <h3>{character}</h3>
                </li>
            ))}
            <Outlet />
        </ul>
    );
}