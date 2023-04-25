import { useEffect, useState } from "react"
import { getProductos } from "../helpers/getProductos"
import {getProducto} from '../helpers/getProducto'


export const useFecth = (categoria,id) => {

    const [producto, setProducto] = useState({})
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getProducts= async()=>{
        
        const NewProductos= await getProductos(categoria)
        
        
        setProductos(NewProductos)

        setIsLoading(false)
    }
    const getUnProducto= async()=>{
        
        
        const productoEncontrado= await getProducto(id)
        
        
        setProducto(productoEncontrado)

        setIsLoading(false)
    }

    useEffect(()=>{
        getUnProducto()
    },[])

    useEffect(()=>{
        getProducts()
    },[])



return{
    productos,
    producto,
    isLoading
}

  
}
