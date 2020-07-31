import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile';
import './Globales.scss';
import Layout from '../components/Layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/:username' component={Profile} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
