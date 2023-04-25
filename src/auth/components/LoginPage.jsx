import React, { useContext } from 'react'
 import { UserContext } from '../../context/UserContext'
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigate = useNavigate();
  const {setUser } = useContext(UserContext)
  const { formulario, handleChange } = useForm("");

  const onSubmit = (ev) => {

    ev.preventDefault();
      
    setUser(formulario)
    
   navigate ('/')

  };

  return (
   
    <div>

  
        <form onSubmit={onSubmit}  className='sec-form'>

            <input className='i-form' type="text" name='usuario' placeholder='Nombre de usuario'  onChange={handleChange} />
            <input className='i-form' type="password" name='pass' placeholder='Contraseña'   onChange={handleChange} />
            <input className='s-form' type="submit" name="" id="" value="Login"/> 

        </form>
    </div>
  )
}
