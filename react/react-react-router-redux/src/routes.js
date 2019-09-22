import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './components/Home';

const routes = (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route
      path="/test"
      exact
      component={() => (
        <div>
          <p>test page</p>
          <Link to="/">Go home</Link>
        </div>
      )}
    />
  </Switch>
);

export default routes;
