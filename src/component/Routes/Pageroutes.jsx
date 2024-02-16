import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import DefaultLayout from '../DefaultLayout'
function Pageroutes() {
  return (
    <div className='min-vh-100 min-vw-100'>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='*' element={<DefaultLayout/>}/>
        </Routes>
    </div>
  )
}

export default Pageroutes