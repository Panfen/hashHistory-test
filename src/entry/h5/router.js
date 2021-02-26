import React from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

import A from './pages/a';
import B from './pages/b';
import C from './pages/c';
import D from './pages/d';
import E from './pages/e';

function RouterConfig() {
  return (
    <Router history={hashHistory}>
      <Route path="/a" component={A} />
      <Route path="/b" component={B} />
      <Route path="/c" component={C} />
      <Route path="/d" component={D} />
      <Route path="/e" component={E} />
    </Router>
  );
}

export default RouterConfig;
