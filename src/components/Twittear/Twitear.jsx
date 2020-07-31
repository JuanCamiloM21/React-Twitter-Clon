import React from 'react';
import './Twittear.scss';
import Profile from '../../assets/img/profile.jpg';

const Twittear = () => {
  return (
    <div className='Twittear'>
      <div className='Twittear__img'>
        <img src={Profile} alt='' />
      </div>
      <div className='Twittear__details'>
        <div className='Twittear__details--text'>
          <textarea placeholder='¿Qué esta pasando?' />
        </div>
        <div className='Twittear__details--settings'>
          <ul>
            <li>
              <a href='#'>
                <i className='far fa-image' />
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fab fa-git-square' />
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fas fa-poll-h' />
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='far fa-smile' />
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='far fa-calendar-check' />
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
