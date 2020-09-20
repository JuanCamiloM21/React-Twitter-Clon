import React from 'react';
import { ReTweet, Like, Share, Comment } from '../../assets/img/Icon';
import './TweetBox.scss';

const TweetBox = ({ name, userName, text, avatar, image }) => {
  return (
    <div className='TweetBox'>
      <div className='TweetBox__image'>
        <img src={avatar} alt='Profile' />
      </div>
      <div className='TweetBox__body'>
        <div className='TweetBox__body--header'>
          <h4>{name}</h4>
          <span>@{userName}</span>
        </div>
        <div className='TweetBox__body--text'>
          <p>{text}</p>
          {image.length > 0 && <img src={image} alt='PostImage' />}
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
