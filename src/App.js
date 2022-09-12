import "./App.css";
import './css/styleMenu.css'
import Home from "./home/home";
import Login from "./login/login";
import { Routes, Route, Link } from "react-router-dom";
import { authGoogleContex } from './contexts/authGoogle'
function App() {
  return (

    <authGoogleContex>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </authGoogleContex>



  );


}

export default App;
