import { initializeApp  } from "firebase/app";
import 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import{getStorage} from "firebase/storage";
import {getAuth}from 'firebase/auth'
import 'firebase/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:REACT_APP_FIREBASE_APIKEY,
  authDomain:REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId:REACT_APP_FIREBASE_PROJECTID,
  storageBucket:REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId:REACT_APP_FIREBASE_MESSEAGINDERID,
  appId:REACT_APP_FIREBASE_APPID,

};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const storage = getStorage(app)
 const db = getFirestore(app);
const auth = getAuth(app)
 export { app,storage,db, auth}


