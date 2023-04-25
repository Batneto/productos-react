import React from 'react'
import { GridGallery } from '../components/GridGallery'


export const Laptops = () => {

  return (
    <>
        <h1 className='title'>Galeria de Lapstops: </h1>
        
        <GridGallery categoria= {'laptops'} />
        
    </>
  )
}
