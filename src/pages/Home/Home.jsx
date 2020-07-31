import React from 'react';
import './Home.scss';
import Twittear from '../../components/Twittear/Twitear';

const Home = () => {
  return (
    <div className='Home'>
      <div className='Home__header'>
        <h2>Inicio</h2>
        <i className='far fa-star' />
      </div>
      <Twittear />
    </div>
  );
};

export default Home;
