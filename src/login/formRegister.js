
import { BsGoogle, BsGithub, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

function FormRegister() {

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
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password"  />
                </div>
                <input type="submit" className="btn" value="Sign up" />
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
