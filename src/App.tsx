import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Layout from './helpers/Layout';
import Index from './routes/Index/Index';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>

          <Route exact={true} path={"/"} component={Index} />

          <Route path={"/"}>
            <Redirect to={"/"} />
          </Route>

        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
