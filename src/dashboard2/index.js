// scroll bar
import 'simplebar/src/simplebar.css';


import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

//
import Appdashboard from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

// ----------------------------------------------------------------------

function Dashboard2() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Appdashboard />
      </BrowserRouter>
    </HelmetProvider>
  )

}export default Dashboard2




// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
