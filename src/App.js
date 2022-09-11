import "./App.css";
import './css/styleMenu.css'
import Home from "./home/home";
import Login from "./login/login";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>

    </div>
  );


}

export default App;
