import "../App.css";
import '../css/styleMenu.css'
import ViewPrincipal from "./containerPrincipal";
import UploaldImgStore from "../UploaldImgStore";
import Tubar from "../menu-home/Tubar";
import ListItensMenu from "../menu-home/ListItensMenu";

import { authGoogleContex } from "../contexts/authGoogle";
import {useContext ,useState,useEffect} from 'react';
import { getStorage, ref, getDownloadURL,listAll  } from "firebase/storage";import { storage } from "../firebase";
import  LoadingApp from '../loanding/loanding'
import * as Photos  from "../contexts/galeriDePhotos";
import PhotoItens from "./PhotosItem";
import Vhone from "./vh/vh1";
import Lupa from "./vh/Lupa";
import { ContainerHomeCenter } from "../containr/container1";
function Home() {
  const {signed,logout,login,user,photos,loand } = useContext(authGoogleContex); 


  return (
    <div className="App">
      <Tubar />
      <ListItensMenu />
      {loand &&
           <LoadingApp/>
          }
      <ViewPrincipal/>
      
      <UploaldImgStore/> 
      {user?.email}
       {!loand && photos.length > 0 &&
        <Vhone/>
      } 
      <Lupa/>
    </div>
  );
}
export default Home;

//   getDownloadURL(ref(storage,'/imagens/god-of-war-2-wallpaper-full-hd-1920x1080-kratos_mjh6.h960.png'))
//     .then((url) => {
//       // `url` is the download URL for 'images/stars.jpg'
      
//       // This can be downloaded directly:
//       const xhr = new XMLHttpRequest();
//       if(url == null){
//         setLoand = false
//         console.log('sasa')
//       }
//       xhr.responseType = 'blob';
//       xhr.onload = (event) => {
//         const blob = xhr.response;
//       };
//       xhr.open('GET', url);
//       xhr.send();

  
//       // Or inserted into an <img> element
//       const img = document.getElementById('myimg');
//       img.setAttribute('src', url);
//       if(url != null){
//         setLoand = true
//         console.log('sasa')
//       }

//     })
//     .catch((error) => {
//          // A full list of error codes is available at
// // https://firebase.google.com/docs/storage/web/handle-errors
// switch (error.code) {
//   case 'storage/object-not-found':
//     console.log('storage/object-not-found')
//     break;
//   case 'storage/unauthorized':
//     // User doesn't have permission to access the object 
//     console.log('unauthorized')
//     break;
//   case 'storage/canceled':
//     // User canceled the upload
//   console.log('canceled')
//     break;

//   // ...

//   case 'storage/unknown':
//     // Unknown error occurred, inspect the server response
//      console.log('unknown')
//     break;
// }
//     });