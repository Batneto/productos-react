import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePages } from '../productos/pages/HomePages'
import { Laptops } from '../productos/pages/Laptops'
import { Smartphones } from '../productos/pages/Smartphones'
import { Buscador } from '../productos/pages/Buscador'
import { NavBar } from '../productos/components/NavBar'
import { VistaDetalle } from '../productos/pages/VistaDetalle'
import { UserProvider } from '../context/UserProvider'


export const ProductsRouter = () => {

  return (
  <>
    

    <NavBar/>

<UserProvider/>

    <Routes>
    <Route path='/' element={<HomePages/>} />
    <Route path='/laptops' element={<Laptops/>} />
    <Route path='/telefonos' element={<Smartphones/>} />
    <Route path='/buscador' element={<Buscador/>} />  
    <Route path='/detalle/:id' element={<VistaDetalle/>} />
    <Route path='/*' element={<ProductsRouter/>} />
    
   </Routes>

<UserProvider/>
  </>
  )
}
