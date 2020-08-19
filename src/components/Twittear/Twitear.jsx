import React, { useState } from 'react';
import './Twittear.scss';
import Profile from '../../assets/img/profile.jpg';
import { Gallery, Gif, Staticst, Emoji, Calendar } from '../../assets/img/Icon';
import db from '../../../firebase';

const Twittear = () => {
  const [tweetMessage, setTweetMessage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: 'Juan Camilo Moreno',
      userName: 'JuanCamiloM21',
      avatar:
        'https://s.gravatar.com/avatar/eca2c29ebc21e6971f9d456eb53f4812?s=80',
      image:
        'https://res.cloudinary.com/dbqhlxenn/image/upload/v1597456315/Master_atraxp.png',
      text: tweetMessage,
    });

    setTweetMessage('');
  };

  return (
    <div className='Twittear'>
      <div className='Twittear__img'>
        <img src={Profile} alt='Profile' />
      </div>
      <form className='Twittear__details'>
        <div className='Twittear__details--text'>
          <input
            value={tweetMessage}
            placeholder='¿Qué esta pasando?'
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <div className='Twittear__details--settings'>
          <ul>
            <li>
              <a href='#'>
                <Gallery />
              </a>
            </li>
            <li className='Gif'>
              <a href='#'>
                <Gif />
              </a>
            </li>
            <li className='Staticst'>
              <a href='#'>
                <Staticst />
              </a>
            </li>
            <li>
              <a href='#'>
                <Emoji />
              </a>
            </li>
            <li className='Calendar'>
              <a href='#'>
                <Calendar />
              </a>
            </li>
          </ul>
          <button type='submit' onClick={sendTweet}>
            Twittear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Twittear;
