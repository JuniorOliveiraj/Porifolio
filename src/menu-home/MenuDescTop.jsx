import Login from "../login/login"
import { Routes, Route, Link } from "react-router-dom";
import {useContext ,useState} from 'react';
import { authGoogleContex } from "../contexts/authGoogle";

function MenuDescTop(){
    const {signed,logout,login,user } = useContext(authGoogleContex); 
    async function LoginGoogle(){
        await logout();
       }
    return(
        <nav id="primary_nav_wrap">
        <ul>
            <li className="current-menu-item"><a href="#">Home</a></li>
            <li onClick={ () => LoginGoogle()}>Contact Us </li>
        </ul>
    </nav>
    )
}
export default MenuDescTop