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
import { getStorage, ref, getDownloadURL,list  } from "firebase/storage";
import  LoadingApp from '../loanding/loanding'

function Home() {
  const storage = getStorage();
  const {signed,logout,login,user } = useContext(authGoogleContex); 
  const [loand, setLoand] = useState(false)
  getDownloadURL(ref(storage,'/imagens/god-of-war-2-wallpaper-full-hd-1920x1080-kratos_mjh6.h960.png'))
    .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'
      
      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      if(url == null){
        setLoand = false
        console.log('sasa')
      }
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();

  
      // Or inserted into an <img> element
      const img = document.getElementById('myimg');
      img.setAttribute('src', url);
      if(url != null){
        setLoand = true
        console.log('sasa')
      }

    })
    .catch((error) => {
         // A full list of error codes is available at
// https://firebase.google.com/docs/storage/web/handle-errors
switch (error.code) {
  case 'storage/object-not-found':
    console.log('storage/object-not-found')
    break;
  case 'storage/unauthorized':
    // User doesn't have permission to access the object 
    console.log('unauthorized')
    break;
  case 'storage/canceled':
    // User canceled the upload
  console.log('canceled')
    break;

  // ...

  case 'storage/unknown':
    // Unknown error occurred, inspect the server response
     console.log('unknown')
    break;
}
    });

  return (
    <div className="App">
      <Tubar />
      <ListItensMenu />
      <ContainerHomeCenter>
          {!setLoand ? <LoadingApp/> : ""}
        <ContainerHomeBluerSombra></ContainerHomeBluerSombra>
        <video className='videoBg' src={videoBg} autoPlay loop muted />
        <div className='containerText-videobg'> <h1>Developer <br /><span>Junior</span></h1></div>
      </ContainerHomeCenter>
      <UploaldImgStore/> 
      {user?.email}
      <img id="myimg" />
    </div>
  );
}

export default Home;
