import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute w-full flex justify-between items-center px-14 p-4 z-50'>
        <Link to="/">
            <h1 className='text-redflix uppercase font-nsans-bold cursor-pointer text-5xl'>netflix</h1>
        </Link>

        <div className=' '>
            <Link to="/login">
                <button className='capitalize bg-red-redflix px-3 py-1 rounded font-nsans-medium cursor-pointer'>iniciar sesión</button>
            </Link>
            <Link to="/signup">
                <button className='capitalize px-3 py-1 rounded font-nsans-medium cursor-pointer'>Registrarse</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar