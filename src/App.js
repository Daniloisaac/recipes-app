import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppProvider from './context/AppProvider';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </AppProvider>
  );
}

export default App;
