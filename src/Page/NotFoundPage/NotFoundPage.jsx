import { Link } from "react-router-dom"
import css from "./NotFoundPage.module.css"
export default function NotFoundPage() {
    return <div>
        Ops page not found. Plis return to <Link to="/">Home page</Link >
    </div>
}
