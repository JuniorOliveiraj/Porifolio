import React from 'react'
import{ BrowserRouter, Routes , Route, } from 'react-router-dom'
import PrivateRouters from '.'
import Home from '../home/home'
import Login from '../login/login'
export default function AppRouters () {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Login/>} />
          <Route path='/home'  element={<PrivateRouters/>}> 
            <Route path='/home'  element={<Home/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
