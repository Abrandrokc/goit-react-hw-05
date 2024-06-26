import { NavLink } from "react-router-dom"
import css from "./Navigation.module.css"
import clsx from "clsx";
export default function Navigation() {
    const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
}
    return <div className={css.navigation}><NavLink to="/" className={buildLinkClass}>Home</NavLink>
    <NavLink to="/movies" className={buildLinkClass}>Films</NavLink></div>
    
}