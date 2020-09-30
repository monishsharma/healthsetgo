import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Header from './components/Header/Header';
import Categories from './views/Categories/Categories';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path = '/' component = {Home}></Route>
        <Route path = '/categories' component = {Categories}></Route>
      </Switch>
    </div>
  );
}

export default App;
