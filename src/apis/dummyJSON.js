
export const consulta = async(busqueda,id) => {
    
       
    try {

        let ruta;

        
        if(busqueda){
          
           ruta =  `https://dummyjson.com/products/category/${busqueda} `;   
        }
        
        if(id){
            
          ruta=  `https://dummyjson.com/products/${id}`;
        } 
          
                
  
         
  
        let peticion = await fetch(ruta,
          {
            method: "GET",
            
          });
  
        if (peticion.ok) {
  
          const respuesta = await peticion.json();

         
          return respuesta;
          
  
        } else throw "Error en la ejecución";
  
      } catch (error) {
  
        return error;
      }
}
