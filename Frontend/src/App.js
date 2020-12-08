import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';



function App() {

  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path='/'>
          <Header />
          <Home />
        </Route>
        <Route exact path='/login'>
          <h1>Login</h1>
        </Route>
        <Route exact path='/checkout'>
          <h1>Checkout</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
