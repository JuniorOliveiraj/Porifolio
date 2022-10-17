import "./App.css";
import './css/styleMenu.css'
import Home from "./home/home";
import Login from "./login/login";
import { Routes, Route, Link } from "react-router-dom";
import {authGoogleContex} from './contexts/authGoogle'
import {AuthGoogle} from './contexts/authGoogle'
import AppRouters from "./routers/routers";
function App() {
  return (
        <AuthGoogle>
           <AppRouters/>
        </AuthGoogle>
  );


}

export default App;
