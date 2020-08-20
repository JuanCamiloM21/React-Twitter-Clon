import React from 'react';
import { Logo } from '../../assets/img/Icon';
import './SingUp.scss';

const SingUp = ({ onFormChange }) => {
  return (
    <div className='SingUp'>
      <Logo />
      <form className='Form'>
        <label htmlFor='nombre'>Nombre</label>
        <input type='text' id='nombre' placeholder='Nombre' />
        <label htmlFor='email'>Nombre</label>
        <input type='text' id='email' placeholder='Email' />
        <label htmlFor='password'>Nombre</label>
        <input type='password' id='password' placeholder='Password' />
        <label htmlFor='passwordConfirm'>Nombre</label>
        <input
          type='password'
          id='passwordConfirm'
          placeholder='Confirmar Password'
        />
        <button type='button'>Registrarse</button>
        <p onClick={onFormChange}>Ya tengo una cuenta </p>
      </form>
    </div>
  );
};

export default SingUp;
