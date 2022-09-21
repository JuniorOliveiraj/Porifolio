import { Link } from "react-router-dom";
import { BsGoogle, BsGithub, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {useContext ,useState} from 'react';
import { authGoogleContex } from "../contexts/authGoogle";
import {singInGoogle} from '../contexts/authGoogle'
function FormLogin() {
    const {signed,logout,login,user,LoginSenha } = useContext(authGoogleContex); 
    async function LoginGoogle(){
        await login();
   }

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    async function LoginSenhaButton(){
         await LoginSenha(loginEmail, loginPassword)
    }
    async function sair(){
        await logout()
    }
    
    return (
        <>
            <form action="#" className="sign-in-form">
                <h2 className="title">Entrar.</h2>
                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="email" placeholder="Email" onChange={(event) => {
                        setLoginEmail(event.target.value)

                    }} />
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" onChange={(event) => {
                        setLoginPassword(event.target.value)

                    }} />
                </div>
                <input type="submit" className="btn" value="Login" onClick={LoginSenhaButton} />
                <p className="social-text">Ou Inscreva-se nas plataformas sociais</p>
                {user?.email}
                <div className="social-media">
                    <button className='social-icon'><BsTwitter size={25} /></button>
                    <button className='social-icon'><BsGithub size={25} /></button>
                    <button className='social-icon' onClick={ () => LoginGoogle()} > <BsGoogle size={25}  /></button>
                    <button className='social-icon' onClick={ () => sair()}  ><FaFacebookF  size={25} /></button>
                </div>
            </form>
        </>
    )
}
export default FormLogin