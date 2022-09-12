import { initializeApp  } from "firebase/app";
import 'firebase/auth'
import{getStorage} from "firebase/storage";
import 'firebase/firestore';
import firebase from 'firebase/app'

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
  measurementId:REACT_APP_FIREBASE_MEASUREMENTID

};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const storage = getStorage(app)

 export { app,storage}


