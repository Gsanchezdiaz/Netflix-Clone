import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const shouldHideButtons = currentPath === '/login' || currentPath === '/signup';

    return (
        <div className='absolute w-full flex justify-between items-center px-14 p-4 z-50'>
            <Link to="/">
                <h1 className='text-redflix uppercase font-nsans-bold cursor-pointer text-5xl'>netflix</h1>
            </Link>

            <div className=''>
                {!shouldHideButtons && (
                    <>
                        <Link to="/signup">
                            <button className='capitalize px-3 py-1 rounded font-nsans-medium cursor-pointer ml-4'>Registrarse</button>
                        </Link>
                        <Link to="/login">
                            <button className='capitalize bg-red-redflix px-3 py-1 rounded font-nsans-medium cursor-pointer'>iniciar sesión</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar