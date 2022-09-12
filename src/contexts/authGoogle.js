import { useState, useEffect,createContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export const authGoogleContex = createContext({});

export const provider = new GoogleAuthProvider();
export const AuthGoogle = ( {children} ) =>{
    const[user,setUser] = useState(null)
    const singInGoogle = () => {
        
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user)
                sessionStorage.setItem("@UuthFirebase: token", token);
                sessionStorage.setItem("@UuthFirebase: token", JSON.stringify);
                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    };
    return(
        <authGoogleContex.Provider
        value={{ singInGoogle, signed: !!user }}>
            {children}
        </authGoogleContex.Provider>
    )

}