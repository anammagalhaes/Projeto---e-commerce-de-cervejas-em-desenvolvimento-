import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  );
}

export default Routes; 