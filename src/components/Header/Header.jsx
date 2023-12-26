import "./Header.css";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

const Header = (props) => {
    console.log(props)
    return (
        <div className="Header">
            <Link to="/">
                <img src={logo} alt="brand_logo" />
            </Link>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

export default Header