import "./App.css";
import './css/styleMenu.css'
import videoBg from './assets/ElementsBackground.mp4'
import { storage } from "./firebase";
import { ref, getDownloadURL, uploadBytesResumable,getStorage } from "firebase/storage";
import { useState,useEffect } from "react";
import Tubar from "./menu-home/Tubar";
import ListItensMenu from "./menu-home/ListItensMenu";
import { ContainerHomeCenter, ContainerHomeBluerSombra } from "./containr/container1";





function UploaldImgStore() {
  const [imgURL, setImgURL] = useState("");
  const [progressPorcent, setPorgessPorcent] = useState(0);





  const handleSubmit = (event) => {
    event.preventDefault();
    const file = event.target[0]?.files[0];
    if (!file) return;

    const storageRef = ref(storage, `imagens/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPorgessPorcent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL);
          console.log(downloadURL)
        });
      }
    );
  };
  


  return (
    <div >

      <form onSubmit={handleSubmit}>
        <input type="file"   accept="image/png, image/jpeg" multiple/>
        <button>Enviar</button>
      </form>
      {!imgURL && <p>{progressPorcent}%</p>}
      {imgURL && <img src={imgURL} alt="Imagem" height={200} />}

    </div>
  );
}

export default UploaldImgStore;
