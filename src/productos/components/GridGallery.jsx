import React from 'react'
import { useFecth } from '../hooks/useFecth'
import { Cards } from './Cards'


export const GridGallery = ({categoria}) => {

    const {productos,isLoading}=useFecth(categoria)

  return (

    <div>

        {
        isLoading && <h3>Cargando....</h3>     
        }
         <div className='grid-container'>

            {productos.map((item)=>(
                
            <Cards key={item.id}

                {...item} 
                />
            ))}
          </div>

    </div>
  )
}
