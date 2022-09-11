import Login from "../login/login"
import { Routes, Route, Link } from "react-router-dom";
function MenuDescTop(){
    return(
        <nav id="primary_nav_wrap">
        <ul>
            <li className="current-menu-item"><a href="#">Home</a></li>
            <li><Link to="Login">Contact Us</Link> </li>
        </ul>
    </nav>
    )
}
export default MenuDescTop