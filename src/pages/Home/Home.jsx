import React from 'react';
import './Home.scss';
import Twittear from '../../components/Twittear/Twitear';
import { Discover } from '../../assets/img/Icon';
import TweetBox from '../../components/TweetBox/TweetBox';

const Home = () => {
  return (
    <div className='Home'>
      <div className='Home__header'>
        <h3>Inicio</h3>
        <Discover />
      </div>
      <Twittear />
      <TweetBox />
    </div>
  );
};

export default Home;
