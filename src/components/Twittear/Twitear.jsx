import React from 'react';
import './Twittear.scss';
import Profile from '../../assets/img/profile.jpg';
import { Gallery, Gif, Staticst, Emoji, Calendar } from '../../assets/img/Icon';

const Twittear = () => {
  return (
    <div className='Twittear'>
      <div className='Twittear__img'>
        <img src={Profile} alt='' />
      </div>
      <div className='Twittear__details'>
        <div className='Twittear__details--text'>
          <input placeholder='¿Qué esta pasando?' />
        </div>
        <div className='Twittear__details--settings'>
          <ul>
            <li>
              <a href='#'>
                <Gallery />
              </a>
            </li>
            <li>
              <a href='#'>
                <Gif />
              </a>
            </li>
            <li>
              <a href='#'>
                <Staticst />
              </a>
            </li>
            <li>
              <a href='#'>
                <Emoji />
              </a>
            </li>
            <li>
              <a href='#'>
                <Calendar />
              </a>
            </li>
          </ul>
          <button type='button'>Twittear</button>
        </div>
      </div>
    </div>
  );
};

export default Twittear;
