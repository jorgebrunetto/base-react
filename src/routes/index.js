import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Layout from 'layouts';
import privateRoutes from './private';
import publicsRoutes from './publics';

export default function Routes() {
  const routes = [...publicsRoutes, ...privateRoutes];

  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          <Layout key={route.path} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
