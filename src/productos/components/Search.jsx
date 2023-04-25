import React, { useContext } from 'react'

import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom'

export const Search = () => {


  const { formulario, handleChange } = useForm("");

  const onSubmit = (ev) => {

    ev.preventDefault();
      
    setUser(formulario)

  };

  return (
   
    <div>

        <form onSubmit={onSubmit}  className='sec-form'>

            <input className='i-form' type="text" name='buscador' placeholder='introduzca su busqueda'  onChange={handleChange} />
            <input className='s-form' type="submit" name="" id="" value="Search"  /> 

        </form>
    </div>
  )
}
