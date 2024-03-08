import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email + " " + password);
  }

  return (
    <div className='w-full h-screen'>
      <img
        className='hidden sm:block absolute w-full h-full object-cover object-top'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/42011383-aaa3-42ea-9a65-55b195e8bfc4/PE-es-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='netflix found'
      />
      <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-20'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-nsans-bold'>Inicia sesión</h1>
            <form 
              className='w-full flex flex-col py-4'
              onSubmit={handleSubmit}>
              <input
                className='p-3 my-2 bg-gray-700 rounded font-nsans-regular'
                type="email"
                placeholder='Correo electrónico'
                autoComplete='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className='p-3 my-2 bg-gray-700 rounded font-nsans-regular'
                type="password"
                placeholder='Contraseña'
                autoComplete='current-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className='bg-red-redflix py-3 my-6 rounded font-nsans-bold'>
                Iniciar sesión
              </button>
              <div className='text-sm flex justify-between items-center text-gray-600'>
                <p>
                  <input
                    className='mr-2'
                    type='checkbox'
                    checked={rememberLogin}
                    onChange={(e) => setRememberLogin(!rememberLogin)}
                  />
                  Recuérdame
                </p>
                <p>
                  <a href='https://help.netflix.com/es-es/'>¿Necesitas ayuda?</a>
                </p>
              </div>
              <p className='text-sm my-4'>
                <span className='mr-2 text-gray-600'>
                  ¿Primera vez en Netflix?
                </span>
                <Link className='hover:underline' to="/signup">Suscríbete ahora.</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login