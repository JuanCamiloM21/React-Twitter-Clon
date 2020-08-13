import React from 'react';
import './Trend.scss';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/trend1.jpg';
import img2 from '../../assets/img/trend2.jpg';
import profile from '../../assets/img/profile.jpg';

const Trend = () => {
  return (
    <div className='Trend'>
      <div className='Trend__search'>
        <i className='fas fa-search' />
        <input type='text' placeholder='Buscar en Twitter' />
      </div>
      <div className='Trend__timeline'>
        <h3>Qué está pasando</h3>
        <div className='Trend__item'>
          <div className='Trend__item--info'>
            <span>Cine · Hace 37 minutos </span>
            <h4>
              Fallece Alan Parker, director de 'Evita' y 'Mignight Express'
            </h4>
            <span>
              Tendencias sobre: <a href='#'>Alan Parker</a> y
              <a href='#'> Midnight Express</a>
            </span>
          </div>
          <div className='Trend__item--img'>
            <img src={img1} alt='img1' />
          </div>
        </div>

        <div className='Trend__item'>
          <div className='Trend__item--info'>
            <span>Peliculas y TV · Tendecia </span>
            <h4>#LaCasaDePapel</h4>
            <span>19,2 mil Tweets </span>
          </div>
        </div>

        <div className='Trend__item'>
          <div className='Trend__item--info'>
            <span>Deportes · Esta Mañana </span>
            <h4>
              Real Madrid, Barcelona y Atleti presentan sus nuevas equipaciones
            </h4>
          </div>
          <div className='Trend__item--img'>
            <img src={img2} alt='img2' />
          </div>
        </div>

        <div className='Trend__item'>
          <div className='Trend__item--info'>
            <span>Tendencias en Colombia </span>
            <h4>Nairobi</h4>
            <span>20,4 mil Tweets </span>
          </div>
        </div>

        <div className='Trend__timeline--more'>
          <a href='#'>Mostrar más</a>
        </div>
      </div>

      <div className='Follow'>
        <h2>A quien seguir</h2>
        <div className='Follow__item'>
          <div className='Follow__item--img'>
            <img src={profile} alt='' />
          </div>
          <div className='Follow__item--info'>
            <h4>Nombre Usuario</h4>
            <span>@Usuario</span>
          </div>
          <button type='button'> Seguir</button>
        </div>

        <div className='Follow__item'>
          <div className='Follow__item--img'>
            <img src={profile} alt='' />
          </div>
          <div className='Follow__item--info'>
            <h4>Nombre Usuario</h4>
            <span>@Usuario</span>
          </div>
          <button type='button'> Seguir</button>
        </div>

        <div className='Follow__item'>
          <div className='Follow__item--img'>
            <img src={profile} alt='' />
          </div>
          <div className='Follow__item--info'>
            <h4>Nombre Usuario</h4>
            <span>@Usuario</span>
          </div>
          <button type='button'> Seguir</button>
        </div>
        <div className='Follow__more'>
          <a href='#'>Mostar Más</a>
        </div>
      </div>

      <div className='Trend__FAQ'>
        <ul>
          <li>
            <Link to='/'>
              <span>Terminos</span>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <span>Politicas de privacidad </span>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <span>Cookies</span>
            </Link>
          </li>
        </ul>
        <div className='Trend__FAQ--info'>
          <Link to='/'>
            <span>Informacion de anuncios</span>
          </Link>
          <Link to='/'>
            <span>Más opciones </span>
            <i className='fas fa-chevron-down' />
          </Link>
          <div className='Trend__FAQ--copy'>
            <span> © 2020 By Juan Camilo Moreno ⚽</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trend;
