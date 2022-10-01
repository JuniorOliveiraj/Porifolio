import "../App.css";
import '../css/styleMenu.css'
import UploaldImgStore from "../UploaldImgStore";
import Tubar from "../menu-home/Tubar";
import ListItensMenu from "../menu-home/ListItensMenu";
import { authGoogleContex } from "../contexts/authGoogle";
import {useContext ,useState,useEffect} from 'react';
import  LoadingApp from '../loanding/loanding'
import Vhone from "./vh/vh1";
import Lupa from "./vh/Lupa";
import React from "react";
import { Timeline, Controls, Tween } from "react-gsap";
import "../css/styles.css";
import videoBg from '../assets/ElementsBackground.mp4'
import { storage } from "../firebase";
import { getDownloadURL,ref } from "firebase/storage";






function Home() {
  const {signed,logout,login,user,photos,loand } = useContext(authGoogleContex); 


  return (
    <div className="App">
      <Tubar />
      <ListItensMenu />
      
      {loand &&
           <LoadingApp/>
          }
    
    <div>
      <Timeline
        labels={[
          { label: "start", position: 0 },
          {
            label: "header-end",
            position: "start+=1.8"
          },
          { label: "h1Show", position: "header-end+=1.3" },
          { label: "girl-start", position: "h1Show-=0.5" },
          { label: "boy-start", position: "girl-start+=0.4" },
          { label: "shapes-start", position: "boy-start+=0.4" }
        ]}
      >
 
        <section id="home">
          <div className="containerTest">
            <div className="content-area">
              <div className="info-section">
                <Timeline
                  target={
                    <>
                      <h1>Junior Oliveira Developer Web</h1>
                      <h4>Developed in React </h4>
                      <div className="call-actions">
                        <CallToActionButtons />
                      </div>
                    </>
                  }
                >
                  <Tween
                    target={0}
                    from={{ x: "0px", y: "100px", opacity: 0 }}
                    to={{ x: "0px", y: "0px", opacity: 1 }}
                    duration={0.9}
                    position="header-end"
                  />
                  <Tween
                    target={1}
                    from={{ x: "-50px", opacity: 0 }}
                    to={{ x: "0px", opacity: 1 }}
                    duration={0.9}
                    position="h1Show"
                  />
                  <Tween
                    target={2}
                    from={{ x: "-50px", opacity: 0 }}
                    to={{ x: "0px", opacity: 1 }}
                    duration={0.9}
                    position="h1Show+=1"
                  />
                </Timeline>
              </div>
              <div className="photos">
                <Timeline
                  target={
                    <>
                      <img
                        src=""
                        alt=""
                        id="Foto1"
                        className="Foto1"
                      />
                      <img
                      id="Foto2"
                        src=""
                        alt=""
                        className="boy"
                      />
                    </>
                  }
                >
                  <Tween
                    target={0}
                    from={{ height: 0 }}
                    to={{ height: 600 }}
                    duration={0.9}
                    position="girl-start"
                  />
                  <Tween
                    target={1}
                    from={{ height: 0 }}
                    to={{ height: 600 }}
                    duration={0.9}
                    position="boy-start"
                  />
                </Timeline>
                <Timeline
                  target={
                    <>
                      <div className="shape1"></div>
                      <div className="shape2"></div>
                      <div className="shape3" ></div>
                    </>
                  }
                >
                  <Tween
                    target={0}
                    from={{ scale: 0, opacity: 0 }}
                    to={{ scale: 1, opacity: 1 }}
                    position="shapes-start"
                  />
                  <Tween
                    target={2}
                    from={{ opacity: 0 }}
                    to={{ opacity: 0.6 }}
                    duration={1}
                    position=">-0.2"
                  />
                  <Tween
                    target={2}
                    from={{ x: -50, y: 500 }}
                    to={{ y: 465 }}
                    repeat={-1}
                    duration={1.5}
                    yoyo
                  />
                  <Tween
                    target={1}
                    from={{ opacity: 0 }}
                    to={{ opacity: 0.3 }}
                    duration={1}
                    position=">-2"
                  />
                  <Tween
                    target={1}
                    from={{ x: 550, y: -150 }}
                    to={{ y: -185 }}
                    duration={1}
                    repeat={-1}
                    yoyo
                  />
                </Timeline>
                
              </div>
              
            </div>
            
          </div>
          
        </section>
      </Timeline>
    </div>
      <UploaldImgStore/> 
      {user?.email}
       {!loand && photos.length > 0 &&
        <Vhone/>
      } 
      <Lupa/>
    </div>
  );
}
const CallToActionButtons = () => (
  <>
    <a href="#" className="action-btn">
      Conhecer
    </a>
    <a href="#" className="action-ghost-btn">
      contato
    </a>
  </>
);
export default Home;

getDownloadURL(ref(storage,'/fotosHome/111629755386552.jpg'))
    .then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const img = document.getElementById('Foto1');
      img.setAttribute('src', url);
      console.log(url)
    })
    .catch((error) => {
});
getDownloadURL(ref(storage,'/fotosHome/c1f0b8fa55bfbd65377ab86976ea5e57.jpg'))
    .then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const img = document.getElementById('Foto2');
      img.setAttribute('src', url);
      console.log(url)
    })
    .catch((error) => {
});