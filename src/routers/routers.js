import React from 'react'
import{ BrowserRouter, Routes , Route, } from 'react-router-dom'
import PrivateRouters from '.'
import Home from '../home/home'
import Login from '../login/login'
import NotFalPage from '../pages/404'

export default function AppRouters () {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Login/>} />
          <Route path='/home'  element={<PrivateRouters/>}> 
            <Route path='/home'  href='/home' element={<Home/>}/>

          </Route>
          <Route path='*' element={<NotFalPage/>} />
        </Routes>
    </BrowserRouter>
  )
}
