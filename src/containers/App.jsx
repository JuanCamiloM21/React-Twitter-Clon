import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
// import Profile from '../pages/Profile';
import './Globales.scss';
import Layout from '../components/Layout/Layout';
import Auth from '../pages/Auth/Auth';
import Login from '../pages/Login/Login';
import SingUp from '../pages/SingUp/SingUp';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/singup' component={SingUp} />
        <Layout>
          {/* <Route exact path='/:username' component={Profile} /> */}
          <Route exact path='/' component={Home} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
