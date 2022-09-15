import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:"AIzaSyCJsUPR5HZqJK-PqlGtSQZ0cxgh5NHmml4",
  authDomain: "portifolio-e4589.firebaseapp.com",
  projectId: "portifolio-e4589",
  storageBucket: "portifolio-e4589.appspot.com",
  messagingSenderId: "1093227670293",
  appId: "1:1093227670293:web:8451ab3caad61c521b571c",
  measurementId: "G-B3T9VXB1LS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
