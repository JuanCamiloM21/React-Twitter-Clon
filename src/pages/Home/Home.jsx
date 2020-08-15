import React, { useState, useEffect } from 'react';
import './Home.scss';
import Twittear from '../../components/Twittear/Twitear';
import { Discover } from '../../assets/img/Icon';
import TweetBox from '../../components/TweetBox/TweetBox';
import db from '../../../firebase';

const Home = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) =>
      setPost(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className='Home'>
      <div className='Home__header'>
        <h3>Inicio</h3>
        <Discover />
      </div>
      <Twittear />
      {posts.map((post) => (
        <TweetBox
          key={post.text}
          name={post.name}
          userName={post.userName}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default Home;
