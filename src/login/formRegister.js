
import { BsGoogle, BsGithub, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { authGoogleContex } from "../contexts/authGoogle";
import {useContext ,useState} from 'react';
import {singInGoogle} from '../contexts/authGoogle'
function FormRegister() {
    const {signed,logout,login,user,register } = useContext(authGoogleContex);     
    const [registerEmail, setRegisterEmail] = useState("");
    const [nameRegister, setNameRegister] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    async function registerSenhaButton(){
        await register(registerEmail, registerPassword,nameRegister)
   }
    return (
        <>
            <form action="#" className="sign-up-form">
                <h2 className="title">Inscrever-se</h2>
                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username"nChange={(event) => {
                        setNameRegister(event.target.value)
                    }} />
                </div>
                <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Email"  onChange={(event) => {
                        setRegisterEmail(event.target.value)
                    }} />
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password"  onChange={(event) => {
                        setRegisterPassword(event.target.value)
                    }} />
                </div>
                <input type="submit" className="btn" value="Sign up" onClick={registerSenhaButton} />
                <p className="social-text">Ou Inscreva-se nas plataformas sociais </p>
                <div className="social-media">
                    <button className='social-icon'><BsTwitter size={25} /></button>
                    <button className='social-icon'><BsGithub size={25} /></button>
                    <button className='social-icon'> <BsGoogle size={25} /></button>
                    <button className='social-icon'><FaFacebookF size={25} /></button>

                </div>
            </form>

        </>
    )
}
export default FormRegister
