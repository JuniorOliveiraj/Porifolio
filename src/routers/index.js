import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { authGoogleContex } from "../contexts/authGoogle";
export default function PrivateRouters() {
    const {singInGoogle,signed} = useContext(authGoogleContex); 
    console.log(signed, 'Home')
  return signed ? <Outlet/> : <Navigate to='/' /> ;
}
