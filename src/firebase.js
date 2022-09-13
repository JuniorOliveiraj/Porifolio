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
  apiKey:process.env.FIREBASE_APIKEY,
  authDomain:process.env.FIREBASE_AUTHDOMAIN,
  projectId:process.env.FIREBASE_PROJECTID,
  storageBucket:process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId:process.FIREBASE_MESSEAGINDERID,
  appId:process.env.FIREBASE_APPID,
  measurementId:process.env.FIREBASE_MEASUREMENTID


};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const storage = getStorage(app)
 const db = getFirestore(app);
const auth = getAuth(app)
 export { app,storage,db, auth}


