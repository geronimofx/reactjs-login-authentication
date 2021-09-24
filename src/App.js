import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PrivateRoute from './PrivateRoute';

import Home from "./components/home-component";
import Nav from "./components/nav-component";
import Login from "./components/login-component";
import Register from "./components/register-component";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Nav/>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <PrivateRoute exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <PrivateRoute component={NotFound}/>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
