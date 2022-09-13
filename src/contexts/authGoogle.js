import { useState, useEffect,createContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export const authGoogleContex = createContext({});
export const provider = new GoogleAuthProvider();
export const AuthGoogle = ( {children} ) =>{
    const[user,setUser] = useState(null)
    useEffect(()=>{
        const loadStoreAuth = () =>{
            const sessionToken = sessionStorage.getItem("@AuthFirebase: token");
            const sessionUser = sessionStorage.getItem("@AuthFirebase: user");
            if(sessionToken || sessionUser){
                setUser(sessionUser);
            }
        };loadStoreAuth();
    },[])
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
                if(errorCode){
                    alert(errorCode)
                }if (errorMessage){
                      alert(errorCode)
                }if(email){
                    alert(email)
                }if(credential){
                     alert(credential)
                }
            });
    };

    return(
        <authGoogleContex.Provider
             value={{ singInGoogle, signed: !!user }}>
            {children}
        </authGoogleContex.Provider>
    )

}