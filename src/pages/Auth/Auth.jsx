import React from 'react';
import { Logo } from '../../assets/img/Icon';

const Auth = () => {
  return (
    <div className='Auth'>
      <div className='Auth__logo'>
        <Logo />
      </div>
      <h1>Mira lo que esta pasando en el mundo ahora mismo</h1>
      <h4>Únete a Twitter ahora mismo</h4>
      <button type='button'>Regístrate</button>
      <button type='button'>Iniciar sesión</button>
    </div>
  );
};

export default Auth;
