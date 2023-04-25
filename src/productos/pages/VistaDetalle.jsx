import React from 'react'
import { useParams } from 'react-router-dom';
import { Detalles } from '../components/Detalles';

export const VistaDetalle = () => {

  const { id } = useParams();
  
  
  return (

    <div>
        
      <Detalles id = {id} />
      
    </div>
    
  )
}
