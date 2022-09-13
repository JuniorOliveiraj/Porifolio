import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { authGoogleContex } from "../contexts/authGoogle";
export default function PrivateRouters() {
    const {singInGoogle,signed} = useContext(authGoogleContex); 
   
  return signed ? <Outlet/> : <Navigate to='/' /> ;
}
