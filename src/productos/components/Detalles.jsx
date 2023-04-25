import React from 'react'
import { useFecth } from '../hooks/useFecth'
import { useNavigate } from 'react-router-dom'
import { Estrellas } from './Estrellas';

export const Detalles = ({id}) => {

  const navigate = useNavigate();

  const {producto}=useFecth(null,id)   
  
  const back=()=>{
    
    navigate(-1)
  }

  return (
    <>
    <div className='div-boton'>
    <button onClick={back} className='boton'>Volver</button>
    </div>
    <main className="grid-container">
        <section className="detalle-container">
            <div className="producto">
                <div className="div-card-img">
                    <img src={producto.imagen} alt="" />
                </div>
                <div className="producto-data">
                    <h1> {producto.titulo}
                    </h1>
                    <p> {producto.descripcion}
                    </p>
                    <p> <span className='strong'>Precio: </span>  {producto.precio}
                    </p>
                    {/* <p> <span className='strong'>Rating:</span> {producto.valoracion} </p>   */}
                    <p> <span className='strong'>Rating:</span> <Estrellas rating={producto.valoracion}/> </p>  

                   
                </div>
            </div>

        </section>
      </main>
      </>

  )
}
