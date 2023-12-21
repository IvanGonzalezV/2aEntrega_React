import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul className="nav-ul">
                <li className="li">Home</li>
                <li className="li">Categories</li>
                <li className="li">Contact</li>
                <li className="Nav"><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default NavBar