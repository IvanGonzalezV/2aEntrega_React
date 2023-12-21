import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul>
                <li>Categories</li>
                <li>Contact</li>
                <li>Location</li>
                <li className="Nav"><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default NavBar