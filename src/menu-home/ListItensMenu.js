
import {app} from '../firebase'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {FaUserCircle} from 'react-icons/fa';
import {useContext ,useState} from 'react';
import { authGoogleContex } from "../contexts/authGoogle";
function ListItensMenu (){
    const {signed,logout,login,user,LoginSenha } = useContext(authGoogleContex); 
    async function sair(){
        await logout()
    }
    return(
        <div className="nav">
        <div className ="nav__content">
            <ul className="nav__list">
               
               <li className="nav__list-item "><span className='hover-target'onClick={()=>sair()} > <div>{user?.email} </div><FaUserCircle size={42}/></span> </li> 
                <li className="nav__list-item active-nav"><span className='hover-target'>home </span></li>
                <li className="nav__list-item"><span className='hover-target'>studio </span> </li>
                <li className="nav__list-item"><span className='hover-target'>news </span></li>
                <li className="nav__list-item"><span className='hover-target'>contact </span></li>
               {/* <li className="nav__list-item"><a className="hover-target"  onClick={()=> app.auth().signOut()}> sair</a></li>*/}
            </ul>
        </div>
    </div>	
    )
}
export default ListItensMenu
const iconeMenu = styled.a`
height: 46px; 
width: 46px; 
display: flex; 
justify-content: center; 
align-items: center; 
margin: 0 0.45rem; 
color: #333; 
border-radius: 50%; 
border: 1px solid #333; 
text-decoration: none; 
font-size: 1.1rem; 
transition: 0.3s;
padding-bottom: 10px;
`;