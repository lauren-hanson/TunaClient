import { Link } from "react-router-dom"


export const NavBar = () => {

    return (
        <ul className="navbar">
            <li className="navbar_item">
            <Link className="navbar_link" to="/">Home</Link>
            </li>
            <li className="navbar_item">
            <Link className="navbar_link" to="/artists">Artists</Link>
            </li>
            <li className="navbar_item">
            <Link className="navbar_link" to="/genres">Genres</Link>
            </li>
            <li className="navbar_item">
            <Link className="navbar_link" to="/songs">Songs</Link>
            </li>
        </ul>
    )
}
