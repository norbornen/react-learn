import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Clock } from './components/Clock';
import { Navbar } from './components/Navbar';
import { TTranslate } from './components/TTranslate';

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Navbar />
        <div className="container mt-4">
            <Switch>
              <Route path="/clock" exact>
                <Clock /><Clock />
              </Route>
              <Route path="/translate">
                <TTranslate />
              </Route>
              <Redirect to="/clock" />
            </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
