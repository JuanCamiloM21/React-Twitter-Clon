import React from 'react';
import { Link } from 'react-router-dom';
import './Nabvar.scss';
import more from '../../assets/img/more.png';
import profile from '../../assets/img/profile.jpg';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <i className='fab fa-twitter' />
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <i className='fas fa-home' />
              </div>
              <div className='Nabvar__item'>
                <h2>Inicio</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <i className='fas fa-hashtag' />
              </div>
              <div className='Nabvar__item'>
                <h2>Explorar</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <i className='far fa-bell' />
              </div>
              <div className='Nabvar__item'>
                <h2>Notificaciones</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <i className='far fa-envelope' />
              </div>
              <div className='Nabvar__item'>
                <h2>Mensajes</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <i className='far fa-bookmark' />
              </div>
              <div className='Nabvar__item'>
                <h2>Guardados</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <i className='far fa-list-alt' />
              </div>
              <div className='Nabvar__item'>
                <h2>Listas</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <i className='far fa-user' />
              </div>
              <div className='Nabvar__item'>
                <h2>Perfil</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <img src={more} alt='more' />
              </div>
              <div className='Nabvar__item'>
                <h2>Más Opciones</h2>
              </div>
            </Link>
          </li>
          <li>
            <a href='' className='button'>
              <span>Twittear</span>
              <i className='fas fa-plus' />
            </a>
          </li>
          <li className='Navbar__profile'>
            <div className='Navbar__profile--img'>
              <img src={profile} alt='Profile' />
            </div>
            <div className='Navbar__profile--info'>
              <h3>Nombre</h3>
              <span>@Usuario</span>
            </div>
            <div className='Navbar__profile--icon'>
              <i className='fas fa-chevron-down' />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
