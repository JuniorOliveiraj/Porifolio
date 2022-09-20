import "../App.css";
import '../css/styleMenu.css'
import videoBg from '../assets/ElementsBackground.mp4'
import UploaldImgStore from "../UploaldImgStore";
import Tubar from "../menu-home/Tubar";
import ListItensMenu from "../menu-home/ListItensMenu";
import { ContainerHomeCenter, ContainerHomeBluerSombra } from "../containr/container1";

import { Navigate, Outlet } from 'react-router-dom';
import { authGoogleContex } from "../contexts/authGoogle";
import {useContext ,useState} from 'react';



function Home() {
  const {signed,logout,login,user } = useContext(authGoogleContex); 
  return (
    <div className="App">
      <Tubar />
      <ListItensMenu />
      <ContainerHomeCenter>
        <ContainerHomeBluerSombra></ContainerHomeBluerSombra>
        <video className='videoBg' src={videoBg} autoPlay loop muted />
        <div className='containerText-videobg'> <h1>Developer <br /><span>Junior</span></h1></div>
      </ContainerHomeCenter>
      <UploaldImgStore/> 
      {user?.email}
    </div>
  );
}

export default Home;
