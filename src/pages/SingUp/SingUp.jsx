import React from 'react';
import { Logo } from '../../assets/img/Icon';

const SingUp = () => {
  return (
    <div className='SingUp'>
      <Logo />
      <form>
        <input type='text' placeholder='Nombre' />
        <input type='text' placeholder='Email' />
        <input type='text' placeholder='Password' />
        <button type='button'>Registrarse</button>
      </form>
    </div>
  );
};

export default SingUp;
