import { consulta } from '../../apis/dummyJSON'


export const getProducto=async (id)=>{

    
   
    const productoEncontrado= await consulta(null,id)

    ;

    const producto={
       titulo: productoEncontrado.title,
       descripcion:productoEncontrado.description,
       precio:productoEncontrado.price,
       valoracion:productoEncontrado.rating,
       imagen:productoEncontrado.thumbnail,
    }
    


    return producto
}