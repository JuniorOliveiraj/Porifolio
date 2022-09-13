import { BsGoogle, BsGithub, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import {AuthGoogle} from '../contexts/authGoogle'

function FormRegister() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            )
          
        } catch (error) {
            console.log(error.message)
        }

    }




  

    return (
        <>
            <form action="#" className="sign-up-form">
                <h2 className="title">Inscrever-se</h2>
                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Email" onChange={(event) => {
                        setRegisterEmail(event.target.value)

                    }} />
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" onChange={(event) => {
                        setRegisterPassword(event.target.value)

                    }} />
                </div>
                <input type="submit" className="btn" value="Sign up" onClick={register} />
                <p className="social-text">Ou Inscreva-se nas plataformas sociais</p>
                <div className="social-media">
                    <button className='social-icon'><BsTwitter size={25} /></button>
                    <button className='social-icon'><BsGithub size={25} /></button>
                    <button className='social-icon'> <BsGoogle size={25}  /></button>
                    <button className='social-icon'><FaFacebookF  size={25} /></button>
                  
                </div>
            </form>

        </>
    )
}
export default FormRegister
