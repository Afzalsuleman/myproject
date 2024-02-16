import React, { Suspense } from 'react'
import './Component.scss'
import Dashboard from './Pages/Dashboard'
import Admin from './Admin'
import { Route, Routes } from 'react-router-dom'
import Ai from './Ai'
function Component() {
  return (
    <>
        <Suspense>
        <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/Practice Ai' element={<Ai/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin' element={<Admin/>}/>
        </Routes>
        </Suspense>
        
    </>
    
  )
}

export default Component