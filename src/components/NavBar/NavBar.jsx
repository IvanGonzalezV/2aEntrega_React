import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul className="nav-ul">
                <li className="li"><Link to="/">Home</Link></li>
                <li className="li"><Link to="/Categories">Categories</Link></li>
                <li className="li"><Link to="/Contact">Contact</Link></li>
                <li className="Nav"><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default NavBar