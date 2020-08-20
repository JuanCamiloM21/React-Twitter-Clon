import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import './Globales.scss';
import Layout from '../components/Layout/Layout';
import Auth from '../pages/Auth/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/auth' component={Auth} />
        <Layout>
          {/* <Route exact path='/:username' component={Profile} /> */}
          <Route exact path='/' component={Home} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
