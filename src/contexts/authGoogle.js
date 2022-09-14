import { useState, useEffect, createContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

export const authGoogleContex = createContext({});
export const provider = new GoogleAuthProvider();
export const AuthGoogle = ({ children }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const loadStoreAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase: token");
            const sessionUser = sessionStorage.getItem("@AuthFirebase: user");
            if (sessionToken || sessionUser) {
                setUser(sessionUser);
            }
        }; loadStoreAuth();
    }, [])
    const singInGoogle = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user)

                sessionStorage.setItem("@AuthFirebase: token", token);
                sessionStorage.setItem("@AuthFirebase: user", JSON.stringify(user));
                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    };

    /*  ********************************************************************************************
    ****************************** senha *********************************************************** */
    const register = (registerEmail, registerPassword) => {
        createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                setUser(user)
                console.log(user)
                sessionStorage.setItem("@AuthFirebase: user", JSON.stringify(user));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                // ..
                if (error == 'FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    alert("senha deve ter mais de 6 digitos ")
                } if (error == "FirebaseError: Firebase: Error (auth/invalid-email).") {
                    alert("email invalido")
                } else {
                    alert(error)
                    console.log(error)

                }


            });

    }


    const LoginSenha = (loginEmail, loginPassword) => {
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setUser(user)

                sessionStorage.setItem("@AuthFirebase: user", JSON.stringify(user));
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;


                if (error == "FirebaseError: Firebase: Error (auth/invalid-email).") {
                    alert("Email invalido ")
                }
                if (error == "FirebaseError: Firebase: Error (auth/wrong-password).") {
                    alert("Senha Incorreta ")
                } else {
                    alert(error)
                }
            });
    }
    return (
        <authGoogleContex.Provider
            value={{ signed: !!user, user, register, singInGoogle, LoginSenha }}>
            {children}
        </authGoogleContex.Provider>
    )

}




