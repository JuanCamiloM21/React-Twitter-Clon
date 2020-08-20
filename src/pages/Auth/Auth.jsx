import React, { useState } from 'react';
import { Logo } from '../../assets/img/Icon';
import Login from '../../components/Login/Login';
import SignUp from '../../components/SingUp/SingUp';
import './Auth.scss';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleFormChange = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='Auth'>
      <div className='Auth__logo'>
        <Logo />
      </div>
      <h1>Mira lo que esta pasando en el mundo ahora mismo</h1>
      <h4>Únete a Twitter ahora mismo</h4>
      {isLogin ? (
        <Login onFormChange={handleFormChange} />
      ) : (
        <SignUp onFormChange={handleFormChange} />
      )}
    </div>
  );
};

export default Auth;
