import React, { useState } from 'react'
import { ProductsContext } from './ProdutsContext'
import { useFecth } from '../hooks/useFecth'

export const ProductsContext = ({ children }) => {

    //  const [misproductos, setProductos] = useState()
     const {productos,isLoading}=useFecth('laptops')
     

    return (

        <ProductsContext.Provider value={{ productos, isLoading }}>

            {children}

        </ProductsContext.Provider>
    )
}
