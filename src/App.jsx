import React from 'react';
import { Switch, Route, Redirect, withRouter, Link } from 'react-router-dom';

import NotFound from './pages/not-found.jsx';
import Blank from './pages/blank.jsx';
import Home from './pages/home.jsx';

function App() {
  return (
    <div className='App'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/blank'>Blank</Link>
        </li>
      </ul>

      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/blank' exact={true} component={Blank} />
        <Route path='/404' exact={true} component={NotFound} />
        <Redirect to='/404' exact={true} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
