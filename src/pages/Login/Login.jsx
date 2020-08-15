import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets/img/Icon';
import './Login.scss';

const Login = () => {
  return (
    <div className='Login'>
      <Logo />
      <h2>Iniciar sesión en Twitter</h2>
      <form>
        <input
          type='text'
          placeholder='Telefono, correo electronico o nombre de usuario'
        />
        <input type='text' placeholder='Contraseña' />
        <button type='button'>Iniciar sesión</button>
        <span>¿Se te olvido la contraseña? </span>·
        <Link to='/singup'>Registrarse en Twitter</Link>
      </form>
    </div>
  );
};

export default Login;
