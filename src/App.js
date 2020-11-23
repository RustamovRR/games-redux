import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import User from './components/user';



function App() {

  return (
    <BrowserRouter className="App">
      <Switch>
        <Route
          exact
          path='/'
          render={() => <Redirect to='/login' />}
        />
        <Route exact path='/login' component={Login} />
        <Route exact path='/user' component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
