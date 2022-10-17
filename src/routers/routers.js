import React from 'react'
import{ BrowserRouter, Routes , Route, } from 'react-router-dom'
import PrivateRouters from '.'
import Home from '../home/home'
import Login from '../login/login'
import NotFalPage from '../pages/404'
//import HomeDashboard from '../dashboard/homeDashboard'
//import Page from '../dashboard/pages'
//import HomeDashboard from '../dashboard/homeDashboard'
import Dashboard2 from '../dashboard2/src_dashboard/index';
import Appdashboard from '../dashboard2/src_dashboard/App';
import DashboardLayout from '../dashboard2/src_dashboard/layouts/dashboard';
import User from '../dashboard2/src_dashboard/pages/User';
export default function AppRouters () {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Login/>} />
          <Route path='/home'  element={<PrivateRouters/>}> 
            <Route path='/home'  href='/home' element={<Home/>}/>
            
          </Route>
          <Route path='*' element={<NotFalPage/>} />
       
          <Route path='/dashboard'  element={<DashboardLayout/>} > 
          <Route path='/dashboard/user'  element={<User/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
