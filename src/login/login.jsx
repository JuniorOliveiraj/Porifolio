import './styleLogin.css'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import FormLogin from './FormLogin';
import FormRegister from './formRegister';
import { useState } from 'react';
import {useContext} from 'react';
import { authGoogleContex } from "../contexts/authGoogle";
function Login() {
       
        const [active, setModel] = useState(false)
        const toggleModel = () => {
            setModel(!active)
        }
        const toggleModel2 = () => {
            setModel(!active)
        }
        const {singInGoogle,signed} = useContext(authGoogleContex); 
        console.log(signed, 'login')
        if(!signed){
            
        
        return (
            <section  >

                <div className={active ? "container sign-up-mode " : 'container'}>
                    <div className="forms-container">
                        <div className="signin-signup">
                            <FormLogin />
                            <FormRegister />
                        </div>
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>Novo aqui?</h3>
                                <p>
                                    é apenas um portifoio usa firebase do Google por isso o login cadastre-se pra ver mais.
                                </p>
                                <button className="btn transparent" id="sign-up-btn" onClick={toggleModel} > Sign up
                                </button>
                            </div>
                            <img src="img/log.svg" className="image" alt="" />
                        </div>
                        <div className="panel right-panel">
                            <div className="content">
                                <h3>Já tem uam conta ?</h3>
                                <p>
                                    é apenas um portifoio usa firebase do Google por isso o login cadastre-se pra ver mais.
                                </p>
                                <button className="btn transparent" id="sign-in-btn" onClick={toggleModel2}> Sign in
                                </button>
                            </div>
                            <img src="img/register.svg" className="image" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }else{
       return <Navigate to='/home' />
    }
}
export default Login