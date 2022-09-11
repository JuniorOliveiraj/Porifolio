import './styleLogin.css'
import { useState } from 'react'


function Login() {


    const [active, setModel] = useState(false)

    const toggleModel = () => {
        setModel(!active)

    }
    const toggleModel2 = () => {
        setModel(!active)

    }

    return (
        <section  >

            <div className={active ? "container sign-up-mode " : 'container'}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h2 className="title">Inscrever-se</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <p className="social-text">Ou Inscreva-se nas plataformas sociais</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                </a>
                                <a href="#" className="social-icon">
                                </a>
                                <a href="#" className="social-icon">
                                </a>
                                <a href="#" className="social-icon">
                                </a>
                            </div>
                        </form>
                        <form action="#" className="sign-up-form">
                            <h2 className="title">Inscrever-se</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" className="btn" value="Sign up" />
                            <p className="social-text">Ou Inscreva-se nas plataformas sociais</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                </a>
                                <a href="#" className="social-icon">
                                </a>
                                <a href="#" className="social-icon">
                                </a>
                                <a href="#" className="social-icon">
                                </a>
                            </div>
                        </form>
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
}

export default Login