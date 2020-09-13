import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Clock } from './components/Clock';
import { Navbar } from './components/Navbar';

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
              <Route path="/test">
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
              </Route>
              <Redirect to="/clock" />
            </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
