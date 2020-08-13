import React from 'react';
import { Link } from 'react-router-dom';
import './Nabvar.scss';
import more from '../../assets/img/more.png';
import profile from '../../assets/img/profile.jpg';
import {
  Home,
  Logo,
  Hashtag,
  Bell,
  Send,
  Tags,
  Book,
  Settings,
  Profile,
  Button,
  Search,
} from '../../assets/img/Icon';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <Logo />
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <Home />
              </div>
              <div className='Nabvar__item'>
                <h3>Inicio</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <Hashtag />
                <Search />
              </div>
              <div className='Nabvar__item'>
                <h3>Explorar</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <Bell />
              </div>
              <div className='Nabvar__item'>
                <h3>Notificaciones</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <Send />
              </div>
              <div className='Nabvar__item'>
                <h3>Mensajes</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <Tags />
              </div>
              <div className='Nabvar__item'>
                <h3>Guardados</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <Book />
              </div>
              <div className='Nabvar__item'>
                <h3>Listas</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <Profile />
              </div>
              <div className='Nabvar__item'>
                <h3>Perfil</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='Navbar__icon'>
                <Settings />
              </div>
              <div className='Nabvar__item'>
                <h3>Más Opciones</h3>
              </div>
            </Link>
          </li>
          <li>
            <a href='' className='button'>
              <span>Twittear</span>
              <Button />
            </a>
          </li>
          <li className='Navbar__profile'>
            <div className='Navbar__profile--img'>
              <img src={profile} alt='Profile' />
            </div>
            <div className='Navbar__profile--info'>
              <h4>Nombre</h4>
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
