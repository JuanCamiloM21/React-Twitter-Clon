import React from 'react';
import { ReTweet, Like, Share, Comment } from '../../assets/img/Icon';
import Profile from '../../assets/img/profile.jpg';
import './TweetBox.scss';

const TweetBox = () => {
  return (
    <div className='TweetBox'>
      <div className='TweetBox__image'>
        <img src={Profile} alt='Profile' />
      </div>
      <div className='TweetBox__body'>
        <div className='TweetBox__body--header'>
          <h4>Ana Belisa Martinez</h4>
          <span>@anabelisa_</span>
        </div>
        <div className='TweetBox__body--text'>
          <p>
            A veces parece que ser mujer es un castigo en medio de tanta
            desigualdad y machismo egoísta Rostro con ceño fruncido
          </p>
          <img
            src='https://kinsta.com/es/wp-content/uploads/sites/8/2018/05/qu%C3%A9-es-github-1.png'
            alt='PostImage'
          />
        </div>
        <div className='TweetBox__body--footer'>
          <ul>
            <li>
              <a href=''>
                <Comment />
              </a>
            </li>
            <li>
              <a href=''>
                <ReTweet />
              </a>
            </li>
            <li>
              <a href=''>
                <Like />
              </a>
            </li>
            <li>
              <a href=''>
                <Share />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
