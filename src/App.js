import "./App.css";
import './css/styleMenu.css'
import Home from "./home/home";
import Login from "./login/login";
import { Routes, Route, Link } from "react-router-dom";
import { authGoogleContex } from './contexts/authGoogle'
import { AuthGoogle } from './contexts/authGoogle'
import AppRouters from "./routers/routers";
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';


function App() {
  return (
    <AuthGoogle>
      <ThemeProvider>
        <ScrollToTop />
        <BaseOptionChartStyle />
        <Router />
      </ThemeProvider>
    </AuthGoogle>






  );


}

export default App;
