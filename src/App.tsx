import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './Constants/routes';

const Login = lazy(() => import('./Pages/Login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>It is loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
