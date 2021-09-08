import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Material from 'components/Material';
import Stepper from 'components/Stepper';

const routes = [
  {
    path: '/',
    component: Material,
    exact: true
  },
  {
    path: '/stepper',
    component: Stepper,
  }
]

function App() {
  return (
    <Router>
      <Switch>
        {
          routes.map(route => {
            if (!route.path) throw new Error('A path is required for "Route" component');
            return <Route path={route.path} component={route.component} exact={route.exact || false} />
          })
        }
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
