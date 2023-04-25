
import { consulta } from '../../apis/dummyJSON'


export const getProductos=async (categoria)=>{
    
    const {products}= await consulta(categoria)

    const productos= products.map(item => ({

        id:item.id,
        title:item.title,
        price:item.price,
        stock:item.stock,
        img:item.thumbnail,
        

    }))

    return productos
}