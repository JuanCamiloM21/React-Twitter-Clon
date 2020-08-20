import React from 'react';
import { Logo } from '../../assets/img/Icon';
import './Login.scss';

const Login = ({ onFormChange }) => {
  return (
    <div className='Login'>
      <Logo />
      <h2>Iniciar sesión en Twitter</h2>
      <form className='Form'>
        <div className='Form__email'>
          <label htmlFor='Email'>Email</label>
          <input
            type='text'
            id='Email'
            name='Email'
            placeholder='Telefono, correo electronico o nombre de usuario'
          />
        </div>
        <div className='Form__password'>
          <label htmlFor='Password'>Password</label>
          <input
            type='password'
            id='Password'
            name='Password'
            placeholder='Contraseña'
          />
        </div>
        <button type='button'>Iniciar sesión</button>
        <span>¿Se te olvido la contraseña? </span>

        <p onClick={onFormChange}> Registrarse en Twitter </p>
      </form>
    </div>
  );
};

export default Login;
