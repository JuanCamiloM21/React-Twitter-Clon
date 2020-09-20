import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Layout.scss';
import Trend from '../Trend/Trend';

const Layout = ({ children }) => {
  return (
    <div className='Layout'>
      <Navbar />
      {children}
      <Trend />
    </div>
  );
};

export default Layout;
