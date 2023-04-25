import { Route, Routes } from 'react-router-dom'
import { UserRouter } from './UserRouter'
import { ProductsRouter } from './ProductsRouter'
import { UserProvider } from '../context/UserProvider'


export const AppRouter = () => {

  return (

    <div>

    <UserProvider>

    <Routes>
            
            <Route path='/login' element={<UserRouter/>} />

            <Route path='/*' element={<ProductsRouter/>} />
    
    </Routes>

    </UserProvider>

    </div>      
  )
}
