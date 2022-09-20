import Login from "../login/login"
import { Routes, Route, Link } from "react-router-dom";
import {useContext ,useState} from 'react';
import { authGoogleContex } from "../contexts/authGoogle";
import {HiOutlineLogout} from 'react-icons/hi';
function MenuDescTop(){
    const {signed,logout,login,user } = useContext(authGoogleContex); 
    async function LoginGoogle(){
        await logout();
       }
    return(
        <nav id="primary_nav_wrap">
        <ul>
            <li className="current-menu-item" onClick={ () => LoginGoogle()}><a href="#">Sair</a></li>
            <li onClick={ () => LoginGoogle()}><HiOutlineLogout size={30}/></li>
        </ul>
    </nav>
    )
}
export default MenuDescTop