import { Link } from 'react-router-dom'

export const NavBar = () => {
    
    return (
    
        <nav className='menu'>
            <ul className='nav'>

                <li className="nav-link active"><Link to='/'>Home</Link></li>
                <li className="nav-link "><Link to='/telefonos'>Smartphones</Link></li>
                <li className="nav-link "><Link to='/laptops'>Laptops</Link></li>
                <li className="nav-link " > <Link to='/buscador'>Buscador</Link></li>
                   
            </ul > 

            <div className='login'>
                 <li className="nav-link " > <Link to='/login'>Login</Link></li >
            </div>
            
         </nav >
     
    
    )
}