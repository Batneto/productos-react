import React from 'react'

export const Cards = ({id,title,img,price,stock,valoracion}) => {

    return (
      
      <div className="tarjeta">
         <div className="titulo"> <span className='strong'>{title}</span>  </div>
            <div className="cuerpo">
              <div className='imagen'><img src={img} alt="alt" /></div>  
                <p> <span className='strong'>Precio:</span>  {price} $</p>
                <p> <span className='strong'>Stock: </span> {stock} Unidades </p>
                
            </div>
            <div className="pie">
                <a href={`/detalle/${id}`}>Más información</a>
            </div>
      </div>

        
  )
    
}
