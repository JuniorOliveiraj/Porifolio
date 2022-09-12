import { BsGoogle, BsGithub, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from "react-router-dom";
function FormLogin() {
    return (
        <>
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
                <Link to="/" ><input type="submit" className="btn" value="Login" /></Link>
                <p className="social-text">Ou Inscreva-se nas plataformas sociais</p>
                <div className="social-media">
                    <a href="#" className="social-icon">
                        <BsTwitter size={25} />
                    </a>
                    <a href="#" className="social-icon">
                        <BsGithub size={25} />
                    </a>
                    <a href="#" className="social-icon">
                        <BsGoogle size={25} />
                    </a>
                    <a href="#" className="social-icon">
                        <FaFacebookF size={25} />

                    </a>
                </div>
            </form>
        </>
    )
}
export default FormLogin