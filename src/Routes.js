import React from 'react';

import { Switch, NavLink, Route } from 'react-router-dom';

import Paycard from './screens/MainScreen';
import Editor from './screens/Editor';
import Selector from './screens/Selector';

const Routes = () => {
  return (
    <div>
      <div className="header">
        <NavLink activeClassName="active" to="/" exact>Paycard</NavLink>
        <NavLink activeClassName="active" to="/editor">Editor</NavLink>
        <NavLink activeClassName="active" to="/selector">Selector</NavLink>
      </div>
      <Switch>
        <Route path="/" exact component={Paycard} />
        <Route path="/editor" component={Editor} />
        <Route path="/selector" component={Selector} />
      </Switch>
    </div>
  )
};

export default Routes;
